import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

vi.mock('./utils/storage', async () => {
  const actual = await vi.importActual('./utils/storage');
  return {
    ...actual as object,
    loadState: vi.fn(() => null),
    saveState: vi.fn(() => true),
  };
});

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.querySelector('nav')).toBeTruthy();
  });

  it('shows app title', () => {
    render(<App />);
    expect(screen.getByText('LeadTriage')).toBeInTheDocument();
  });

  it('shows empty state when no leads', () => {
    render(<App />);
    expect(screen.getByText('Henüz adayınız bulunmuyor.')).toBeInTheDocument();
  });

  it('opens add lead modal', () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Adayı Ekle'));
    expect(screen.getByText('Yeni Aday Ekle')).toBeInTheDocument();
  });

  it('navigates to pipeline view', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Pipeline')[0]);
    expect(screen.getAllByText('Q3 Satış Süreci')[0]).toBeInTheDocument();
  });

  it('navigates to insights view', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Analizler')[0]);
    expect(screen.getAllByText('Analizler')[0]).toBeInTheDocument();
  });

  it('navigates to settings view', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Ayarlar')[0]);
    expect(screen.getAllByText('Ayarlar')[0]).toBeInTheDocument();
  });

  it('opens profile panel', () => {
    render(<App />);
    const profileButton = screen.getByLabelText('Profil');
    fireEvent.click(profileButton);
    expect(screen.getByText('Kullanıcı Profili')).toBeInTheDocument();
  });

  it('closes profile panel', () => {
    render(<App />);
    const profileButton = screen.getByLabelText('Profil');
    fireEvent.click(profileButton);
    fireEvent.click(screen.getByLabelText('Kapat'));
    expect(screen.queryByText('Kullanıcı Profili')).not.toBeInTheDocument();
  });

  it('adds a lead through the form', () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Adayı Ekle'));
    const nameInput = screen.getByLabelText(/Ad Soyad/);
    fireEvent.change(nameInput, { target: { value: 'Elif Yılmaz' } });
    const companyInput = screen.getByLabelText(/Şirket/);
    fireEvent.change(companyInput, { target: { value: 'Reel Forge' } });
    fireEvent.click(screen.getByText('Kaydet'));
    expect(screen.getByText('Elif Yılmaz')).toBeInTheDocument();
  });

  it('loads seed data from settings', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Ayarlar')[0]);
    fireEvent.click(screen.getByText('Test Verisi Yükle'));
    expect(screen.getAllByText('Ahmet Yılmaz')[0]).toBeInTheDocument();
  });

  it('searches leads', () => {
    render(<App />);
    fireEvent.click(screen.getByText('İlk Adayı Ekle'));
    const nameInput = screen.getByLabelText(/Ad Soyad/);
    fireEvent.change(nameInput, { target: { value: 'Mehmet Kaya' } });
    fireEvent.click(screen.getByText('Kaydet'));
    const searchInput = screen.getAllByPlaceholderText('Arama yapın...')[0];
    fireEvent.change(searchInput, { target: { value: 'Mehmet' } });
    expect(screen.getAllByText('Mehmet Kaya')[0]).toBeInTheDocument();
  });
});
