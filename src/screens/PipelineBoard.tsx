// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline (Board)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface PipelineBoardProps {}

export function PipelineBoard(props: PipelineBoardProps) {
  return (
    <>
      {/* JSON Component: TopNavBar */}
      {/* Applying explicit style_ injections as per conflict resolution protocol */}
      <nav className="bg-slate-800 dark:bg-[#1E293B] font-['Inter'] antialiased text-sm tracking-tight w-full top-0 border-b border-b border-slate-700 dark:border-[#334155] shadow-none flex justify-between items-center h-16 px-6 max-w-full">
      {/* Logo Area */}
      <div className="flex items-center gap-md">
      <span className="text-lg font-bold text-slate-50 dark:text-[#F8FAFC]">LeadTriage</span>
      </div>
      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-lg h-full">
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors active:opacity-80 active:scale-95 transition-all flex items-center h-full px-sm" href="#">Adaylar</a>
      {/* Active State */}
      <a className="text-blue-500 dark:text-[#2563EB] border-b-2 border-blue-600 pb-1 font-semibold hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors active:opacity-80 active:scale-95 transition-all flex items-center h-full px-sm" href="#">Pipeline</a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors active:opacity-80 active:scale-95 transition-all flex items-center h-full px-sm" href="#">Analizler</a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors active:opacity-80 active:scale-95 transition-all flex items-center h-full px-sm" href="#">Ayarlar</a>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-sm">
      <button aria-label="notifications" className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors active:opacity-80 active:scale-95 transition-all p-sm rounded-DEFAULT h-touch-target w-touch-target flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button aria-label="account_circle" className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors active:opacity-80 active:scale-95 transition-all p-sm rounded-DEFAULT h-touch-target w-touch-target flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </nav>
      {/* Main Workspace */}
      <main className="flex-1 flex flex-col px-lg py-md overflow-hidden bg-background">
      {/* Toolbar */}
      <header className="flex justify-between items-center mb-lg flex-shrink-0">
      <div>
      <h1 className="font-h1 text-h1 text-on-background">Q3 Satış Süreci</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Kanban görünümü ve fırsat yönetimi</p>
      </div>
      <div className="flex gap-sm">
      <button className="h-touch-target px-md flex items-center gap-xs rounded-lg border border-outline-variant bg-transparent text-on-background hover:bg-surface-variant transition-colors font-label-sm text-label-sm">
      <span className="material-symbols-outlined text-[18px]">filter_list</span>
                          Filtrele
                      </button>
      <button className="h-touch-target px-md flex items-center gap-xs rounded-lg bg-primary-container text-white hover:bg-inverse-primary transition-colors font-label-sm text-label-sm">
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Yeni Fırsat
                      </button>
      </div>
      </header>
      {/* Kanban Board Container */}
      <div className="flex-1 flex gap-md overflow-x-auto pb-sm custom-scrollbar snap-x">
      {/* Column 1: Yeni */}
      <div className="w-[300px] flex-shrink-0 flex flex-col bg-surface-container rounded-xl border border-outline-variant snap-start">
      {/* Column Header */}
      <div className="p-md border-b border-outline-variant flex flex-col gap-xs">
      <div className="flex justify-between items-center">
      <h2 className="font-h3 text-h3 text-on-background flex items-center gap-sm">
      <span className="w-2 h-2 rounded-full bg-blue-500 block"></span>
                                  Yeni
                              </h2>
      <span className="bg-surface-variant px-sm py-xs rounded-DEFAULT font-label-sm text-label-sm text-on-surface-variant">3</span>
      </div>
      <div className="font-label-md text-label-md text-on-surface-variant">
                              ₺450.000 Tahmini Değer
                          </div>
      </div>
      {/* Card List */}
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Card */}
      <div className="bg-surface p-md rounded-lg border border-outline-variant hover:border-outline hover:bg-surface-bright cursor-grab transition-colors group">
      <div className="flex justify-between items-start mb-sm">
      <h3 className="font-h3 text-h3 text-on-surface">TechVision A.Ş.</h3>
      <button className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-on-surface transition-opacity">
      <span className="material-symbols-outlined text-[16px]">more_vert</span>
      </button>
      </div>
      <div className="font-label-md text-label-md text-primary mb-md">₺120.000</div>
      <div className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant bg-surface-variant w-fit px-sm py-[2px] rounded-DEFAULT">
      <span className="material-symbols-outlined text-[14px]">event</span>
                                  12 Eki
                              </div>
      </div>
      {/* Card */}
      <div className="bg-surface p-md rounded-lg border border-outline-variant hover:border-outline hover:bg-surface-bright cursor-grab transition-colors group">
      <div className="flex justify-between items-start mb-sm">
      <h3 className="font-h3 text-h3 text-on-surface">Global Lojistik</h3>
      <button className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-on-surface transition-opacity">
      <span className="material-symbols-outlined text-[16px]">more_vert</span>
      </button>
      </div>
      <div className="font-label-md text-label-md text-primary mb-md">₺250.000</div>
      <div className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant bg-surface-variant w-fit px-sm py-[2px] rounded-DEFAULT">
      <span className="material-symbols-outlined text-[14px]">event</span>
                                  14 Eki
                              </div>
      </div>
      {/* Card */}
      <div className="bg-surface p-md rounded-lg border border-outline-variant hover:border-outline hover:bg-surface-bright cursor-grab transition-colors group">
      <div className="flex justify-between items-start mb-sm">
      <h3 className="font-h3 text-h3 text-on-surface">Beta Yazılım</h3>
      <button className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-on-surface transition-opacity">
      <span className="material-symbols-outlined text-[16px]">more_vert</span>
      </button>
      </div>
      <div className="font-label-md text-label-md text-primary mb-md">₺80.000</div>
      <div className="flex items-center gap-xs font-label-sm text-label-sm text-error bg-error-container/20 w-fit px-sm py-[2px] rounded-DEFAULT">
      <span className="material-symbols-outlined text-[14px]">error</span>
                                  Gecikmiş
                              </div>
      </div>
      </div>
      </div>
      {/* Column 2: İletişime Geçildi */}
      <div className="w-[300px] flex-shrink-0 flex flex-col bg-surface-container rounded-xl border border-outline-variant snap-start">
      <div className="p-md border-b border-outline-variant flex flex-col gap-xs">
      <div className="flex justify-between items-center">
      <h2 className="font-h3 text-h3 text-on-background flex items-center gap-sm">
      <span className="w-2 h-2 rounded-full bg-purple-500 block"></span>
                                  İletişime Geçildi
                              </h2>
      <span className="bg-surface-variant px-sm py-xs rounded-DEFAULT font-label-sm text-label-sm text-on-surface-variant">2</span>
      </div>
      <div className="font-label-md text-label-md text-on-surface-variant">
                              ₺320.000 Tahmini Değer
                          </div>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Card */}
      <div className="bg-surface p-md rounded-lg border border-outline-variant hover:border-outline hover:bg-surface-bright cursor-grab transition-colors group">
      <div className="flex justify-between items-start mb-sm">
      <h3 className="font-h3 text-h3 text-on-surface">Marmara Retail</h3>
      <button className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-on-surface transition-opacity">
      <span className="material-symbols-outlined text-[16px]">more_vert</span>
      </button>
      </div>
      <div className="font-label-md text-label-md text-primary mb-md">₺180.000</div>
      <div className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant bg-surface-variant w-fit px-sm py-[2px] rounded-DEFAULT">
      <span className="material-symbols-outlined text-[14px]">event</span>
                                  15 Eki
                              </div>
      </div>
      </div>
      </div>
      {/* Column 3: Devam Ediyor */}
      <div className="w-[300px] flex-shrink-0 flex flex-col bg-surface-container rounded-xl border border-outline-variant snap-start">
      <div className="p-md border-b border-outline-variant flex flex-col gap-xs">
      <div className="flex justify-between items-center">
      <h2 className="font-h3 text-h3 text-on-background flex items-center gap-sm">
      <span className="w-2 h-2 rounded-full bg-yellow-500 block"></span>
                                  Devam Ediyor
                              </h2>
      <span className="bg-surface-variant px-sm py-xs rounded-DEFAULT font-label-sm text-label-sm text-on-surface-variant">1</span>
      </div>
      <div className="font-label-md text-label-md text-on-surface-variant">
                              ₺550.000 Tahmini Değer
                          </div>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Card */}
      <div className="bg-surface p-md rounded-lg border border-outline-variant hover:border-outline hover:bg-surface-bright cursor-grab transition-colors group shadow-[0_0_15px_rgba(37,99,235,0.1)]">
      <div className="flex justify-between items-start mb-sm">
      <h3 className="font-h3 text-h3 text-on-surface">EnerjiSA Projesi</h3>
      <button className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-on-surface transition-opacity">
      <span className="material-symbols-outlined text-[16px]">more_vert</span>
      </button>
      </div>
      <div className="font-label-md text-label-md text-primary mb-md">₺550.000</div>
      <div className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant bg-surface-variant w-fit px-sm py-[2px] rounded-DEFAULT">
      <span className="material-symbols-outlined text-[14px]">event</span>
                                  20 Eki
                              </div>
      </div>
      </div>
      </div>
      {/* Column 4: Kazanıldı */}
      <div className="w-[300px] flex-shrink-0 flex flex-col bg-surface-container rounded-xl border border-outline-variant snap-start opacity-80">
      <div className="p-md border-b border-outline-variant flex flex-col gap-xs">
      <div className="flex justify-between items-center">
      <h2 className="font-h3 text-h3 text-on-background flex items-center gap-sm">
      <span className="w-2 h-2 rounded-full bg-emerald-500 block"></span>
                                  Kazanıldı
                              </h2>
      <span className="bg-surface-variant px-sm py-xs rounded-DEFAULT font-label-sm text-label-sm text-on-surface-variant">0</span>
      </div>
      <div className="font-label-md text-label-md text-on-surface-variant">
                              ₺0 Kazanılan
                          </div>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm justify-center items-center text-center">
      <span className="material-symbols-outlined text-outline text-[32px] mb-xs">check_circle</span>
      <p className="font-body-sm text-body-sm text-outline">Henüz kazanılan<br />fırsat yok.</p>
      </div>
      </div>
      {/* Column 5: Kaybedildi */}
      <div className="w-[300px] flex-shrink-0 flex flex-col bg-surface-container rounded-xl border border-outline-variant snap-start opacity-70">
      <div className="p-md border-b border-outline-variant flex flex-col gap-xs">
      <div className="flex justify-between items-center">
      <h2 className="font-h3 text-h3 text-on-background flex items-center gap-sm">
      <span className="w-2 h-2 rounded-full bg-red-500 block"></span>
                                  Kaybedildi
                              </h2>
      <span className="bg-surface-variant px-sm py-xs rounded-DEFAULT font-label-sm text-label-sm text-on-surface-variant">0</span>
      </div>
      <div className="font-label-md text-label-md text-on-surface-variant">
                              ₺0 Kaybedilen
                          </div>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm justify-center items-center text-center">
      <span className="material-symbols-outlined text-outline text-[32px] mb-xs">cancel</span>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
