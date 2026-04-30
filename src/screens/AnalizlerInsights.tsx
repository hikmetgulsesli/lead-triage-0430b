// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Analizler (Insights)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnalizlerInsightsProps {}

export function AnalizlerInsights(props: AnalizlerInsightsProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-slate-800 dark:bg-[#1E293B] text-blue-600 dark:text-[#2563EB] font-['Inter'] antialiased text-sm tracking-tight docked full-width top-0 border-b border-b border-slate-700 dark:border-[#334155] flat no shadows flex justify-between items-center h-16 px-6 w-full max-w-full hidden md:flex sticky top-0 z-50">
      <div className="flex items-center gap-6">
      <span className="text-lg font-bold text-slate-50 dark:text-[#F8FAFC]">LeadTriage</span>
      <div className="relative flex items-center">
      <span className="material-symbols-outlined absolute left-3 text-slate-400">search</span>
      <input className="bg-[#0F172A] border border-[#334155] rounded-DEFAULT pl-10 pr-4 py-2 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all h-10 w-64 text-sm outline-none" placeholder="Arama yapın..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-8 h-full">
      <div className="flex h-full">
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors flex items-center px-4 h-full" href="#">Adaylar</a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors flex items-center px-4 h-full" href="#">Pipeline</a>
      <a className="text-blue-500 dark:text-[#2563EB] border-b-2 border-blue-600 pb-1 font-semibold flex items-center px-4 h-full relative top-[1px]" href="#">Analizler</a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors flex items-center px-4 h-full" href="#">Ayarlar</a>
      </div>
      <div className="flex items-center gap-4">
      <button aria-label="notifications" className="text-slate-400 hover:text-slate-200 transition-colors w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-slate-700/50">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button aria-label="account_circle" className="text-slate-400 hover:text-slate-200 transition-colors w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-slate-700/50">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </div>
      </nav>
      {/* SideNavBar (Mobile / alternative layout) */}
      <nav className="bg-slate-900 dark:bg-[#1E293B] text-blue-600 dark:text-[#2563EB] font-['Inter'] text-sm leading-relaxed docked left-0 h-screen w-64 border-r border-r border-slate-700 dark:border-[#334155] shadow-xl dark:shadow-none fixed left-0 top-0 h-full flex flex-col p-4 z-40 md:hidden">
      <div className="mb-8 px-4 mt-4">
      <span className="text-xl font-black text-slate-50">LeadTriage</span>
      </div>
      <div className="flex flex-col gap-2 flex-grow">
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md transition-colors min-h-[44px]" href="#">
      <span className="material-symbols-outlined" data-icon="person">person</span>
      <span>Profilim</span>
      </a>
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md transition-colors min-h-[44px]" href="#">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      <span>Bildirim Ayarları</span>
      </a>
      <a className="bg-blue-600/10 dark:bg-[#2563EB]/10 text-blue-500 dark:text-[#2563EB] rounded-md px-4 py-2 flex items-center gap-3 min-h-[44px]" href="#">
      <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
      <span>Analizler</span>
      </a>
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md transition-colors min-h-[44px]" href="#">
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
      <span>Destek</span>
      </a>
      </div>
      <div className="mt-auto border-t border-[#334155] pt-4 px-2">
      <div className="flex items-center gap-3 mb-4">
      <img alt="Kullanıcı Profili" className="w-10 h-10 rounded-full border border-[#334155]" data-alt="A small circular avatar showing a professional looking man in a dark environment, minimal corporate aesthetic suitable for a dashboard context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrmfgVlAQLHstWbgbZVRgO7ik8y8JA29IwerscnH0DNv8VhC9c3g2WmK3pUIFsaVrrKmNowL0bEXhRT1wy7d2ERuD-rdhaEprjvlRQUmSnQ6S6T-rJ5OckI624qRo8_yeobZM8I8XMcSdPbopGDsrgQUPY7RLCwRk0nVmPG8G8l3WhvsChcGk4ab1XBArEO1Nj_kMuFo7lSueoF704hCU8_UOdmZP68b4ss5N0P7J5HmZee_okzDax-52kXMIYUV1SNXakpsItP8E" />
      <div>
      <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">Freelancer Paneli</div>
      <div className="font-body-sm text-outline">Hoş geldiniz</div>
      </div>
      </div>
      <button className="w-full bg-primary-container text-white py-2 rounded-DEFAULT font-label-md hover:bg-blue-700 transition-colors flex justify-center items-center gap-2 min-h-[44px]">
      <span className="material-symbols-outlined text-[18px]">add</span>
                      Yeni Aday Ekle
                  </button>
      </div>
      </nav>
      {/* Main Content */}
      <main className="md:ml-0 md:pt-6 pt-20 p-lg max-w-7xl mx-auto flex flex-col gap-lg">
      {/* Header */}
      <header className="flex justify-between items-end pb-sm">
      <div>
      <h1 className="font-h1 text-on-surface">Analizler</h1>
      <p className="font-body-base text-on-surface-variant mt-1">Son 30 günlük pipeline performansı.</p>
      </div>
      <div className="flex gap-2">
      <button className="bg-[#1E293B] border border-[#334155] text-on-surface px-4 py-2 rounded-DEFAULT font-label-md flex items-center gap-2 hover:bg-[#334155] transition-colors min-h-[44px]">
      <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                          Son 30 Gün
                          <span className="material-symbols-outlined text-[18px]">arrow_drop_down</span>
      </button>
      <button className="bg-[#1E293B] border border-[#334155] text-on-surface px-4 py-2 rounded-DEFAULT font-label-md flex items-center gap-2 hover:bg-[#334155] transition-colors min-h-[44px]">
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
      <span className="material-symbols-outlined text-6xl" style={{fontVariationSettings: "'FILL' 1"}}>groups</span>
      </div>
      <div className="flex justify-between items-start mb-4 z-10">
      <h3 className="font-label-sm text-on-surface-variant uppercase tracking-wider">Toplam Aday</h3>
      <span className="bg-emerald-500/20 text-emerald-400 font-label-md px-2 py-1 rounded flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">trending_up</span>
                              +12%
                          </span>
      </div>
      <div className="z-10">
      <div className="font-h1 text-4xl font-bold text-on-surface mb-1">1,248</div>
      <p className="font-body-sm text-outline">Geçen aya göre +134 yeni aday</p>
      </div>
      </div>
      {/* Kazanılan/Kaybedilen */}
      <div className="bg-surface-container-high border border-outline-variant rounded-xl p-md flex flex-col justify-between relative overflow-hidden group hover:border-outline transition-colors">
      <div className="absolute top-0 right-0 p-4 opacity-10">
      <span className="material-symbols-outlined text-6xl" style={{fontVariationSettings: "'FILL' 1"}}>pie_chart</span>
      </div>
      <div className="flex justify-between items-start mb-4 z-10">
      <h3 className="font-label-sm text-on-surface-variant uppercase tracking-wider">Kazanılan/Kaybedilen</h3>
      <span className="bg-rose-500/20 text-rose-400 font-label-md px-2 py-1 rounded flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">trending_down</span>
                              -3%
                          </span>
      </div>
      <div className="z-10">
      <div className="font-h1 text-4xl font-bold text-on-surface mb-1">68%</div>
      <div className="flex items-center gap-2 mt-2 w-full h-2 bg-[#0F172A] rounded-full overflow-hidden">
      <div className="bg-emerald-500 h-full" style={{width: "68%"}}></div>
      <div className="bg-rose-500 h-full" style={{width: "32%"}}></div>
      </div>
      <div className="flex justify-between mt-2 font-body-sm text-outline text-xs">
      <span>848 Kazanılan</span>
      <span>400 Kaybedilen</span>
      </div>
      </div>
      </div>
      {/* Tahmini Gelir */}
      <div className="bg-surface-container-high border border-outline-variant rounded-xl p-md flex flex-col justify-between relative overflow-hidden group hover:border-outline transition-colors">
      <div className="absolute top-0 right-0 p-4 opacity-10">
      <span className="material-symbols-outlined text-6xl" style={{fontVariationSettings: "'FILL' 1"}}>payments</span>
      </div>
      <div className="flex justify-between items-start mb-4 z-10">
      <h3 className="font-label-sm text-on-surface-variant uppercase tracking-wider">Tahmini Gelir</h3>
      <span className="bg-emerald-500/20 text-emerald-400 font-label-md px-2 py-1 rounded flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">trending_up</span>
                              +24%
                          </span>
      </div>
      <div className="z-10">
      <div className="font-h1 text-4xl font-bold text-on-surface mb-1">₺845K</div>
      <p className="font-body-sm text-outline">Geçen aya göre +₺164K artış</p>
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
      <div className="flex-1 flex flex-col items-center gap-2 z-10 group pl-8">
      <div className="w-full flex items-end justify-center gap-1 h-48">
      <div className="w-1/3 bg-primary-container rounded-t-sm h-[40%] group-hover:opacity-80 transition-opacity"></div>
      <div className="w-1/3 bg-secondary-container rounded-t-sm h-[20%] group-hover:opacity-80 transition-opacity"></div>
      </div>
      <span className="font-label-sm text-outline">Pzt</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 z-10 group">
      <div className="w-full flex items-end justify-center gap-1 h-48">
      <div className="w-1/3 bg-primary-container rounded-t-sm h-[60%] group-hover:opacity-80 transition-opacity"></div>
      <div className="w-1/3 bg-secondary-container rounded-t-sm h-[35%] group-hover:opacity-80 transition-opacity"></div>
      </div>
      <span className="font-label-sm text-outline">Sal</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 z-10 group">
      <div className="w-full flex items-end justify-center gap-1 h-48">
      <div className="w-1/3 bg-primary-container rounded-t-sm h-[45%] group-hover:opacity-80 transition-opacity"></div>
      <div className="w-1/3 bg-secondary-container rounded-t-sm h-[40%] group-hover:opacity-80 transition-opacity"></div>
      </div>
      <span className="font-label-sm text-outline">Çar</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 z-10 group">
      <div className="w-full flex items-end justify-center gap-1 h-48">
      <div className="w-1/3 bg-primary-container rounded-t-sm h-[80%] group-hover:opacity-80 transition-opacity"></div>
      <div className="w-1/3 bg-secondary-container rounded-t-sm h-[60%] group-hover:opacity-80 transition-opacity"></div>
      </div>
      <span className="font-label-sm text-outline">Per</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 z-10 group">
      <div className="w-full flex items-end justify-center gap-1 h-48">
      <div className="w-1/3 bg-primary-container rounded-t-sm h-[50%] group-hover:opacity-80 transition-opacity"></div>
      <div className="w-1/3 bg-secondary-container rounded-t-sm h-[70%] group-hover:opacity-80 transition-opacity"></div>
      </div>
      <span className="font-label-sm text-outline">Cum</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 z-10 group">
      <div className="w-full flex items-end justify-center gap-1 h-48">
      <div className="w-1/3 bg-primary-container opacity-50 rounded-t-sm h-[20%] group-hover:opacity-80 transition-opacity"></div>
      <div className="w-1/3 bg-secondary-container opacity-50 rounded-t-sm h-[10%] group-hover:opacity-80 transition-opacity"></div>
      </div>
      <span className="font-label-sm text-outline">Cmt</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 z-10 group">
      <div className="w-full flex items-end justify-center gap-1 h-48">
      <div className="w-1/3 bg-primary-container opacity-50 rounded-t-sm h-[15%] group-hover:opacity-80 transition-opacity"></div>
      <div className="w-1/3 bg-secondary-container opacity-50 rounded-t-sm h-[5%] group-hover:opacity-80 transition-opacity"></div>
      </div>
      <span className="font-label-sm text-outline">Paz</span>
      </div>
      </div>
      </div>
      {/* Conversion Funnel */}
      <div className="bg-surface-container-high border border-outline-variant rounded-xl p-md flex flex-col">
      <h2 className="font-h2 text-on-surface mb-6">Dönüşüm Hunisi</h2>
      <div className="flex-grow flex flex-col gap-0 justify-center">
      {/* Funnel Step 1 */}
      <div className="flex items-center gap-4 relative">
      <div className="w-16 text-right font-h3 text-on-surface z-10">100%</div>
      <div className="flex-grow bg-[#1E293B] h-12 rounded-r-DEFAULT border border-[#334155] border-l-primary-container border-l-4 flex items-center px-4 justify-between relative z-10">
      <span className="font-body-base text-on-surface">İletişime Geçildi</span>
      <span className="font-label-sm text-outline">1,248</span>
      </div>
      </div>
      {/* Connector line */}
      <div className="h-6 ml-24 border-l border-dashed border-outline-variant"></div>
      {/* Funnel Step 2 */}
      <div className="flex items-center gap-4 relative">
      <div className="w-16 text-right font-h3 text-on-surface z-10">75%</div>
      <div className="flex-grow bg-[#1E293B] h-12 rounded-r-DEFAULT border border-[#334155] border-l-[#b4c5ff] border-l-4 flex items-center px-4 justify-between relative z-10 ml-4">
      <span className="font-body-base text-on-surface">Teklif İletildi</span>
      <span className="font-label-sm text-outline">936</span>
      </div>
      </div>
      {/* Connector line */}
      <div className="h-6 ml-28 border-l border-dashed border-outline-variant"></div>
      {/* Funnel Step 3 */}
      <div className="flex items-center gap-4 relative">
      <div className="w-16 text-right font-h3 text-on-surface z-10">45%</div>
      <div className="flex-grow bg-[#1E293B] h-12 rounded-r-DEFAULT border border-[#334155] border-l-[#d5e3fc] border-l-4 flex items-center px-4 justify-between relative z-10 ml-8">
      <span className="font-body-base text-on-surface">Pazarlık</span>
      <span className="font-label-sm text-outline">561</span>
      </div>
      </div>
      {/* Connector line */}
      <div className="h-6 ml-32 border-l border-dashed border-outline-variant"></div>
      {/* Funnel Step 4 */}
      <div className="flex items-center gap-4 relative">
      <div className="w-16 text-right font-h3 text-emerald-400 z-10">28%</div>
      <div className="flex-grow bg-[#1E293B] h-12 rounded-r-DEFAULT border border-emerald-500/30 bg-emerald-500/10 border-l-emerald-500 border-l-4 flex items-center px-4 justify-between relative z-10 ml-12">
      <span className="font-body-base text-emerald-400 font-medium">Kazanıldı</span>
      <span className="font-label-sm text-emerald-500">349</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
