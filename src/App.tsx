import { useState, useCallback, useMemo } from 'react';
import './index.css';
import { useAppState } from './hooks/useAppState';
import { formatCurrency, formatDate, downloadExport, setSimulateError } from './utils/storage';
import type { Lead, AppView } from './types/domain';
import { AdaylarLeads } from './screens/AdaylarLeads';
import { PipelineBoard } from './screens/PipelineBoard';
import { AnalizlerInsights } from './screens/AnalizlerInsights';
import { AyarlarSettings } from './screens/AyarlarSettings';
import { ProfilPaneli } from './screens/ProfilPaneli';
import { HataDurumuErrorState } from './screens/HataDurumuErrorState';
import { BosDurumEmptyState } from './screens/BosDurumEmptyState';
import { AdayEkleduzenle } from './screens/AdayEkleduzenle';

export default function App() {
  const {
    state,
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
  } = useAppState();

  const [currentView, setCurrentView] = useState<AppView>('leads');
  const [showProfile, setShowProfile] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [showAddLead, setShowAddLead] = useState(false);

  const handleNavigate = useCallback((view: AppView) => {
    setCurrentView(view);
    setShowProfile(false);
  }, []);

  const handleSaveError = useCallback(() => {
    retrySave();
  }, [retrySave]);

  const handleClearError = useCallback(() => {
    setError(null);
  }, [setError]);

  const handleAddLead = useCallback((data: Omit<Lead, 'id'>) => {
    addLead(data);
    setShowAddLead(false);
  }, [addLead]);

  const handleUpdateLead = useCallback((lead: Lead) => {
    updateLead(lead);
    setEditingLead(null);
  }, [updateLead]);

  const handleDeleteLead = useCallback((id: string) => {
    deleteLead(id);
  }, [deleteLead]);

  const handleToggleContacted = useCallback((id: string) => {
    setContacted(id);
  }, [setContacted]);

  const handleStatusChange = useCallback((id: string, status: Lead['status']) => {
    setStatus(id, status);
  }, [setStatus]);

  const handleOpenEdit = useCallback((lead: Lead) => {
    setEditingLead(lead);
  }, []);

  const handleOpenAdd = useCallback(() => {
    setShowAddLead(true);
  }, []);

  const handleCloseAdd = useCallback(() => {
    setShowAddLead(false);
  }, []);

  const handleCloseEdit = useCallback(() => {
    setEditingLead(null);
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearch(query);
  }, [setSearch]);

  const handleFilter = useCallback((filterType: 'source' | 'status' | 'sort', value: string) => {
    setFilters({ [filterType]: value });
  }, [setFilters]);

  const handleClearFilters = useCallback(() => {
    clearFilters();
  }, [clearFilters]);

  const handleLoadSeed = useCallback(() => {
    loadSeedData();
    setCurrentView('leads');
  }, [loadSeedData]);

  const handleClearAll = useCallback(() => {
    clearAll();
    setCurrentView('leads');
  }, [clearAll]);

  const handleExport = useCallback(() => {
    downloadExport(state);
  }, [state]);

  const handleSettingsChange = useCallback((settings: Parameters<typeof setSettings>[0]) => {
    setSettings(settings);
  }, [setSettings]);

  const handleProfileChange = useCallback((profile: Parameters<typeof setProfile>[0]) => {
    setProfile(profile);
  }, [setProfile]);

  const handleSimulateError = useCallback((enabled: boolean) => {
    setSimulateError(enabled);
    setError(enabled ? 'Veri kaydedilirken bir hata oluştu. Yerel depolama dolmuş olabilir.' : null);
  }, [setError]);

  // Navigation tabs config
  const navItems: { label: string; view: AppView }[] = [
    { label: 'Adaylar', view: 'leads' },
    { label: 'Pipeline', view: 'pipeline' },
    { label: 'Analizler', view: 'insights' },
    { label: 'Ayarlar', view: 'settings' },
  ];

  const viewIcons: Record<AppView, string> = {
    leads: 'person',
    pipeline: 'view_kanban',
    insights: 'analytics',
    settings: 'settings',
    profile: 'account_circle',
    addLead: 'add',
    editLead: 'edit',
    error: 'error',
    empty: 'inbox',
  };

  const handleNavClick = useCallback((view: AppView) => {
    handleNavigate(view);
  }, [handleNavigate]);

  const handleProfileNav = useCallback(() => {
    setShowProfile(true);
  }, []);

  const handleCloseProfile = useCallback(() => {
    setShowProfile(false);
  }, []);

  // Filter leads based on search and filters
  const filteredLeads = useMemo(() => {
    let leads = state.leads;
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      leads = leads.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.company.toLowerCase().includes(q) ||
          l.nextAction.toLowerCase().includes(q)
      );
    }
    if (state.filters.source) {
      leads = leads.filter((l) => l.source === state.filters.source);
    }
    if (state.filters.status) {
      leads = leads.filter((l) => l.status === state.filters.status);
    }
    if (state.filters.sort === 'high') {
      leads = [...leads].sort((a, b) => b.estimatedValue - a.estimatedValue);
    } else if (state.filters.sort === 'low') {
      leads = [...leads].sort((a, b) => a.estimatedValue - b.estimatedValue);
    }
    return leads;
  }, [state.leads, state.searchQuery, state.filters]);

  // Compute pipeline stats for insights
  const stats = useMemo(() => {
    const total = state.leads.length;
    const contacted = state.leads.filter((l) => l.contacted).length;
    const won = state.leads.filter((l) => l.status === 'kazanildi').length;
    const lost = state.leads.filter((l) => l.status === 'kaybedildi').length;
    const totalValue = state.leads.reduce((s, l) => s + l.estimatedValue, 0);
    return { total, contacted, won, lost, totalValue };
  }, [state.leads]);

  const sourceLabel: Record<string, string> = {
    web: 'Web Sitesi',
    referans: 'Referans',
    outbound: 'Dış Arama',
    linkedin: 'LinkedIn',
    email: 'Email',
    diger: 'Diğer',
  };

  const statusLabel: Record<string, string> = {
    yeni: 'Yeni',
    beklemede: 'Beklemede',
    iletisim: 'İletişimde',
    gorusuldu: 'Görüşüldü',
    tamamlandi: 'Tamamlandı',
    kazanildi: 'Kazanıldı',
    kaybedildi: 'Kaybedildi',
  };

  // Empty state: no leads and no error
  const showEmpty = state.leads.length === 0 && !state.error && currentView === 'leads';
  // Error state
  const showError = state.error !== null;

  // Active tab
  const activeView = editingLead ? 'editLead' : showAddLead ? 'addLead' : currentView;

  return (
    <div className="min-h-screen bg-[--color-background] text-[--color-on-background] font-[Inter]">
      {/* Error Banner */}
      {showError && (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-[--color-error-container] border-b border-[--color-error] px-4 py-3 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[--color-on-error-container]">warning</span>
            <span className="font-body-base text-[--color-on-error-container]">{state.error}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveError}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[--color-error] text-[--color-on-error] font-label-md hover:bg-[--color-on-error] hover:text-[--color-error] transition-colors min-h-[44px]"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              Tekrar Dene
            </button>
            <button
              onClick={handleClearError}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent border border-[--color-outline] text-[--color-on-error-container] font-label-md hover:bg-[--color-surface-variant] transition-colors min-h-[44px]"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>
      )}

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[--color-surface-container] border-b border-[--color-outline-variant] flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <span className="text-lg font-black text-[--color-on-surface]">LeadTriage</span>
          {/* Search bar */}
          <div className="relative hidden md:flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-[--color-outline] text-[20px]">search</span>
            <input
              className="bg-[--color-surface-dim] border border-[--color-outline-variant] text-[--color-on-surface] rounded-lg pl-10 pr-4 py-2 text-sm focus:border-[--color-primary-container] focus:ring-1 focus:ring-[--color-primary-container] outline-none w-64 h-10 placeholder:text-[--color-outline]"
              placeholder="Arama yapın..."
              type="text"
              value={state.searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        {/* Nav tabs */}
        <div className="hidden md:flex items-center gap-6 h-full">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`h-full flex items-center px-2 pb-1 border-b-2 transition-colors ${
                activeView === item.view
                  ? 'text-[--color-primary] border-[--color-primary] font-semibold'
                  : 'text-[--color-on-surface-variant] border-transparent hover:text-[--color-on-surface] hover:bg-[--color-surface-variant]/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Trailing actions */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Bildirimler"
            className="w-[44px] h-[44px] flex items-center justify-center rounded-full text-[--color-on-surface-variant] hover:bg-[--color-surface-variant] transition-colors"
          >
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button
            aria-label="Profil"
            onClick={handleProfileNav}
            className={`w-[44px] h-[44px] flex items-center justify-center rounded-full transition-colors ${
              showProfile
                ? 'bg-[--color-primary]/10 text-[--color-primary]'
                : 'text-[--color-on-surface-variant] hover:bg-[--color-surface-variant]'
            }`}
          >
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[--color-surface-container] border-t border-[--color-outline-variant] md:hidden flex items-center justify-around h-16 px-4">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => handleNavClick(item.view)}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
              activeView === item.view
                ? 'text-[--color-primary]'
                : 'text-[--color-on-surface-variant]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
{viewIcons[item.view]}
            </span>
            <span className="font-label-sm text-[10px]">{item.label}</span>
          </button>
        ))}
        <button
          onClick={handleProfileNav}
          className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-[--color-on-surface-variant]"
        >
          <span className="material-symbols-outlined text-[20px]">account_circle</span>
          <span className="font-label-sm text-[10px]">Profil</span>
        </button>
      </nav>

      {/* Profile Panel */}
      {showProfile && (
        <ProfilPaneli
          profile={state.profile}
          settings={state.settings}
          onProfileChange={handleProfileChange}
          onSettingsChange={handleSettingsChange}
          onClose={handleCloseProfile}
          onClearAll={handleClearAll}
          onNavigate={handleNavigate}
        />
      )}

      {/* Add Lead Modal */}
      {showAddLead && (
        <AdayEkleduzenle
          onSave={handleAddLead}
          onClose={handleCloseAdd}
        />
      )}

      {/* Edit Lead Modal */}
      {editingLead && (
        <AdayEkleduzenle
          lead={editingLead}
          onSave={(data) => handleUpdateLead(data as Lead)}
          onClose={handleCloseEdit}
        />
      )}

      {/* Main Content */}
      <main className="pt-16 pb-20 md:pb-0 px-4 md:px-6 min-h-screen flex flex-col">
        {showError && state.leads.length === 0 && currentView === 'leads' ? (
          <HataDurumuErrorState onRetry={handleSaveError} onClear={handleClearError} />
        ) : showEmpty ? (
          <BosDurumEmptyState onAddLead={handleOpenAdd} />
        ) : currentView === 'leads' ? (
          <AdaylarLeads
            leads={filteredLeads}
            searchQuery={state.searchQuery}
            filters={state.filters}
            onSearch={handleSearch}
            onFilter={handleFilter}
            onClearFilters={handleClearFilters}
            onStatusChange={handleStatusChange}
            onToggleContacted={handleToggleContacted}
            onDelete={handleDeleteLead}
            onEdit={handleOpenEdit}
            onAddLead={handleOpenAdd}
            onNavigate={handleNavigate}
            onOpenProfile={handleProfileNav}
            sourceLabel={sourceLabel}
            statusLabel={statusLabel}
            currency={state.settings.currency}
          />
        ) : currentView === 'pipeline' ? (
          <PipelineBoard
            leads={state.leads}
            onStatusChange={handleStatusChange}
            onNavigate={handleNavigate}
            onOpenProfile={handleProfileNav}
            onAddLead={handleOpenAdd}
            currency={state.settings.currency}
          />
        ) : currentView === 'insights' ? (
          <AnalizlerInsights
            stats={stats}
            leads={state.leads}
            onNavigate={handleNavigate}
            onOpenProfile={handleProfileNav}
            onExport={handleExport}
            currency={state.settings.currency}
          />
        ) : currentView === 'settings' ? (
          <AyarlarSettings
            settings={state.settings}
            onSettingsChange={handleSettingsChange}
            onClearAll={handleClearAll}
            onLoadSeed={handleLoadSeed}
            onExport={handleExport}
            onSimulateError={handleSimulateError}
            onNavigate={handleNavigate}
            onOpenProfile={handleProfileNav}
            onAddLead={handleOpenAdd}
          />
        ) : null}
      </main>
    </div>
  );
}