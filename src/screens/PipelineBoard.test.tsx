import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PipelineBoard } from './PipelineBoard';
import type { Lead } from '../types/domain';

const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Elif Yılmaz',
    company: 'Reel Forge',
    source: 'web',
    estimatedValue: 100000,
    status: 'yeni',
    nextAction: 'İlk aramayı yap',
    date: '2024-01-15',
    contacted: false,
  },
  {
    id: '2',
    name: 'Ahmet Kaya',
    company: 'Beta Yazılım',
    source: 'referans',
    estimatedValue: 75000,
    status: 'gorusuldu',
    nextAction: 'Teklif gönder',
    date: '2024-02-20',
    contacted: true,
  },
  {
    id: '3',
    name: 'Zeynep Aktaş',
    company: 'Global Tech',
    source: 'linkedin',
    estimatedValue: 250000,
    status: 'beklemede',
    nextAction: 'Demo planla',
    date: '2024-03-10',
    contacted: false,
  },
  {
    id: '4',
    name: 'Mehmet Demir',
    company: 'Acme Corp',
    source: 'outbound',
    estimatedValue: 150000,
    status: 'kazanildi',
    nextAction: 'Sözleşme imzala',
    date: '2024-04-01',
    contacted: true,
  },
];

const defaultProps = {
  leads: mockLeads,
  onStatusChange: vi.fn(),
  onNavigate: vi.fn(),
  onOpenProfile: vi.fn(),
  onAddLead: vi.fn(),
  currency: 'TRY',
};

describe('PipelineBoard', () => {
  it('renders board with Q3 Satış Süreci header', () => {
    render(<PipelineBoard {...defaultProps} />);
    expect(screen.getByText('Q3 Satış Süreci')).toBeInTheDocument();
    expect(screen.getByText('Kanban görünümü ve fırsat yönetimi')).toBeInTheDocument();
  });

  it('renders all status columns', () => {
    render(<PipelineBoard {...defaultProps} />);
    expect(screen.getByText('Yeni')).toBeInTheDocument();
    expect(screen.getByText('Beklemede')).toBeInTheDocument();
    expect(screen.getByText('İletişimde')).toBeInTheDocument();
    expect(screen.getByText('Görüşüldü')).toBeInTheDocument();
    expect(screen.getByText('Tamamlandı')).toBeInTheDocument();
    expect(screen.getByText('Kazanıldı')).toBeInTheDocument();
    expect(screen.getByText('Kaybedildi')).toBeInTheDocument();
  });

  it('shows lead count per column', () => {
    render(<PipelineBoard {...defaultProps} />);
    // Yeni column should have count 1 — find badge next to "Yeni" heading
    const yeniColumn = screen.getByText('Yeni').closest('div')?.parentElement;
    expect(yeniColumn?.textContent).toContain('1');
  });

  it('shows lead cards in correct columns', () => {
    render(<PipelineBoard {...defaultProps} />);
    expect(screen.getByText('Reel Forge')).toBeInTheDocument();
    expect(screen.getByText('Beta Yazılım')).toBeInTheDocument();
    expect(screen.getByText('Global Tech')).toBeInTheDocument();
    expect(screen.getByText('Acme Corp')).toBeInTheDocument();
  });

  it('shows total value per column', () => {
    render(<PipelineBoard {...defaultProps} />);
    const values = screen.getAllByText(/Tahmini Değer/);
    expect(values.length).toBeGreaterThanOrEqual(1);
    // Verify Yeni column shows correct total (100000 for Elif Yılmaz)
    const yeniColumn = screen.getByText('Yeni').closest('div')?.parentElement;
    expect(yeniColumn?.textContent).toContain('₺100.000');
  });

  it('calls onAddLead when Yeni Fırsat button clicked', () => {
    const onAddLead = vi.fn();
    render(<PipelineBoard {...defaultProps} onAddLead={onAddLead} />);
    fireEvent.click(screen.getByText('Yeni Fırsat'));
    expect(onAddLead).toHaveBeenCalled();
  });

  it('calls onStatusChange with leadId and nextStatus when more_vert button clicked', () => {
    const onStatusChange = vi.fn();
    render(<PipelineBoard {...defaultProps} onStatusChange={onStatusChange} />);
    // Lead '1' (Reel Forge) is in 'yeni' column; clicking more_vert cycles to 'beklemede'
    const buttons = screen.getAllByTitle('Durum değiştir');
    fireEvent.click(buttons[0]);
    expect(onStatusChange).toHaveBeenCalledWith('1', 'beklemede');
  });

  it('shows empty state message for empty columns', () => {
    render(<PipelineBoard {...defaultProps} leads={[]} />);
    const emptyMessages = screen.getAllByText(/Bu kolonda aday yok|Henüz kazanılan fırsat yok|Henüz kaybedilen fırsat yok/);
    expect(emptyMessages.length).toBeGreaterThan(0);
  });

  it('shows empty state for kazanildi column when no won leads', () => {
    render(<PipelineBoard {...defaultProps} leads={mockLeads.filter(l => l.status !== 'kazanildi')} />);
    expect(screen.getByText('Henüz kazanılan fırsat yok.')).toBeInTheDocument();
  });

  it('shows empty state for kaybedildi column when no lost leads', () => {
    render(<PipelineBoard {...defaultProps} leads={mockLeads.filter(l => l.status !== 'kaybedildi')} />);
    expect(screen.getByText('Henüz kaybedilen fırsat yok.')).toBeInTheDocument();
  });

  it('renders with different currency', () => {
    render(<PipelineBoard {...defaultProps} currency="USD" />);
    expect(screen.getByText('Q3 Satış Süreci')).toBeInTheDocument();
  });
});
