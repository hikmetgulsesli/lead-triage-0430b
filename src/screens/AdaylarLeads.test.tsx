import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AdaylarLeads } from './AdaylarLeads';
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
];

const defaultProps = {
  leads: mockLeads,
  searchQuery: '',
  filters: { source: '', status: '', sort: '' },
  onSearch: vi.fn(),
  onFilter: vi.fn(),
  onClearFilters: vi.fn(),
  onStatusChange: vi.fn(),
  onToggleContacted: vi.fn(),
  onDelete: vi.fn(),
  onEdit: vi.fn(),
  onAddLead: vi.fn(),
  onNavigate: vi.fn(),
  onOpenProfile: vi.fn(),
  sourceLabel: { web: 'Web Sitesi', referans: 'Referans', linkedin: 'LinkedIn', outbound: 'Dış Arama', email: 'Email', diger: 'Diğer' },
  statusLabel: { yeni: 'Yeni', beklemede: 'Beklemede', iletisim: 'İletişimde', gorusuldu: 'Görüşüldü', tamamlandi: 'Tamamlandı', kazanildi: 'Kazanıldı', kaybedildi: 'Kaybedildi' },
  currency: 'TRY',
};

describe('AdaylarLeads', () => {
  it('renders lead list with all rows', () => {
    render(<AdaylarLeads {...defaultProps} />);
    expect(screen.getByText('Elif Yılmaz')).toBeInTheDocument();
    expect(screen.getByText('Ahmet Kaya')).toBeInTheDocument();
    expect(screen.getByText('Zeynep Aktaş')).toBeInTheDocument();
  });

  it('renders empty message when no leads', () => {
    render(<AdaylarLeads {...defaultProps} leads={[]} />);
    expect(screen.getByText('Arama kriterlerine uygun aday bulunamadı.')).toBeInTheDocument();
  });

  it('calls onSearch when search input changes', () => {
    const onSearch = vi.fn();
    render(<AdaylarLeads {...defaultProps} onSearch={onSearch} />);
    const input = screen.getByPlaceholderText('Arama yapın...');
    fireEvent.change(input, { target: { value: 'Elif' } });
    expect(onSearch).toHaveBeenCalledWith('Elif');
  });

  it('calls onFilter when source filter changes', () => {
    const onFilter = vi.fn();
    render(<AdaylarLeads {...defaultProps} onFilter={onFilter} />);
    const select = screen.getByDisplayValue('Kaynak: Tümü');
    fireEvent.change(select, { target: { value: 'web' } });
    expect(onFilter).toHaveBeenCalledWith('source', 'web');
  });

  it('calls onClearFilters when clear button clicked', () => {
    const onClearFilters = vi.fn();
    render(<AdaylarLeads {...defaultProps} onClearFilters={onClearFilters} />);
    fireEvent.click(screen.getByText('Temizle'));
    expect(onClearFilters).toHaveBeenCalled();
  });

  it('calls onToggleContacted when check_circle button clicked', () => {
    const onToggleContacted = vi.fn();
    render(<AdaylarLeads {...defaultProps} onToggleContacted={onToggleContacted} />);
    const buttons = screen.getAllByTitle('Görüşüldü İşaretle');
    fireEvent.click(buttons[0]);
    expect(onToggleContacted).toHaveBeenCalledWith('1');
  });

  it('calls onEdit when edit button clicked', () => {
    const onEdit = vi.fn();
    render(<AdaylarLeads {...defaultProps} onEdit={onEdit} />);
    const buttons = screen.getAllByTitle('Düzenle');
    fireEvent.click(buttons[0]);
    expect(onEdit).toHaveBeenCalledWith(mockLeads[0]);
  });

  it('calls onDelete when delete button clicked', () => {
    const onDelete = vi.fn();
    render(<AdaylarLeads {...defaultProps} onDelete={onDelete} />);
    const buttons = screen.getAllByTitle('Sil');
    fireEvent.click(buttons[0]);
    expect(onDelete).toHaveBeenCalledWith('1');
  });

  it('shows correct status badges', () => {
    render(<AdaylarLeads {...defaultProps} />);
    expect(screen.getAllByText('Yeni').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Görüşüldü').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Beklemede').length).toBeGreaterThanOrEqual(1);
  });

  it('shows total count in footer', () => {
    render(<AdaylarLeads {...defaultProps} />);
    expect(screen.getByText('Toplam 3 aday gösteriliyor')).toBeInTheDocument();
  });
});
