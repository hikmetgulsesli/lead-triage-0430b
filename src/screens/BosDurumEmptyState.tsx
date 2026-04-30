// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum (Empty State)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumEmptyStateProps {}

export function BosDurumEmptyState(props: BosDurumEmptyStateProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full flex flex-col p-4 z-40 bg-slate-900 dark:bg-[#1E293B] font-['Inter'] text-sm leading-relaxed docked left-0 h-screen w-64 border-r border-r border-slate-700 dark:border-[#334155] shadow-xl dark:shadow-none hidden md:flex">
      <div className="mb-8 px-4 flex flex-col gap-1">
      <div className="text-xl font-black text-slate-50">Freelancer Paneli</div>
      <div className="text-slate-400 dark:text-[#475569] text-xs">Hoş geldiniz</div>
      </div>
      <div className="flex flex-col gap-2 flex-grow">
      {/* Active Tab Intent Check: Exploring/Searching implies none of these fit perfectly, but we default to suppressing or mapping to Profile if it was a settings page. Since it's a generic empty state for leads, maybe it's on a "Leads" or "Adaylar" page which isn't in the SideNav JSON. So we keep them inactive. */}
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md" href="#">
      <span className="material-symbols-outlined">person</span>
      <span>Profilim</span>
      </a>
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md" href="#">
      <span className="material-symbols-outlined">notifications</span>
      <span>Bildirim Ayarları</span>
      </a>
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md" href="#">
      <span className="material-symbols-outlined">help_outline</span>
      <span>Destek</span>
      </a>
      </div>
      <div className="mt-auto pt-4 border-t border-slate-700 dark:border-[#334155]">
      <button className="w-full bg-primary-container text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-label-md text-label-md min-h-[44px] hover:bg-inverse-primary transition-colors">
      <span className="material-symbols-outlined">add</span>
                      Yeni Aday Ekle
                  </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-grow flex flex-col md:ml-64 w-full h-full relative">
      {/* TopNavBar */}
      <header className="flex justify-between items-center h-16 px-6 w-full max-w-full bg-slate-800 dark:bg-[#1E293B] font-['Inter'] antialiased text-sm tracking-tight docked full-width top-0 border-b border-b border-slate-700 dark:border-[#334155] flat no shadows z-30">
      <div className="flex items-center gap-6">
      <div className="text-lg font-bold text-slate-50 dark:text-[#F8FAFC]">LeadTriage</div>
      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 items-center h-full">
      {/* Active Logic: This is a Leads empty state, so "Adaylar" is active */}
      <a className="text-blue-500 dark:text-[#2563EB] border-b-2 border-blue-600 pb-1 font-semibold h-full flex items-center hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors Active: opacity-80 scale-95 transition-all" href="#">
                              Adaylar
                          </a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 h-full flex items-center hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors" href="#">
                              Pipeline
                          </a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 h-full flex items-center hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors" href="#">
                              Analizler
                          </a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 h-full flex items-center hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors" href="#">
                              Ayarlar
                          </a>
      </nav>
      </div>
      <div className="flex items-center gap-4">
      {/* Search on left of trailing actions */}
      <div className="relative hidden sm:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
      <input className="bg-surface-dim border border-outline-variant rounded-lg pl-9 pr-4 py-1.5 text-body-sm font-body-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline w-64 h-[36px]" placeholder="Arama yapın..." type="text" />
      </div>
      <button className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] p-2 rounded-full transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] p-2 rounded-full transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Canvas Content (Empty State) */}
      <div className="flex-grow flex items-center justify-center p-lg relative overflow-y-auto">
      <div className="max-w-md w-full flex flex-col items-center text-center">
      {/* Abstract Empty State Illustration (Glassmorphism / Glow) */}
      <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
      {/* Subtle Glow Backdrop */}
      <div className="absolute inset-0 bg-primary-container/20 blur-3xl rounded-full"></div>
      {/* Glass Surface Shape 1 */}
      <div className="absolute w-32 h-40 bg-surface-container-high/40 backdrop-blur-md border border-outline-variant/30 rounded-xl transform -rotate-6 flex items-center justify-center shadow-lg">
      <div className="w-16 h-2 bg-outline-variant/50 rounded-full absolute top-6 left-6"></div>
      <div className="w-10 h-2 bg-outline-variant/50 rounded-full absolute top-10 left-6"></div>
      <div className="w-20 h-2 bg-outline-variant/50 rounded-full absolute top-14 left-6"></div>
      </div>
      {/* Glass Surface Shape 2 */}
      <div className="absolute w-32 h-40 bg-surface-container/60 backdrop-blur-xl border border-primary-container/20 rounded-xl transform rotate-3 flex flex-col items-center justify-center shadow-xl p-4 gap-3 z-10 translate-x-4 translate-y-4">
      <span className="material-symbols-outlined text-4xl text-primary-fixed-dim" style={{fontVariationSettings: "'FILL' 0"}}>plagiarism</span>
      <div className="w-full h-1.5 bg-surface-variant rounded-full mt-2"></div>
      <div className="w-3/4 h-1.5 bg-surface-variant rounded-full"></div>
      </div>
      </div>
      {/* Text Content */}
      <h2 className="font-h1 text-h1 text-on-surface mb-4">Henüz adayınız bulunmuyor.</h2>
      <p className="font-body-base text-body-base text-on-surface-variant mb-8 max-w-sm">
                          Müşteri portföyünüzü oluşturmak ve fırsatları takip etmek için hemen yeni bir aday ekleyin.
                      </p>
      {/* CTA */}
      <button className="bg-primary-container text-white font-label-md text-label-md px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-inverse-primary transition-colors min-h-[44px] shadow-lg shadow-primary-container/20">
      <span className="material-symbols-outlined text-[18px]">add</span>
                          İlk Adayı Ekle
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
