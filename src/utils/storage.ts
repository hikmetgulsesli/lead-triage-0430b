import type { AppState } from '../types/domain';

const STORAGE_KEY = 'leadtriage_state';
const SIMULATE_ERROR_KEY = 'leadtriage_simulate_error';

export function loadState(): Partial<AppState> | null {
  try {
    if (localStorage.getItem(SIMULATE_ERROR_KEY) === 'true') {
      throw new Error('Simulated storage error');
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveState(state: AppState): boolean {
  try {
    if (localStorage.getItem(SIMULATE_ERROR_KEY) === 'true') {
      throw new Error('Simulated storage error');
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function clearStorage(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function setSimulateError(enabled: boolean): void {
  localStorage.setItem(SIMULATE_ERROR_KEY, enabled ? 'true' : 'false');
}

export function isSimulateError(): boolean {
  return localStorage.getItem(SIMULATE_ERROR_KEY) === 'true';
}

export function exportData(state: AppState): string {
  return JSON.stringify(state, null, 2);
}

export function downloadExport(state: AppState): void {
  const blob = new Blob([exportData(state)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `leadtriage-export-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function formatCurrency(value: number, currency: string): string {
  const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '₺';
  return `${symbol}${value.toLocaleString('tr-TR')}`;
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' });
}

export const SEED_LEADS = [
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
  {
    id: 'seed-2',
    name: 'Ayşe Demir',
    company: 'Global Tech',
    source: 'referans' as const,
    estimatedValue: 120000,
    status: 'beklemede' as const,
    nextAction: 'Teklif gönderilecek',
    date: '2023-10-10',
    contacted: false,
  },
  {
    id: 'seed-3',
    name: 'Mehmet Kaya',
    company: 'NextGen Inc',
    source: 'outbound' as const,
    estimatedValue: 15000,
    status: 'gorusuldu' as const,
    nextAction: 'Takip araması (Cuma)',
    date: '2023-10-08',
    contacted: true,
  },
  {
    id: 'seed-4',
    name: 'Elif Şahin',
    company: 'TechVision A.Ş.',
    source: 'linkedin' as const,
    estimatedValue: 120000,
    status: 'yeni' as const,
    nextAction: 'LinkedIn mesajı gönder',
    date: '2023-10-14',
    contacted: false,
  },
  {
    id: 'seed-5',
    name: 'Can Özdemir',
    company: 'Global Lojistik',
    source: 'email' as const,
    estimatedValue: 250000,
    status: 'iletisim' as const,
    nextAction: 'Toplantı planla',
    date: '2023-10-15',
    contacted: true,
  },
  {
    id: 'seed-6',
    name: 'Zeynep Aktaş',
    company: 'Beta Yazılım',
    source: 'web' as const,
    estimatedValue: 80000,
    status: 'beklemede' as const,
    nextAction: 'Demo hazırla',
    date: '2023-10-16',
    contacted: false,
  },
  {
    id: 'seed-7',
    name: 'Burak Çelik',
    company: 'Marmara Retail',
    source: 'referans' as const,
    estimatedValue: 180000,
    status: 'iletisim' as const,
    nextAction: 'Sözleşme taslak hazırla',
    date: '2023-10-17',
    contacted: true,
  },
  {
    id: 'seed-8',
    name: 'Selin Koç',
    company: 'EnerjiSA Projesi',
    source: 'outbound' as const,
    estimatedValue: 550000,
    status: 'gorusuldu' as const,
    nextAction: 'Teklif sunumu yap',
    date: '2023-10-20',
    contacted: true,
  },
];