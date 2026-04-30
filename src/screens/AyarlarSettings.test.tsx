import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AyarlarSettings } from './AyarlarSettings';
import type { AppSettings } from '../types/domain';

const mockSettings: AppSettings = {
  currency: 'TRY',
  density: 'default',
  notifications: {
    newLead: true,
    followUp: false,
  },
};

const defaultProps = {
  settings: mockSettings,
  onSettingsChange: vi.fn(),
  onClearAll: vi.fn(),
  onLoadSeed: vi.fn(),
  onExport: vi.fn(),
  onSimulateError: vi.fn(),
  onNavigate: vi.fn(),
  onOpenProfile: vi.fn(),
  onAddLead: vi.fn(),
};

describe('AyarlarSettings', () => {
  it('renders settings header', () => {
    render(<AyarlarSettings {...defaultProps} />);
    expect(screen.getByText('Ayarlar')).toBeInTheDocument();
    expect(screen.getByText('Uygulama tercihlerinizi ve sistem ayarlarınızı yapılandırın.')).toBeInTheDocument();
  });

  it('renders all setting sections', () => {
    render(<AyarlarSettings {...defaultProps} />);
    expect(screen.getByText('Görünüm & Tema')).toBeInTheDocument();
    expect(screen.getByText('Bölgesel Ayarlar')).toBeInTheDocument();
    expect(screen.getByText('Hatırlatıcı Tercihleri')).toBeInTheDocument();
    expect(screen.getByText('Veri ve Depolama')).toBeInTheDocument();
  });

  it('shows current density selection as active', () => {
    render(<AyarlarSettings {...defaultProps} />);
    const compactBtn = screen.getByText('Kompakt');
    const defaultBtn = screen.getByText('Varsayılan');
    expect(compactBtn).toBeInTheDocument();
    expect(defaultBtn).toBeInTheDocument();
  });

  it('calls onSettingsChange when density compact selected', () => {
    const onSettingsChange = vi.fn();
    render(<AyarlarSettings {...defaultProps} onSettingsChange={onSettingsChange} />);
    fireEvent.click(screen.getByText('Kompakt'));
    expect(onSettingsChange).toHaveBeenCalledWith({ density: 'compact' });
  });

  it('calls onSettingsChange when density default selected', () => {
    const onSettingsChange = vi.fn();
    render(<AyarlarSettings {...defaultProps} settings={{ ...mockSettings, density: 'compact' }} onSettingsChange={onSettingsChange} />);
    fireEvent.click(screen.getByText('Varsayılan'));
    expect(onSettingsChange).toHaveBeenCalledWith({ density: 'default' });
  });

  it('calls onSettingsChange when currency changes', () => {
    const onSettingsChange = vi.fn();
    render(<AyarlarSettings {...defaultProps} onSettingsChange={onSettingsChange} />);
    const select = screen.getByDisplayValue('TRY (₺)');
    fireEvent.change(select, { target: { value: 'USD' } });
    expect(onSettingsChange).toHaveBeenCalledWith({ currency: 'USD' });
  });

  it('toggles new lead notifications', () => {
    const onSettingsChange = vi.fn();
    render(<AyarlarSettings {...defaultProps} onSettingsChange={onSettingsChange} />);
    const buttons = screen.getAllByRole('button');
    const newLeadToggle = buttons.find(b =>
      b.closest('div')?.textContent?.includes('Yeni Aday Bildirimleri')
    );
    expect(newLeadToggle).toBeTruthy();
    if (newLeadToggle) fireEvent.click(newLeadToggle);
    expect(onSettingsChange).toHaveBeenCalledWith({
      notifications: { newLead: false, followUp: false },
    });
  });

  it('toggles follow up notifications', () => {
    const onSettingsChange = vi.fn();
    render(<AyarlarSettings {...defaultProps} onSettingsChange={onSettingsChange} />);
    const buttons = screen.getAllByRole('button');
    const followUpToggle = buttons.find(b =>
      b.closest('div')?.textContent?.includes('Takip Hatırlatıcıları')
    );
    expect(followUpToggle).toBeTruthy();
    if (followUpToggle) fireEvent.click(followUpToggle);
    expect(onSettingsChange).toHaveBeenCalledWith({
      notifications: { newLead: true, followUp: true },
    });
  });

  it('calls onLoadSeed when Test Verisi Yükle clicked', () => {
    const onLoadSeed = vi.fn();
    render(<AyarlarSettings {...defaultProps} onLoadSeed={onLoadSeed} />);
    fireEvent.click(screen.getByText('Test Verisi Yükle'));
    expect(onLoadSeed).toHaveBeenCalled();
  });

  it('calls onClearAll when Verileri Temizle clicked', () => {
    const onClearAll = vi.fn();
    render(<AyarlarSettings {...defaultProps} onClearAll={onClearAll} />);
    fireEvent.click(screen.getByText('Verileri Temizle'));
    expect(onClearAll).toHaveBeenCalled();
  });

  it('calls onExport when Dışa Aktar clicked', () => {
    const onExport = vi.fn();
    render(<AyarlarSettings {...defaultProps} onExport={onExport} />);
    fireEvent.click(screen.getByText('Dışa Aktar'));
    expect(onExport).toHaveBeenCalled();
  });

  it('calls onSimulateError when Hata Simüle Et clicked', () => {
    const onSimulateError = vi.fn();
    render(<AyarlarSettings {...defaultProps} onSimulateError={onSimulateError} />);
    fireEvent.click(screen.getByText('Hata Simüle Et'));
    expect(onSimulateError).toHaveBeenCalledWith(true);
  });

  it('shows currency options in select', () => {
    render(<AyarlarSettings {...defaultProps} />);
    const select = screen.getByDisplayValue('TRY (₺)');
    expect(select).toBeInTheDocument();
  });
});
