// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ayarlar (Settings)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AyarlarSettingsProps {}

export function AyarlarSettings(props: AyarlarSettingsProps) {
  return (
    <>
      {/* SideNavBar (Web) */}
      <nav className="hidden md:flex bg-slate-900 dark:bg-[#1E293B] font-['Inter'] text-sm leading-relaxed docked left-0 h-screen w-64 border-r border-r border-slate-700 dark:border-[#334155] shadow-xl dark:shadow-none fixed left-0 top-0 h-full flex flex-col p-4 z-40">
      <div className="mb-8 px-4">
      <h1 className="text-xl font-black text-slate-50">LeadTriage</h1>
      <p className="text-slate-400 text-xs mt-1">Freelancer Paneli</p>
      </div>
      <div className="flex-1 space-y-2">
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md transition-colors" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>person</span>
      <span>Profilim</span>
      </a>
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md transition-colors" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>notifications</span>
      <span>Bildirim Ayarları</span>
      </a>
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md transition-colors" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>help_outline</span>
      <span>Destek</span>
      </a>
      </div>
      <div className="mt-auto">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 font-semibold text-sm transition-colors flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-[18px]">add</span>
                      Yeni Aday Ekle
                  </button>
      </div>
      </nav>
      <div className="flex-1 flex flex-col md:ml-64 w-full max-w-full overflow-hidden">
      {/* TopNavBar (Responsive) */}
      <header className="bg-slate-800 dark:bg-[#1E293B] font-['Inter'] antialiased text-sm tracking-tight docked full-width top-0 border-b border-b border-slate-700 dark:border-[#334155] flat no shadows flex justify-between items-center h-16 px-6 w-full max-w-full shrink-0">
      <div className="flex items-center gap-6 h-full">
      <span className="md:hidden text-lg font-bold text-slate-50 dark:text-[#F8FAFC]">LeadTriage</span>
      <nav className="hidden md:flex h-full items-center gap-6">
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 h-full flex items-center transition-colors" href="#">Adaylar</a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 h-full flex items-center transition-colors" href="#">Pipeline</a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 h-full flex items-center transition-colors" href="#">Analizler</a>
      <a className="text-blue-500 dark:text-[#2563EB] border-b-2 border-blue-600 pb-1 font-semibold h-full flex items-center" href="#">Ayarlar</a>
      </nav>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] p-2 rounded-full transition-colors focus:outline-none">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>notifications</span>
      </button>
      <button className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] p-2 rounded-full transition-colors focus:outline-none">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 overflow-y-auto p-gutter md:p-lg">
      <div className="max-w-4xl mx-auto space-y-lg">
      {/* Page Header */}
      <div>
      <h2 className="font-h1 text-h1 text-on-surface">Ayarlar</h2>
      <p className="font-body-base text-body-base text-on-surface-variant mt-1">Uygulama tercihlerinizi ve sistem ayarlarınızı yapılandırın.</p>
      </div>
      {/* Bento Grid Layout for Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Görünüm & Tema (Appearance & Theme) */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col gap-md h-full">
      <div className="flex items-center gap-3">
      <div className="p-2 bg-surface-container-high rounded-lg text-primary">
      <span className="material-symbols-outlined">palette</span>
      </div>
      <h3 className="font-h3 text-h3 text-on-surface">Görünüm &amp; Tema</h3>
      </div>
      <div className="space-y-4 flex-1">
      <div>
      <label className="font-label-md text-label-md text-on-surface-variant block mb-2">Tema Yoğunluğu</label>
      <div className="flex bg-surface-container-high p-1 rounded-lg border border-outline-variant">
      <button className="flex-1 py-2 px-4 rounded-md bg-surface-variant text-on-surface font-label-md text-label-md transition-colors text-center">
                                              Kompakt
                                          </button>
      <button className="flex-1 py-2 px-4 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 font-label-md text-label-md transition-colors text-center">
                                              Varsayılan
                                          </button>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Tablolarda ve listelerde daha fazla veri göstermek için kompakt görünümü seçin.</p>
      </div>
      </div>
      </div>
      {/* Bölgesel Ayarlar (Regional Settings) */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col gap-md h-full">
      <div className="flex items-center gap-3">
      <div className="p-2 bg-surface-container-high rounded-lg text-primary">
      <span className="material-symbols-outlined">public</span>
      </div>
      <h3 className="font-h3 text-h3 text-on-surface">Bölgesel Ayarlar</h3>
      </div>
      <div className="space-y-4 flex-1">
      <div>
      <label className="font-label-md text-label-md text-on-surface-variant block mb-2" htmlFor="currency-select">Para Birimi</label>
      <div className="relative">
      <select className="w-full bg-surface-dim border border-outline-variant text-on-surface font-body-base text-body-base rounded-lg px-4 h-[44px] focus:ring-2 focus:ring-primary-container focus:border-primary-container appearance-none outline-none" id="currency-select">
      <option value="TRY">TRY (₺)</option>
      <option value="USD">USD ($)</option>
      <option value="EUR">EUR (€)</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-on-surface-variant">
      <span className="material-symbols-outlined">expand_more</span>
      </div>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Finansal analizler ve pipeline değerleri için varsayılan para birimi.</p>
      </div>
      </div>
      </div>
      {/* Bildirim & Hatırlatıcılar (Notifications & Reminders) */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col gap-md h-full md:col-span-2">
      <div className="flex items-center gap-3">
      <div className="p-2 bg-surface-container-high rounded-lg text-primary">
      <span className="material-symbols-outlined">notifications_active</span>
      </div>
      <h3 className="font-h3 text-h3 text-on-surface">Hatırlatıcı Tercihleri</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-lg gap-y-4">
      <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg border border-outline-variant/50">
      <div>
      <p className="font-label-md text-label-md text-on-surface">Yeni Aday Bildirimleri</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Pipeline'a yeni bir aday eklendiğinde bildir.</p>
      </div>
      <button className="w-12 h-6 bg-primary-container rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="absolute right-1 top-1 w-4 h-4 bg-on-primary rounded-full transition-transform"></span>
      </button>
      </div>
      <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg border border-outline-variant/50">
      <div>
      <p className="font-label-md text-label-md text-on-surface">Takip Hatırlatıcıları</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Beklemedeki adaylar için günlük özet gönder.</p>
      </div>
      <button className="w-12 h-6 bg-surface-variant border border-outline-variant rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="absolute left-1 top-1 w-4 h-4 bg-outline rounded-full transition-transform"></span>
      </button>
      </div>
      </div>
      </div>
      {/* Veri & Depolama (Data & Storage) */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col gap-md h-full md:col-span-2">
      <div className="flex items-center gap-3">
      <div className="p-2 bg-surface-container-high rounded-lg text-error">
      <span className="material-symbols-outlined">storage</span>
      </div>
      <h3 className="font-h3 text-h3 text-on-surface">Veri ve Depolama</h3>
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-container-high rounded-lg border border-error-container/30">
      <div>
      <p className="font-label-md text-label-md text-on-surface flex items-center gap-2">
                                          Yerel Depolama (LocalStorage) Durumu
                                          <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">Aktif</span>
      </p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Önbelleğe alınmış 12.4 MB veri bulunuyor. Performans sorunları yaşıyorsanız verileri temizleyebilirsiniz.</p>
      </div>
      <button className="h-[44px] px-6 rounded-lg border border-outline-variant text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors whitespace-nowrap flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-[18px]">delete</span>
                                      Verileri Temizle
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
