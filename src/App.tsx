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
  const showEmpty = state.leads.length === 0 && !state.error && currentView !== 'addLead' && currentView !== 'editLead';
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
            aria-label="notifications"
            className="w-[44px] h-[44px] flex items-center justify-center rounded-full text-[--color-on-surface-variant] hover:bg-[--color-surface-variant] transition-colors"
          >
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button
            aria-label="account_circle"
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
              {item.view === 'leads' ? 'person' : item.view === 'pipeline' ? 'view_kanban' : item.view === 'insights' ? 'analytics' : 'settings'}
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:justify-end">
          <div
            className="absolute inset-0 bg-[--color-surface-container-lowest]/80 backdrop-blur-sm"
            onClick={handleCloseProfile}
          />
          <div className="relative bg-[--color-surface-container-high] w-full max-w-sm rounded-xl border border-[--color-outline-variant] shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
            {/* Panel Header */}
            <div className="flex items-center justify-between p-lg border-b border-[--color-outline-variant] bg-[--color-surface-container]">
              <h2 className="font-h2 text-[--color-on-surface]">Kullanıcı Profili</h2>
              <button
                onClick={handleCloseProfile}
                aria-label="Kapat"
                className="w-[44px] h-[44px] flex items-center justify-center text-[--color-on-surface-variant] hover:bg-[--color-surface-variant] rounded-full transition-colors -mr-2"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            {/* Panel Content */}
            <div className="p-lg flex-1 overflow-y-auto">
              {/* User Info */}
              <div className="flex items-center gap-md mb-xl">
                <div className="w-16 h-16 rounded-full bg-[--color-surface-variant] flex items-center justify-center border border-[--color-outline-variant] shrink-0">
                  <span className="material-symbols-outlined text-3xl text-[--color-on-surface-variant]">person</span>
                </div>
                <div>
                  <div className="font-h3 text-[--color-on-surface]">{state.profile.name}</div>
                  <div className="font-body-sm text-[--color-on-surface-variant]">{state.profile.email}</div>
                </div>
              </div>
              {/* Settings Group */}
              <div className="space-y-md">
                {/* Timezone */}
                <div className="bg-[--color-surface-container] rounded-lg p-md border border-[--color-outline-variant]">
                  <label className="block font-label-sm text-[--color-on-surface-variant] mb-sm uppercase">Zaman Dilimi</label>
                  <div className="flex items-center gap-sm text-[--color-on-surface] font-body-base bg-[--color-surface-dim] p-sm rounded border border-[--color-outline-variant]">
                    <span className="material-symbols-outlined text-[--color-outline]">schedule</span>
                    <span className="flex-1">{state.profile.timezone}</span>
                    <button className="text-[--color-primary] hover:text-[--color-primary-fixed] text-sm">Değiştir</button>
                  </div>
                </div>
                {/* Notifications Toggle */}
                <div className="bg-[--color-surface-container] rounded-lg p-md border border-[--color-outline-variant] flex items-center justify-between">
                  <div>
                    <div className="font-h3 text-[--color-on-surface]">Bildirimler</div>
                    <div className="font-body-sm text-[--color-on-surface-variant] mt-xs">E-posta ve sistem uyarıları</div>
                  </div>
                  <button
                    onClick={() => handleSettingsChange({ notifications: { ...state.settings.notifications, newLead: !state.settings.notifications.newLead } })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:ring-offset-2 focus:ring-offset-[--color-surface] ${
                      state.settings.notifications.newLead ? 'bg-[--color-primary]' : 'bg-[--color-surface-variant] border border-[--color-outline]'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
                      state.settings.notifications.newLead ? 'translate-x-6 bg-[--color-on-primary]' : 'translate-x-1 bg-[--color-outline]'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
            {/* Panel Footer */}
            <div className="p-lg border-t border-[--color-outline-variant] bg-[--color-surface-container]">
              <button
                onClick={handleClearAll}
                className="w-full flex items-center justify-center gap-sm bg-transparent border border-[--color-outline-variant] text-[--color-error] font-label-md py-3 rounded-lg hover:bg-[--color-error-container] hover:text-[--color-on-error] hover:border-[--color-error-container] transition-colors"
              >
                <span className="material-symbols-outlined">logout</span>
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Lead Modal */}
      {showAddLead && (
        <div className="fixed inset-0 z-[70]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCloseAdd} />
          <AdayEkleduzenle
            onSave={(data) => handleAddLead(data as Omit<Lead, 'id'>)}
            onClose={handleCloseAdd}
          />
        </div>
      )}

      {/* Edit Lead Modal */}
      {editingLead && (
        <div className="fixed inset-0 z-[70]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCloseEdit} />
          <AdayEkleduzenle
            lead={editingLead}
            onSave={(data) => handleUpdateLead(data as Lead)}
            onClose={handleCloseEdit}
          />
        </div>
      )}

      {/* Main Content */}
      <main className="pt-16 pb-20 md:pb-0 px-4 md:px-6 min-h-screen">
        {showError && !state.error ? null : null}
        {showEmpty ? (
          <BosDurumEmptyState onAddLead={handleOpenAdd} />
        ) : activeView === 'leads' ? (
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
            sourceLabel={sourceLabel}
            statusLabel={statusLabel}
            currency={state.settings.currency}
          />
        ) : activeView === 'pipeline' ? (
          <PipelineBoard
            leads={state.leads}
            onStatusChange={handleStatusChange}
            currency={state.settings.currency}
          />
        ) : activeView === 'insights' ? (
          <AnalizlerInsights
            stats={stats}
            leads={state.leads}
            currency={state.settings.currency}
          />
        ) : activeView === 'settings' ? (
          <AyarlarSettings
            settings={state.settings}
            onSettingsChange={handleSettingsChange}
            onClearAll={handleClearAll}
            onLoadSeed={handleLoadSeed}
            onExport={handleExport}
            onSimulateError={handleSimulateError}
          />
        ) : null}
      </main>
    </div>
  );
}