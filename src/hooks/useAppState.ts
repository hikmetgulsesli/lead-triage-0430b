import { useReducer, useEffect, useCallback } from 'react';
import type { AppState, AppAction, Lead, AppSettings, UserProfile, AppFilters } from '../types/domain';
import { loadState, saveState, clearStorage, SEED_LEADS } from '../utils/storage';

const defaultSettings: AppSettings = {
  currency: 'TRY',
  density: 'default',
  notifications: {
    newLead: true,
    followUp: false,
  },
};

const defaultProfile: UserProfile = {
  name: 'Freelancer',
  email: 'admin@leadtriage.com',
  timezone: 'Europe/Istanbul',
};

const defaultFilters: AppFilters = {
  source: '',
  status: '',
  sort: '',
};

function getInitialState(): AppState {
  const saved = loadState();
  if (saved) {
    return {
      leads: saved.leads ?? [],
      settings: { ...defaultSettings, ...saved.settings },
      profile: { ...defaultProfile, ...saved.profile },
      error: saved.error ?? null,
      searchQuery: saved.searchQuery ?? '',
      filters: { ...defaultFilters, ...saved.filters },
    };
  }
  return {
    leads: [],
    settings: defaultSettings,
    profile: defaultProfile,
    error: null,
    searchQuery: '',
    filters: defaultFilters,
  };
}

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_LEADS':
      return { ...state, leads: action.payload };
    case 'ADD_LEAD':
      return { ...state, leads: [action.payload, ...state.leads] };
    case 'UPDATE_LEAD': {
      const idx = state.leads.findIndex((l) => l.id === action.payload.id);
      if (idx === -1) return state;
      const next = [...state.leads];
      next[idx] = action.payload;
      return { ...state, leads: next };
    }
    case 'DELETE_LEAD':
      return { ...state, leads: state.leads.filter((l) => l.id !== action.payload) };
    case 'SET_STATUS': {
      const idx = state.leads.findIndex((l) => l.id === action.payload.id);
      if (idx === -1) return state;
      const next = [...state.leads];
      next[idx] = { ...next[idx], status: action.payload.status };
      return { ...state, leads: next };
    }
    case 'SET_CONTACTED': {
      const idx = state.leads.findIndex((l) => l.id === action.payload);
      if (idx === -1) return state;
      const next = [...state.leads];
      next[idx] = { ...next[idx], contacted: true, status: 'gorusuldu' };
      return { ...state, leads: next };
    }
    case 'SET_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.payload } };
    case 'SET_PROFILE':
      return { ...state, profile: { ...state.profile, ...action.payload } };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'CLEAR_FILTERS':
      return { ...state, filters: defaultFilters, searchQuery: '' };
    case 'LOAD_STATE':
      return { ...state, ...action.payload };
    case 'CLEAR_ALL':
      return {
        leads: [],
        settings: defaultSettings,
        profile: defaultProfile,
        error: null,
        searchQuery: '',
        filters: defaultFilters,
      };
    default:
      return state;
  }
}

export function useAppState() {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);

  useEffect(() => {
    const ok = saveState(state);
    if (!ok) {
      dispatch({ type: 'SET_ERROR', payload: 'Veri kaydedilirken bir hata oluştu. Yerel depolama dolmuş olabilir.' });
    }
  }, [state]);

  const addLead = useCallback((lead: Omit<Lead, 'id'>) => {
    const newLead: Lead = { ...lead, id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}` };
    dispatch({ type: 'ADD_LEAD', payload: newLead });
    return newLead.id;
  }, []);

  const updateLead = useCallback((lead: Lead) => {
    dispatch({ type: 'UPDATE_LEAD', payload: lead });
  }, []);

  const deleteLead = useCallback((id: string) => {
    dispatch({ type: 'DELETE_LEAD', payload: id });
  }, []);

  const setStatus = useCallback((id: string, status: Lead['status']) => {
    dispatch({ type: 'SET_STATUS', payload: { id, status } });
  }, []);

  const setContacted = useCallback((id: string) => {
    dispatch({ type: 'SET_CONTACTED', payload: id });
  }, []);

  const setSearch = useCallback((query: string) => {
    dispatch({ type: 'SET_SEARCH', payload: query });
  }, []);

  const setFilters = useCallback((filters: Partial<AppFilters>) => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  }, []);

  const clearFilters = useCallback(() => {
    dispatch({ type: 'CLEAR_FILTERS' });
  }, []);

  const clearAll = useCallback(() => {
    clearStorage();
    dispatch({ type: 'CLEAR_ALL' });
  }, []);

  const setError = useCallback((msg: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: msg });
  }, []);

  const setSettings = useCallback((settings: Partial<AppSettings>) => {
    dispatch({ type: 'SET_SETTINGS', payload: settings });
  }, []);

  const setProfile = useCallback((profile: Partial<UserProfile>) => {
    dispatch({ type: 'SET_PROFILE', payload: profile });
  }, []);

  const loadSeedData = useCallback(() => {
    dispatch({ type: 'SET_LEADS', payload: SEED_LEADS });
  }, []);

  const retrySave = useCallback(() => {
    dispatch({ type: 'SET_ERROR', payload: null });
    const ok = saveState(state);
    if (!ok) {
      dispatch({ type: 'SET_ERROR', payload: 'Veri kaydedilirken bir hata oluştu. Yerel depolama dolmuş olabilir.' });
    }
  }, [state]);

  return {
    state,
    dispatch,
    addLead,
    updateLead,
    deleteLead,
    setStatus,
    setContacted,
    setSearch,
    setFilters,
    clearFilters,
    clearAll,
    setError,
    setSettings,
    setProfile,
    loadSeedData,
    retrySave,
  };
}