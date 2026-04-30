// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Profil Paneli
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface ProfilPaneliProps {}

export function ProfilPaneli(props: ProfilPaneliProps) {
  return (
    <>
      {/* TopNavBar: Standardized from JSON */}
      <header className="bg-surface-container-high text-on-surface-variant font-body-sm antialiased text-sm tracking-tight fixed w-full top-0 border-b border-outline-variant flat no shadows flex justify-between items-center h-16 px-6 max-w-full z-50">
      <div className="text-lg font-bold text-on-surface">LeadTriage</div>
      <nav className="hidden md:flex items-center gap-6">
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-colors flex flex-col items-center gap-1" href="#">Adaylar</a>
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-colors flex flex-col items-center gap-1" href="#">Pipeline</a>
      <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-colors flex flex-col items-center gap-1" href="#">Analizler</a>
      <a className="text-primary border-b-2 border-primary pb-1 font-semibold flex flex-col items-center gap-1" href="#">Ayarlar</a>
      </nav>
      <div className="flex items-center gap-4">
      <button className="w-touch-target h-touch-target flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 rounded-full transition-colors">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-touch-target h-touch-target flex items-center justify-center text-primary bg-primary/10 rounded-full transition-colors relative">
      <span className="material-symbols-outlined">account_circle</span>
      {/* Indicator for active panel */}
      <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
      </button>
      </div>
      </header>
      {/* SideNavBar (Web Only) */}
      <aside className="hidden md:flex bg-surface-container-high text-on-surface-variant font-body-sm leading-relaxed fixed left-0 top-0 h-screen w-64 border-r border-outline-variant shadow-none flex-col p-4 z-40 pt-20">
      <div className="mb-8 px-4">
      <h2 className="text-xl font-black text-on-surface">Freelancer Paneli</h2>
      <p className="text-on-surface-variant text-body-sm mt-1">Hoş geldiniz</p>
      </div>
      <nav className="flex-1 flex flex-col gap-2">
      <a className="bg-primary/10 text-primary rounded-md px-4 py-2 flex items-center gap-3 translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined">person</span>
                      Profilim
                  </a>
      <a className="text-on-surface-variant px-4 py-2 flex items-center gap-3 hover:text-on-surface hover:bg-surface-variant rounded-md" href="#">
      <span className="material-symbols-outlined">notifications</span>
                      Bildirim Ayarları
                  </a>
      <a className="text-on-surface-variant px-4 py-2 flex items-center gap-3 hover:text-on-surface hover:bg-surface-variant rounded-md" href="#">
      <span className="material-symbols-outlined">help_outline</span>
                      Destek
                  </a>
      </nav>
      <div className="mt-auto">
      <button className="w-full bg-primary text-on-primary font-label-md py-3 rounded-lg hover:bg-primary-fixed transition-colors">
                      Yeni Aday Ekle
                  </button>
      </div>
      </aside>
      {/* Main Content Canvas (Behind Modal Overlay) */}
      <main className="flex-1 mt-16 md:ml-64 p-lg overflow-y-auto">
      <div className="max-w-4xl mx-auto">
      <h1 className="font-h1 text-on-surface mb-xl">Ayarlar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg opacity-50 pointer-events-none">
      {/* Dummy content to show context */}
      <div className="bg-surface-container rounded-xl p-lg border border-outline-variant">
      <h3 className="font-h3 text-on-surface mb-sm">Genel</h3>
      <p className="font-body-base text-on-surface-variant">Hesap tercihlerinizi yapılandırın.</p>
      </div>
      <div className="bg-surface-container rounded-xl p-lg border border-outline-variant">
      <h3 className="font-h3 text-on-surface mb-sm">Güvenlik</h3>
      <p className="font-body-base text-on-surface-variant">Şifre ve iki faktörlü doğrulama.</p>
      </div>
      </div>
      </div>
      </main>
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-surface-container-lowest/80 backdrop-blur-sm z-50 flex items-center justify-center p-md sm:p-lg sm:justify-end">
      {/* Profile Panel Modal/Drawer */}
      <div className="bg-surface-container-high w-full max-w-sm rounded-xl border border-outline-variant shadow-2xl flex flex-col h-auto max-h-[921px] overflow-hidden transform transition-transform">
      {/* Panel Header */}
      <div className="flex items-center justify-between p-lg border-b border-outline-variant bg-surface-container">
      <h2 className="font-h2 text-on-surface">Kullanıcı Profili</h2>
      <button className="w-touch-target h-touch-target flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-full transition-colors -mr-2">
      <span className="material-symbols-outlined">close</span>
      </button>
      </div>
      {/* Panel Content */}
      <div className="p-lg flex-1 overflow-y-auto">
      {/* User Info */}
      <div className="flex items-center gap-md mb-xl">
      <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant shrink-0">
      <span className="material-symbols-outlined text-3xl text-on-surface-variant">person</span>
      </div>
      <div>
      <div className="font-h3 text-on-surface">Kullanıcı Adı</div>
      <div className="font-body-sm text-on-surface-variant">admin@leadtriage.com</div>
      </div>
      </div>
      {/* Settings Group */}
      <div className="space-y-md">
      {/* Timezone */}
      <div className="bg-surface-container rounded-lg p-md border border-outline-variant">
      <label className="block font-label-sm text-on-surface-variant mb-sm uppercase">Zaman Dilimi</label>
      <div className="flex items-center gap-sm text-on-surface font-body-base bg-surface-dim p-sm rounded border border-outline-variant">
      <span className="material-symbols-outlined text-outline">schedule</span>
      <span className="flex-1">Europe/Istanbul (GMT+3)</span>
      <button className="text-primary hover:text-primary-fixed text-sm">Değiştir</button>
      </div>
      </div>
      {/* Notifications Toggle */}
      <div className="bg-surface-container rounded-lg p-md border border-outline-variant flex items-center justify-between">
      <div>
      <div className="font-h3 text-on-surface">Bildirimler</div>
      <div className="font-body-sm text-on-surface-variant mt-xs">E-posta ve sistem uyarıları</div>
      </div>
      {/* Custom Toggle Switch */}
      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface">
      <span className="inline-block h-4 w-4 transform rounded-full bg-on-primary transition-transform translate-x-6"></span>
      </button>
      </div>
      </div>
      </div>
      {/* Panel Footer */}
      <div className="p-lg border-t border-outline-variant bg-surface-container">
      <button className="w-full flex items-center justify-center gap-sm bg-transparent border border-outline-variant text-error font-label-md py-3 rounded-lg hover:bg-error-container hover:text-on-error hover:border-error-container transition-colors">
      <span className="material-symbols-outlined">logout</span>
                          Çıkış Yap
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
