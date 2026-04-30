import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AdayEkleduzenle } from './AdayEkleduzenle';
import type { Lead } from '../types/domain';

const existingLead: Lead = {
  id: 'lead-1',
  name: 'Elif Yılmaz',
  company: 'Reel Forge',
  source: 'linkedin',
  status: 'gorusuldu',
  estimatedValue: 150000,
  date: '2024-04-01',
  nextAction: 'Sözleşme imzala',
  contacted: true,
};

describe('AdayEkleduzenle', () => {
  it('renders add form with correct title', () => {
    render(<AdayEkleduzenle onSave={vi.fn()} onClose={vi.fn()} />);
    expect(screen.getByText('Yeni Aday Ekle')).toBeInTheDocument();
  });

  it('renders edit form with correct title when lead provided', () => {
    render(<AdayEkleduzenle lead={existingLead} onSave={vi.fn()} onClose={vi.fn()} />);
    expect(screen.getByText('Adayı Düzenle')).toBeInTheDocument();
  });

  it('calls onClose when close button clicked', () => {
    const onClose = vi.fn();
    render(<AdayEkleduzenle onSave={vi.fn()} onClose={onClose} />);
    fireEvent.click(screen.getByLabelText('Kapat'));
    expect(onClose).toHaveBeenCalled();
  });

  it('calls onClose when İptal button clicked', () => {
    const onClose = vi.fn();
    render(<AdayEkleduzenle onSave={vi.fn()} onClose={onClose} />);
    fireEvent.click(screen.getByText('İptal'));
    expect(onClose).toHaveBeenCalled();
  });

  it('shows validation error when name is empty', () => {
    render(<AdayEkleduzenle onSave={vi.fn()} onClose={vi.fn()} />);
    fireEvent.click(screen.getByText('Kaydet'));
    expect(screen.getByText('Ad Soyad alanı zorunludur.')).toBeInTheDocument();
  });

  it('calls onSave with correct data when form is valid', () => {
    const onSave = vi.fn();
    render(<AdayEkleduzenle onSave={onSave} onClose={vi.fn()} />);
    fireEvent.change(screen.getByLabelText(/Ad Soyad/), { target: { value: 'Mehmet Demir' } });
    fireEvent.change(screen.getByLabelText(/Şirket/), { target: { value: 'Acme Corp' } });
    fireEvent.change(screen.getByLabelText(/Tahmini Değer/), { target: { value: '50000' } });
    fireEvent.change(screen.getByLabelText(/Tarih/), { target: { value: '2024-05-10' } });
    fireEvent.change(screen.getByLabelText(/Sonraki Aksiyon/), { target: { value: 'Toplantı planla' } });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(onSave).toHaveBeenCalledOnce();
    const saved = onSave.mock.calls[0][0];
    expect(saved.name).toBe('Mehmet Demir');
    expect(saved.company).toBe('Acme Corp');
    expect(saved.estimatedValue).toBe(50000);
    expect(saved.contacted).toBe(false);
  });

  it('pre-fills form when editing existing lead', () => {
    render(<AdayEkleduzenle lead={existingLead} onSave={vi.fn()} onClose={vi.fn()} />);
    expect((screen.getByLabelText(/Ad Soyad/) as HTMLInputElement).value).toBe('Elif Yılmaz');
    expect((screen.getByLabelText(/Şirket/) as HTMLInputElement).value).toBe('Reel Forge');
    expect((screen.getByLabelText(/Tahmini Değer/) as HTMLInputElement).value).toBe('150000');
  });

  it('calls onSave with lead id when editing', () => {
    const onSave = vi.fn();
    render(<AdayEkleduzenle lead={existingLead} onSave={onSave} onClose={vi.fn()} />);
    fireEvent.change(screen.getByLabelText(/Ad Soyad/), { target: { value: 'Elif Yılmaz Güncel' } });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(onSave).toHaveBeenCalledOnce();
    const saved = onSave.mock.calls[0][0];
    expect(saved.id).toBe('lead-1');
    expect(saved.name).toBe('Elif Yılmaz Güncel');
  });

  it('sets contacted to true when status is gorusuldu', () => {
    const onSave = vi.fn();
    render(<AdayEkleduzenle onSave={onSave} onClose={vi.fn()} />);
    fireEvent.change(screen.getByLabelText(/Ad Soyad/), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/Durum/), { target: { value: 'gorusuldu' } });
    fireEvent.click(screen.getByText('Kaydet'));
    const saved = onSave.mock.calls[0][0];
    expect(saved.contacted).toBe(true);
  });
});
