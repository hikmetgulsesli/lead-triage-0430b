import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppState } from './useAppState';
import { loadState, saveState, clearStorage, SEED_LEADS } from '../utils/storage';

vi.mock('../utils/storage', () => ({
  loadState: vi.fn(),
  saveState: vi.fn(() => true),
  clearStorage: vi.fn(),
  setSimulateError: vi.fn(),
  isSimulateError: vi.fn(() => false),
  SEED_LEADS: [
    {
      id: 'seed-1',
      name: 'Ahmet Yılmaz',
      company: 'Acme Corp',
      source: 'web' as const,
      estimatedValue: 45000,
      status: 'yeni' as const,
      nextAction: 'İlk aramayı yap',
      date: '2023-10-12',
      contacted: false,
    },
  ],
}));

describe('useAppState', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('initializes with default state when no saved state', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue(null);
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.leads).toEqual([]);
    expect(result.current.state.settings.currency).toBe('TRY');
    expect(result.current.state.profile.name).toBe('Freelancer');
  });

  it('loads saved state from storage', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue({
      leads: [{ id: '1', name: 'Elif Yılmaz', company: 'Reel Forge', source: 'web', estimatedValue: 100000, status: 'yeni', nextAction: 'Ara', date: '2024-01-01', contacted: false }],
      settings: { currency: 'USD', density: 'default', notifications: { newLead: true, followUp: false } },
    });
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.leads).toHaveLength(1);
    expect(result.current.state.settings.currency).toBe('USD');
  });

  it('adds a lead', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue(null);
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.addLead({
        name: 'Mehmet Kaya',
        company: 'Beta Yazılım',
        source: 'referans',
        estimatedValue: 75000,
        status: 'yeni',
        nextAction: 'Email gönder',
        date: '2024-02-15',
        contacted: false,
      });
    });
    expect(result.current.state.leads).toHaveLength(1);
    expect(result.current.state.leads[0].name).toBe('Mehmet Kaya');
    expect(result.current.state.leads[0].id).toBeDefined();
  });

  it('updates a lead', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue({
      leads: [{ id: '1', name: 'Ahmet', company: 'X', source: 'web', estimatedValue: 10000, status: 'yeni', nextAction: 'Ara', date: '2024-01-01', contacted: false }],
    });
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.updateLead({ ...result.current.state.leads[0], name: 'Ahmet Yılmaz', estimatedValue: 20000 });
    });
    expect(result.current.state.leads[0].name).toBe('Ahmet Yılmaz');
    expect(result.current.state.leads[0].estimatedValue).toBe(20000);
  });

  it('deletes a lead', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue({
      leads: [
        { id: '1', name: 'A', company: 'X', source: 'web', estimatedValue: 10000, status: 'yeni', nextAction: 'Ara', date: '2024-01-01', contacted: false },
        { id: '2', name: 'B', company: 'Y', source: 'referans', estimatedValue: 20000, status: 'beklemede', nextAction: 'Mail', date: '2024-01-02', contacted: false },
      ],
    });
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.deleteLead('1');
    });
    expect(result.current.state.leads).toHaveLength(1);
    expect(result.current.state.leads[0].id).toBe('2');
  });

  it('sets status', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue({
      leads: [{ id: '1', name: 'A', company: 'X', source: 'web', estimatedValue: 10000, status: 'yeni', nextAction: 'Ara', date: '2024-01-01', contacted: false }],
    });
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setStatus('1', 'iletisim');
    });
    expect(result.current.state.leads[0].status).toBe('iletisim');
  });

  it('marks as contacted', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue({
      leads: [{ id: '1', name: 'A', company: 'X', source: 'web', estimatedValue: 10000, status: 'yeni', nextAction: 'Ara', date: '2024-01-01', contacted: false }],
    });
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setContacted('1');
    });
    expect(result.current.state.leads[0].contacted).toBe(true);
    expect(result.current.state.leads[0].status).toBe('gorusuldu');
  });

  it('searches leads', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue({
      leads: [
        { id: '1', name: 'Ahmet Yılmaz', company: 'Acme', source: 'web', estimatedValue: 10000, status: 'yeni', nextAction: 'Ara', date: '2024-01-01', contacted: false },
        { id: '2', name: 'Ayşe Demir', company: 'Beta', source: 'referans', estimatedValue: 20000, status: 'beklemede', nextAction: 'Mail', date: '2024-01-02', contacted: false },
      ],
    });
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setSearch('Ayşe');
    });
    expect(result.current.state.searchQuery).toBe('Ayşe');
  });

  it('sets filters', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue(null);
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setFilters({ source: 'web' });
    });
    expect(result.current.state.filters.source).toBe('web');
  });

  it('clears filters', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue({
      searchQuery: 'test',
      filters: { source: 'web', status: 'yeni', sort: 'high' },
    });
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.clearFilters();
    });
    expect(result.current.state.searchQuery).toBe('');
    expect(result.current.state.filters.source).toBe('');
    expect(result.current.state.filters.status).toBe('');
    expect(result.current.state.filters.sort).toBe('');
  });

  it('updates settings', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue(null);
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setSettings({ currency: 'EUR' });
    });
    expect(result.current.state.settings.currency).toBe('EUR');
  });

  it('updates profile', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue(null);
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setProfile({ name: 'Elif Yılmaz' });
    });
    expect(result.current.state.profile.name).toBe('Elif Yılmaz');
  });

  it('loads seed data', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue(null);
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.loadSeedData();
    });
    expect(result.current.state.leads.length).toBeGreaterThan(0);
  });

  it('clears all data', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue({
      leads: [{ id: '1', name: 'A', company: 'X', source: 'web', estimatedValue: 10000, status: 'yeni', nextAction: 'Ara', date: '2024-01-01', contacted: false }],
    });
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.clearAll();
    });
    expect(result.current.state.leads).toEqual([]);
    expect(result.current.state.error).toBeNull();
    expect(clearStorage).toHaveBeenCalled();
  });

  it('sets and clears error', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue(null);
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setError('Bir hata oluştu');
    });
    expect(result.current.state.error).toBe('Bir hata oluştu');
    act(() => {
      result.current.setError(null);
    });
    expect(result.current.state.error).toBeNull();
  });

  it('persists state on change', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue(null);
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.addLead({
        name: 'Test Lead',
        company: 'Test Co',
        source: 'web',
        estimatedValue: 5000,
        status: 'yeni',
        nextAction: 'Test',
        date: '2024-03-01',
        contacted: false,
      });
    });
    expect(saveState).toHaveBeenCalled();
  });

  it('simulates save error and retries', () => {
    (loadState as ReturnType<typeof vi.fn>).mockReturnValue(null);
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setError('Veri kaydedilirken bir hata oluştu');
    });
    expect(result.current.state.error).toBe('Veri kaydedilirken bir hata oluştu');
    act(() => {
      result.current.retrySave();
    });
    expect(result.current.state.error).toBeNull();
  });
});
