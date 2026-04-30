import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AnalizlerInsights } from './AnalizlerInsights';
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
  {
    id: '5',
    name: 'Selin Koç',
    company: 'EnerjiSA',
    source: 'email',
    estimatedValue: 50000,
    status: 'kaybedildi',
    nextAction: 'Arşivle',
    date: '2024-04-10',
    contacted: true,
  },
];

const defaultProps = {
  stats: { total: 5, contacted: 3, won: 1, lost: 1, totalValue: 625000 },
  leads: mockLeads,
  currency: 'TRY',
  onNavigate: vi.fn(),
  onOpenProfile: vi.fn(),
  onExport: vi.fn(),
};

describe('AnalizlerInsights', () => {
  it('renders insights header', () => {
    render(<AnalizlerInsights {...defaultProps} />);
    expect(screen.getByText('Analizler')).toBeInTheDocument();
    expect(screen.getByText('Son 30 günlük pipeline performansı.')).toBeInTheDocument();
  });

  it('renders KPI cards', () => {
    render(<AnalizlerInsights {...defaultProps} />);
    expect(screen.getByText('Toplam Aday')).toBeInTheDocument();
    expect(screen.getByText('Kazanılan/Kaybedilen')).toBeInTheDocument();
    expect(screen.getByText('Tahmini Gelir')).toBeInTheDocument();
  });

  it('shows total lead count', () => {
    render(<AnalizlerInsights {...defaultProps} />);
    const totalAdaySection = screen.getByText('Toplam Aday').closest('div')?.parentElement;
    expect(totalAdaySection?.textContent).toContain('5');
  });

  it('shows win rate', () => {
    render(<AnalizlerInsights {...defaultProps} />);
    const kazanilanSection = screen.getByText('Kazanılan/Kaybedilen').closest('div')?.parentElement;
    expect(kazanilanSection?.textContent).toContain('50%');
  });

  it('shows total value', () => {
    render(<AnalizlerInsights {...defaultProps} />);
    expect(screen.getByText('₺625.000')).toBeInTheDocument();
  });

  it('calls onExport when Dışa Aktar button clicked', () => {
    const onExport = vi.fn();
    render(<AnalizlerInsights {...defaultProps} onExport={onExport} />);
    fireEvent.click(screen.getByText('Dışa Aktar'));
    expect(onExport).toHaveBeenCalled();
  });

  it('renders weekly activity section', () => {
    render(<AnalizlerInsights {...defaultProps} />);
    expect(screen.getByText('Haftalık Aktivite')).toBeInTheDocument();
  });

  it('renders conversion funnel section', () => {
    render(<AnalizlerInsights {...defaultProps} />);
    expect(screen.getByText('Dönüşüm Hunisi')).toBeInTheDocument();
    expect(screen.getByText('İletişime Geçildi')).toBeInTheDocument();
    expect(screen.getByText('Görüşüldü')).toBeInTheDocument();
    expect(screen.getByText('Kazanıldı')).toBeInTheDocument();
  });

  it('handles zero stats gracefully', () => {
    render(
      <AnalizlerInsights
        {...defaultProps}
        stats={{ total: 0, contacted: 0, won: 0, lost: 0, totalValue: 0 }}
        leads={[]}
      />
    );
    expect(screen.getByText('Analizler')).toBeInTheDocument();
    const totalAdaySection = screen.getByText('Toplam Aday').closest('div')?.parentElement;
    expect(totalAdaySection?.textContent).toContain('0');
    const kazanilanSection = screen.getByText('Kazanılan/Kaybedilen').closest('div')?.parentElement;
    expect(kazanilanSection?.textContent).toContain('0%');
  });

  it('shows correct won/lost breakdown in funnel', () => {
    render(<AnalizlerInsights {...defaultProps} />);
    expect(screen.getByText('1 Kazanılan')).toBeInTheDocument();
    expect(screen.getByText('1 Kaybedilen')).toBeInTheDocument();
  });

  it('renders bar chart legend', () => {
    render(<AnalizlerInsights {...defaultProps} />);
    expect(screen.getByText('Yeni')).toBeInTheDocument();
    expect(screen.getByText('Kapandı')).toBeInTheDocument();
  });
});
