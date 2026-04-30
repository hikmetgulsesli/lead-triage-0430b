// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Adaylar (Leads)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import type { Lead, LeadStatus, AppFilters, AppView } from "../types/domain";
import { formatCurrency, formatDate } from "../utils/storage";

interface AdaylarLeadsProps {
  leads: Lead[];
  searchQuery: string;
  filters: AppFilters;
  onSearch: (query: string) => void;
  onFilter: (filterType: "source" | "status" | "sort", value: string) => void;
  onClearFilters: () => void;
  onStatusChange: (id: string, status: LeadStatus) => void;
  onToggleContacted: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (lead: Lead) => void;
  onAddLead: () => void;
  onNavigate: (view: AppView) => void;
  onOpenProfile: () => void;
  sourceLabel: Record<string, string>;
  statusLabel: Record<string, string>;
  currency: string;
}

export function AdaylarLeads(props: AdaylarLeadsProps) {
  const {
    leads,
    searchQuery,
    filters,
    onSearch,
    onFilter,
    onClearFilters,
    onStatusChange,
    onToggleContacted,
    onDelete,
    onEdit,
    onAddLead,
    onNavigate,
    onOpenProfile,
    sourceLabel,
    statusLabel,
    currency,
  } = props;

  const statusBadgeClass: Record<string, string> = {
    yeni: "bg-primary-container/20 text-primary-fixed",
    beklemede: "bg-[#334155] text-on-surface-variant",
    iletisim: "bg-secondary-container/50 text-secondary-fixed",
    gorusuldu: "bg-secondary-container/50 text-secondary-fixed",
    tamamlandi: "bg-emerald-500/20 text-emerald-400",
    kazanildi: "bg-emerald-500/20 text-emerald-400",
    kaybedildi: "bg-rose-500/20 text-rose-400",
  };

  return (
    <div className="flex-1 w-full">
      {/* Page Header & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-xl">
        <div>
          <h1 className="font-h1 text-h1 text-on-surface">Adaylar</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Aktif satış fırsatlarınızı yönetin ve önceliklendirin.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Mobile Search */}
          <div className="relative flex items-center flex-1 md:hidden">
            <span className="material-symbols-outlined absolute left-3 text-outline" data-icon="search">search</span>
            <input
              className="w-full bg-[#0F172A] border border-[#334155] rounded-DEFAULT text-on-surface pl-10 pr-4 py-2 h-11 focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition-all placeholder:text-[#475569] font-body-sm text-body-sm"
              placeholder="Arama yapın..."
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <button
            onClick={onAddLead}
            className="hidden md:flex bg-[#2563EB] text-white font-label-md text-label-md rounded-DEFAULT px-4 py-2 items-center justify-center gap-2 min-h-[44px] hover:bg-inverse-primary transition-colors"
          >
            <span className="material-symbols-outlined" data-icon="add">add</span>
            Yeni Aday Ekle
          </button>
        </div>
      </div>
      {/* Filters Section */}
      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-4 mb-gutter flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider w-full md:w-auto">
          <span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
          Filtreler
        </div>
        <select
          className="bg-[#0F172A] border border-[#334155] rounded-DEFAULT text-on-surface py-2 pl-3 pr-8 min-h-[44px] font-body-sm text-body-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none"
          value={filters.source}
          onChange={(e) => onFilter("source", e.target.value)}
        >
          <option value="">Kaynak: Tümü</option>
          <option value="web">Web Sitesi</option>
          <option value="referans">Referans</option>
          <option value="outbound">Dış Arama</option>
          <option value="linkedin">LinkedIn</option>
          <option value="email">Email</option>
          <option value="diger">Diğer</option>
        </select>
        <select
          className="bg-[#0F172A] border border-[#334155] rounded-DEFAULT text-on-surface py-2 pl-3 pr-8 min-h-[44px] font-body-sm text-body-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none"
          value={filters.status}
          onChange={(e) => onFilter("status", e.target.value)}
        >
          <option value="">Durum: Tümü</option>
          <option value="yeni">Yeni</option>
          <option value="beklemede">Beklemede</option>
          <option value="iletisim">İletişimde</option>
          <option value="gorusuldu">Görüşüldü</option>
          <option value="tamamlandi">Tamamlandı</option>
          <option value="kazanildi">Kazanıldı</option>
          <option value="kaybedildi">Kaybedildi</option>
        </select>
        <select
          className="bg-[#0F172A] border border-[#334155] rounded-DEFAULT text-on-surface py-2 pl-3 pr-8 min-h-[44px] font-body-sm text-body-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none"
          value={filters.sort}
          onChange={(e) => onFilter("sort", e.target.value)}
        >
          <option value="">Değer: Sırala</option>
          <option value="high">Yüksekten Düşüğe</option>
          <option value="low">Düşükten Yükseğe</option>
        </select>
        <button
          onClick={onClearFilters}
          className="ml-auto text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-colors min-h-[44px] px-2"
        >
          Temizle
        </button>
      </div>
      {/* Data Table */}
      <div className="bg-surface-container-low border border-[#334155] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-[#334155] bg-surface-container-high">
                <th className="px-4 py-3 font-label-sm text-label-sm text-[#475569] uppercase tracking-wider font-semibold">Aday / Şirket</th>
                <th className="px-4 py-3 font-label-sm text-label-sm text-[#475569] uppercase tracking-wider font-semibold">Kaynak</th>
                <th className="px-4 py-3 font-label-sm text-label-sm text-[#475569] uppercase tracking-wider font-semibold">Tahmini Değer</th>
                <th className="px-4 py-3 font-label-sm text-label-sm text-[#475569] uppercase tracking-wider font-semibold">Durum</th>
                <th className="px-4 py-3 font-label-sm text-label-sm text-[#475569] uppercase tracking-wider font-semibold">Sonraki Aksiyon</th>
                <th className="px-4 py-3 font-label-sm text-label-sm text-[#475569] uppercase tracking-wider font-semibold">Tarih</th>
                <th className="px-4 py-3 font-label-sm text-label-sm text-[#475569] uppercase tracking-wider font-semibold text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#334155]">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-[#334155] transition-colors group">
                  <td className="px-4 py-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-md text-label-md font-bold">
                        {lead.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-body-base text-body-base text-on-surface font-medium">{lead.name}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">{lead.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-sm font-body-sm text-body-sm text-on-surface-variant">{sourceLabel[lead.source] ?? lead.source}</td>
                  <td className="px-4 py-sm font-body-base text-body-base text-on-surface">{formatCurrency(lead.estimatedValue, currency)}</td>
                  <td className="px-4 py-sm">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-xs font-label-sm text-label-sm ${statusBadgeClass[lead.status] ?? "bg-surface-variant text-on-surface-variant"}`}>
                      {statusLabel[lead.status] ?? lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-sm font-body-sm text-body-sm text-on-surface-variant">{lead.nextAction}</td>
                  <td className="px-4 py-sm font-body-sm text-body-sm text-on-surface-variant">{formatDate(lead.date)}</td>
                  <td className="px-4 py-sm text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => onToggleContacted(lead.id)}
                        className="w-8 h-8 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant flex items-center justify-center transition-colors"
                        title="Görüşüldü İşaretle"
                      >
                        <span className="material-symbols-outlined text-[20px]" data-icon="check_circle">check_circle</span>
                      </button>
                      <button
                        onClick={() => onEdit(lead)}
                        className="w-8 h-8 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant flex items-center justify-center transition-colors"
                        title="Düzenle"
                      >
                        <span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span>
                      </button>
                      <button
                        onClick={() => onDelete(lead.id)}
                        className="w-8 h-8 rounded text-error hover:bg-error-container/20 flex items-center justify-center transition-colors"
                        title="Sil"
                      >
                        <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center font-body-sm text-on-surface-variant">
                    Arama kriterlerine uygun aday bulunamadı.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination / Footer */}
        <div className="px-4 py-3 border-t border-[#334155] bg-[#1E293B] flex items-center justify-between">
          <div className="font-body-sm text-body-sm text-on-surface-variant">
            Toplam {leads.length} aday gösteriliyor
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors disabled:opacity-50" disabled={true}>
              <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
            </button>
            <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors disabled:opacity-50" disabled={true}>
              <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
