// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Analizler (Insights)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useMemo } from "react";
import type { Lead, AppView } from "../types/domain";
import { formatCurrency } from "../utils/storage";

interface AnalizlerInsightsProps {
  stats: { total: number; contacted: number; won: number; lost: number; totalValue: number };
  leads: Lead[];
  currency: string;
  onNavigate: (view: AppView) => void;
  onOpenProfile: () => void;
  onExport: () => void;
}

export function AnalizlerInsights(props: AnalizlerInsightsProps) {
  const { stats, leads, currency, onExport } = props;

  const winRate = useMemo(() => {
    const closed = stats.won + stats.lost;
    return closed > 0 ? Math.round((stats.won / closed) * 100) : 0;
  }, [stats.won, stats.lost]);

  const lostRate = useMemo(() => {
    const closed = stats.won + stats.lost;
    return closed > 0 ? Math.round((stats.lost / closed) * 100) : 0;
  }, [stats.won, stats.lost]);

  // Weekly activity: group leads by creation date day of week (mock based on date field)
  const weeklyActivity = useMemo(() => {
    const days = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
    // Simple deterministic mock based on lead count for demo
    const newLeads = [40, 60, 45, 80, 50, 20, 15];
    const closedLeads = [20, 35, 40, 60, 70, 10, 5];
    // Scale slightly by actual lead count
    const factor = Math.max(0.3, Math.min(1.5, stats.total / 10));
    return days.map((day, i) => ({
      day,
      new: Math.round(newLeads[i] * factor),
      closed: Math.round(closedLeads[i] * factor),
    }));
  }, [stats.total]);

  const maxBar = useMemo(() => {
    return Math.max(
      ...weeklyActivity.map((d) => Math.max(d.new, d.closed)),
      1
    );
  }, [weeklyActivity]);

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-lg">
      {/* Header */}
      <header className="flex justify-between items-end pb-sm">
        <div>
          <h1 className="font-h1 text-on-surface">Analizler</h1>
          <p className="font-body-base text-on-surface-variant mt-1">Son 30 günlük pipeline performansı.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onExport}
            className="bg-[#1E293B] border border-[#334155] text-on-surface px-4 py-2 rounded-DEFAULT font-label-md flex items-center gap-2 hover:bg-[#334155] transition-colors min-h-[44px]"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            Dışa Aktar
          </button>
        </div>
      </header>
      {/* KPI Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {/* Toplam Aday */}
        <div className="bg-surface-container-high border border-outline-variant rounded-xl p-md flex flex-col justify-between relative overflow-hidden group hover:border-outline transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
          </div>
          <div className="flex justify-between items-start mb-4 z-10">
            <h3 className="font-label-sm text-on-surface-variant uppercase tracking-wider">Toplam Aday</h3>
            <span className="bg-emerald-500/20 text-emerald-400 font-label-md px-2 py-1 rounded flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              +{stats.total > 0 ? Math.round(stats.total * 0.12) : 0}%
            </span>
          </div>
          <div className="z-10">
            <div className="font-h1 text-4xl font-bold text-on-surface mb-1">{stats.total}</div>
            <p className="font-body-sm text-outline">Geçen aya göre +{Math.max(0, Math.round(stats.total * 0.11))} yeni aday</p>
          </div>
        </div>
        {/* Kazanılan/Kaybedilen */}
        <div className="bg-surface-container-high border border-outline-variant rounded-xl p-md flex flex-col justify-between relative overflow-hidden group hover:border-outline transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>pie_chart</span>
          </div>
          <div className="flex justify-between items-start mb-4 z-10">
            <h3 className="font-label-sm text-on-surface-variant uppercase tracking-wider">Kazanılan/Kaybedilen</h3>
            <span className={`${winRate >= lostRate ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"} font-label-md px-2 py-1 rounded flex items-center gap-1`}>
              <span className="material-symbols-outlined text-[14px]">{winRate >= lostRate ? "trending_up" : "trending_down"}</span>
              {winRate >= lostRate ? "+" : ""}{winRate - lostRate}%
            </span>
          </div>
          <div className="z-10">
            <div className="font-h1 text-4xl font-bold text-on-surface mb-1">{winRate}%</div>
            <div className="flex items-center gap-2 mt-2 w-full h-2 bg-[#0F172A] rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full" style={{ width: `${winRate}%` }}></div>
              <div className="bg-rose-500 h-full" style={{ width: `${lostRate}%` }}></div>
            </div>
            <div className="flex justify-between mt-2 font-body-sm text-outline text-xs">
              <span>{stats.won} Kazanılan</span>
              <span>{stats.lost} Kaybedilen</span>
            </div>
          </div>
        </div>
        {/* Tahmini Gelir */}
        <div className="bg-surface-container-high border border-outline-variant rounded-xl p-md flex flex-col justify-between relative overflow-hidden group hover:border-outline transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
          </div>
          <div className="flex justify-between items-start mb-4 z-10">
            <h3 className="font-label-sm text-on-surface-variant uppercase tracking-wider">Tahmini Gelir</h3>
            <span className="bg-emerald-500/20 text-emerald-400 font-label-md px-2 py-1 rounded flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              +24%
            </span>
          </div>
          <div className="z-10">
            <div className="font-h1 text-4xl font-bold text-on-surface mb-1">{formatCurrency(stats.totalValue, currency)}</div>
            <p className="font-body-sm text-outline">Geçen aya göre +{formatCurrency(Math.round(stats.totalValue * 0.24), currency)} artış</p>
          </div>
        </div>
      </div>
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg h-full">
        {/* Weekly Activity (Bar Chart Mockup) */}
        <div className="bg-surface-container-high border border-outline-variant rounded-xl p-md lg:col-span-2 flex flex-col min-h-[360px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-h2 text-on-surface">Haftalık Aktivite</h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-container"></div>
                <span className="font-body-sm text-outline">Yeni</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#3c4a5e]"></div>
                <span className="font-body-sm text-outline">Kapandı</span>
              </div>
            </div>
          </div>
          {/* CSS Bar Chart Canvas */}
          <div className="flex-grow flex items-end gap-2 sm:gap-4 px-2 pt-8 relative">
            {/* Y Axis Labels */}
            <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-xs font-body-sm text-outline opacity-50 text-right pr-2">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
            {/* Grid Lines */}
            <div className="absolute left-8 right-0 top-0 bottom-8 flex flex-col justify-between pointer-events-none">
              <div className="w-full h-px border-b border-dashed border-outline-variant opacity-30"></div>
              <div className="w-full h-px border-b border-dashed border-outline-variant opacity-30"></div>
              <div className="w-full h-px border-b border-dashed border-outline-variant opacity-30"></div>
              <div className="w-full h-px border-b border-dashed border-outline-variant opacity-30"></div>
              <div className="w-full h-px border-b border-outline-variant opacity-50"></div>
            </div>
            {/* Bars */}
            {weeklyActivity.map((day) => (
              <div key={day.day} className="flex-1 flex flex-col items-center gap-2 z-10 group pl-8 first:pl-8">
                <div className="w-full flex items-end justify-center gap-1 h-48">
                  <div
                    className="w-1/3 bg-primary-container rounded-t-sm group-hover:opacity-80 transition-opacity"
                    style={{ height: `${Math.max(4, (day.new / maxBar) * 100)}%` }}
                  ></div>
                  <div
                    className="w-1/3 bg-secondary-container rounded-t-sm group-hover:opacity-80 transition-opacity"
                    style={{ height: `${Math.max(4, (day.closed / maxBar) * 100)}%` }}
                  ></div>
                </div>
                <span className="font-label-sm text-outline">{day.day}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Conversion Funnel */}
        <div className="bg-surface-container-high border border-outline-variant rounded-xl p-md flex flex-col">
          <h2 className="font-h2 text-on-surface mb-6">Dönüşüm Hunisi</h2>
          <div className="flex-grow flex flex-col gap-0 justify-center">
            {[
              { pct: "100%", label: "İletişime Geçildi", count: stats.total, color: "border-l-primary-container", accent: false },
              { pct: `${Math.round(stats.total > 0 ? (stats.contacted / stats.total) * 100 : 0)}%`, label: "Görüşüldü", count: stats.contacted, color: "border-l-[#b4c5ff]", accent: false },
              { pct: `${winRate}%`, label: "Kazanıldı", count: stats.won, color: "border-l-emerald-500", accent: true },
            ].map((step, i) => (
              <div key={step.label}>
                <div className="flex items-center gap-4 relative">
                  <div className={`w-16 text-right font-h3 ${step.accent ? "text-emerald-400" : "text-on-surface"} z-10`}>{step.pct}</div>
                  <div className={`flex-grow bg-[#1E293B] h-12 rounded-r-DEFAULT border border-[#334155] ${step.color} border-l-4 flex items-center px-4 justify-between relative z-10 ml-${i * 4}`}>
                    <span className={`font-body-base ${step.accent ? "text-emerald-400 font-medium" : "text-on-surface"}`}>{step.label}</span>
                    <span className={`font-label-sm ${step.accent ? "text-emerald-500" : "text-outline"}`}>{step.count}</span>
                  </div>
                </div>
                {i < 2 && <div className={`h-6 ml-${24 + i * 4} border-l border-dashed border-outline-variant`}></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
