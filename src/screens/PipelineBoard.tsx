// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline (Board)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useMemo } from "react";
import type { Lead, LeadStatus, AppView } from "../types/domain";
import { formatCurrency, formatDate } from "../utils/storage";

interface PipelineBoardProps {
  leads: Lead[];
  onStatusChange: (id: string, status: LeadStatus) => void;
  onNavigate: (view: AppView) => void;
  onOpenProfile: () => void;
  onAddLead: () => void;
  currency: string;
}

const columns: { status: LeadStatus; label: string; dotColor: string }[] = [
  { status: "yeni", label: "Yeni", dotColor: "bg-blue-500" },
  { status: "beklemede", label: "Beklemede", dotColor: "bg-[#334155]" },
  { status: "iletisim", label: "İletişimde", dotColor: "bg-purple-500" },
  { status: "gorusuldu", label: "Görüşüldü", dotColor: "bg-yellow-500" },
  { status: "tamamlandi", label: "Tamamlandı", dotColor: "bg-emerald-500" },
  { status: "kazanildi", label: "Kazanıldı", dotColor: "bg-emerald-500" },
  { status: "kaybedildi", label: "Kaybedildi", dotColor: "bg-red-500" },
];

export function PipelineBoard(props: PipelineBoardProps) {
  const { leads, onStatusChange, currency } = props;

  const columnData = useMemo(() => {
    return columns.map((col) => {
      const colLeads = leads.filter((l) => l.status === col.status);
      const totalValue = colLeads.reduce((s, l) => s + l.estimatedValue, 0);
      return { ...col, leads: colLeads, totalValue, count: colLeads.length };
    });
  }, [leads]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Toolbar */}
      <header className="flex justify-between items-center mb-lg flex-shrink-0">
        <div>
          <h1 className="font-h1 text-h1 text-on-background">Q3 Satış Süreci</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Kanban görünümü ve fırsat yönetimi</p>
        </div>
        <div className="flex gap-sm">
          <button
            onClick={props.onAddLead}
            className="h-touch-target px-md flex items-center gap-xs rounded-lg bg-primary-container text-white hover:bg-inverse-primary transition-colors font-label-sm text-label-sm"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Yeni Fırsat
          </button>
        </div>
      </header>
      {/* Kanban Board Container */}
      <div className="flex-1 flex gap-md overflow-x-auto pb-sm custom-scrollbar snap-x">
        {columnData.map((col) => (
          <div key={col.status} className={`w-[300px] flex-shrink-0 flex flex-col bg-surface-container rounded-xl border border-outline-variant snap-start ${col.status === "kazanildi" ? "opacity-80" : col.status === "kaybedildi" ? "opacity-70" : ""}`}>
            {/* Column Header */}
            <div className="p-md border-b border-outline-variant flex flex-col gap-xs">
              <div className="flex justify-between items-center">
                <h2 className="font-h3 text-h3 text-on-background flex items-center gap-sm">
                  <span className={`w-2 h-2 rounded-full ${col.dotColor} block`}></span>
                  {col.label}
                </h2>
                <span className="bg-surface-variant px-sm py-xs rounded-DEFAULT font-label-sm text-label-sm text-on-surface-variant">{col.count}</span>
              </div>
              <div className="font-label-md text-label-md text-on-surface-variant">
                {formatCurrency(col.totalValue, currency)} Tahmini Değer
              </div>
            </div>
            {/* Card List */}
            <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
              {col.leads.map((lead) => (
                <div key={lead.id} className="bg-surface p-md rounded-lg border border-outline-variant hover:border-outline hover:bg-surface-bright cursor-grab transition-colors group">
                  <div className="flex justify-between items-start mb-sm">
                    <h3 className="font-h3 text-h3 text-on-surface">{lead.company}</h3>
                    <div className="relative">
                      <button
                        onClick={() => {
                          const nextStatus = columns[(columns.findIndex((c) => c.status === lead.status) + 1) % columns.length].status;
                          onStatusChange(lead.id, nextStatus);
                        }}
                        className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-on-surface transition-opacity"
                        title="Durum değiştir"
                      >
                        <span className="material-symbols-outlined text-[16px]">more_vert</span>
                      </button>
                    </div>
                  </div>
                  <div className="font-label-md text-label-md text-primary mb-md">{formatCurrency(lead.estimatedValue, currency)}</div>
                  <div className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant bg-surface-variant w-fit px-sm py-[2px] rounded-DEFAULT">
                    <span className="material-symbols-outlined text-[14px]">event</span>
                    {formatDate(lead.date)}
                  </div>
                </div>
              ))}
              {col.leads.length === 0 && (
                <div className="flex-1 flex flex-col gap-sm justify-center items-center text-center py-8">
                  <span className="material-symbols-outlined text-outline text-[32px] mb-xs">
                    {col.status === "kazanildi" ? "check_circle" : col.status === "kaybedildi" ? "cancel" : "inbox"}
                  </span>
                  <p className="font-body-sm text-body-sm text-outline">
                    {col.status === "kazanildi"
                      ? "Henüz kazanılan fırsat yok."
                      : col.status === "kaybedildi"
                      ? "Henüz kaybedilen fırsat yok."
                      : "Bu kolonda aday yok."}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
