export type LeadStatus = 'yeni' | 'beklemede' | 'iletisim' | 'gorusuldu' | 'tamamlandi' | 'kazanildi' | 'kaybedildi';
export type LeadSource = 'web' | 'referans' | 'outbound' | 'linkedin' | 'email' | 'diger';

export interface Lead {
  id: string;
  name: string;
  company: string;
  source: LeadSource;
  estimatedValue: number;
  status: LeadStatus;
  nextAction: string;
  date: string;
  contacted: boolean;
}

export interface AppSettings {
  currency: 'TRY' | 'USD' | 'EUR';
  density: 'compact' | 'default';
  notifications: {
    newLead: boolean;
    followUp: boolean;
  };
}

export interface UserProfile {
  name: string;
  email: string;
  timezone: string;
  avatar?: string;
}

export interface AppFilters {
  source: string;
  status: string;
  sort: string;
}

export interface AppState {
  leads: Lead[];
  settings: AppSettings;
  profile: UserProfile;
  error: string | null;
  searchQuery: string;
  filters: AppFilters;
}

export type AppView =
  | 'leads'
  | 'pipeline'
  | 'insights'
  | 'settings'
  | 'profile'
  | 'addLead'
  | 'editLead'
  | 'error'
  | 'empty';

export type AppAction =
  | { type: 'SET_LEADS'; payload: Lead[] }
  | { type: 'ADD_LEAD'; payload: Lead }
  | { type: 'UPDATE_LEAD'; payload: Lead }
  | { type: 'DELETE_LEAD'; payload: string }
  | { type: 'SET_STATUS'; payload: { id: string; status: LeadStatus } }
  | { type: 'SET_CONTACTED'; payload: string }
  | { type: 'SET_SETTINGS'; payload: Partial<AppSettings> }
  | { type: 'SET_PROFILE'; payload: Partial<UserProfile> }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_FILTERS'; payload: Partial<AppFilters> }
  | { type: 'CLEAR_FILTERS' }
  | { type: 'LOAD_STATE'; payload: Partial<AppState> }
  | { type: 'CLEAR_ALL' };