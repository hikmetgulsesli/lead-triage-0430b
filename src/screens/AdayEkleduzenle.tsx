// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Aday Ekle/Düzenle
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AdayEkleduzenleProps {}

export function AdayEkleduzenle(props: AdayEkleduzenleProps) {
  return (
    <>
      {/* TopNavBar Web (Suppressed logic: Nav is hidden because this is a modal/transactional flow, but since the instruction asks to use the JSON components, and it's a side panel on top of the main app, we will show the underlying app shell dimmed) */}
      {/* Background App Shell (Dimmed) */}
      <div className="absolute inset-0 z-0 flex flex-col pointer-events-none opacity-40 grayscale-[30%]">
      <header className="flex justify-between items-center h-16 px-6 w-full max-w-full bg-slate-800 dark:bg-[#1E293B] border-b border-slate-700 dark:border-[#334155] font-['Inter'] antialiased text-sm tracking-tight z-10 hidden md:flex">
      <div className="flex items-center gap-6">
      <div className="text-lg font-bold text-slate-50 dark:text-[#F8FAFC]">LeadTriage</div>
      <div className="relative hidden lg:block ml-4">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
      <input className="bg-[#0F172A] border-[#334155] text-on-surface rounded-lg pl-10 pr-4 py-2 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none w-64" disabled={true} placeholder="Arama yapın..." type="text" />
      </div>
      </div>
      <nav className="flex gap-6">
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors px-2 py-1" href="#">Adaylar</a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors px-2 py-1" href="#">Pipeline</a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors px-2 py-1" href="#">Analizler</a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors px-2 py-1" href="#">Ayarlar</a>
      </nav>
      <div className="flex items-center gap-4 text-blue-600 dark:text-[#2563EB]">
      <button className="hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors p-2 rounded-full"><span className="material-symbols-outlined">notifications</span></button>
      <button className="hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors p-2 rounded-full"><span className="material-symbols-outlined">account_circle</span></button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full flex flex-col p-4 z-40 bg-slate-900 dark:bg-[#1E293B] border-r border-slate-700 dark:border-[#334155] font-['Inter'] text-sm leading-relaxed shadow-xl dark:shadow-none w-64 docked left-0 h-screen hidden lg:flex">
      <div className="mb-8 px-2">
      <div className="text-xl font-black text-slate-50 mb-6">LeadTriage</div>
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="A professional headshot of a young male freelancer with a slight smile, wearing a neat dark shirt against a neutral grey background. Soft, even lighting highlights his features. The portrait sits within a small circular avatar frame, fitting the corporate minimalist aesthetic of the dashboard interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi8qfFwwFfswlavwkO0DOtwkuV6EzsxRGWqiX0jzZ1Kd1JpG92ZFt3AvSU1Tt_VUxxk0nZHz9h7Jt7xlNFyro9HsWYHsjRwvyLUFQqlk4wOuLu-AwZx3W9bN7vuH4FVczd2CRPbCkUxCOt2mgJvsMtrBtYiWq5Gam2CZHLlsblm7k9mMIRZ9ph_pKMQUBKfNFLBvXcYm0CFO32QAjLTrom7ZatdQ6M8YyQhEo0uoF8DAa3ci8DjfXtaoldaloFSQDrw7wz0cmdEn4" />
      </div>
      <div>
      <div className="font-h3 text-slate-50">Freelancer Paneli</div>
      <div className="text-slate-400 text-xs">Hoş geldiniz</div>
      </div>
      </div>
      </div>
      <button className="bg-[#2563EB] text-white rounded-lg px-4 py-2 mb-6 font-medium text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors w-full h-[44px]">
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Yeni Aday Ekle
                      </button>
      <nav className="flex-1 space-y-1">
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md transition-colors" href="#">
      <span className="material-symbols-outlined">person</span> Profilim
                          </a>
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md transition-colors" href="#">
      <span className="material-symbols-outlined">notifications</span> Bildirim Ayarları
                          </a>
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md transition-colors" href="#">
      <span className="material-symbols-outlined">help_outline</span> Destek
                          </a>
      </nav>
      </aside>
      <main className="flex-1 p-lg ml-0 lg:ml-64 bg-[#0F172A]">
      {/* Placeholder for main content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="h-40 bg-[#1E293B] border border-[#334155] rounded-xl"></div>
      <div className="h-40 bg-[#1E293B] border border-[#334155] rounded-xl"></div>
      <div className="h-40 bg-[#1E293B] border border-[#334155] rounded-xl"></div>
      </div>
      </main>
      </div>
      </div>
      {/* Modal Overlay Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">
      {/* Side Panel Modal */}
      <dialog className="relative bg-surface-container-low h-full w-full max-w-md md:max-w-xl m-0 ml-auto border-l border-outline-variant shadow-2xl flex flex-col text-on-surface" open={true}>
      {/* Header */}
      <div className="flex items-center justify-between px-lg py-md border-b border-outline-variant bg-surface-container-high shrink-0">
      <div>
      <h2 className="font-h2 text-on-surface">Yeni Aday Ekle</h2>
      <p className="font-body-sm text-on-surface-variant mt-1">Sisteme yeni bir potansiyel müşteri kaydedin.</p>
      </div>
      <button aria-label="Kapat" className="w-[44px] h-[44px] rounded-full flex items-center justify-center hover:bg-surface-variant text-on-surface-variant transition-colors">
      <span className="material-symbols-outlined">close</span>
      </button>
      </div>
      {/* Form Content */}
      <div className="flex-1 overflow-y-auto px-lg py-lg space-y-6 custom-scrollbar">
      {/* Bento-style Group: Core Info */}
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant space-y-5">
      <h3 className="font-label-sm text-on-surface-variant uppercase tracking-widest mb-4">Temel Bilgiler</h3>
      <div className="space-y-2">
      <label className="font-label-md text-on-surface block" htmlFor="name">Ad Soyad <span className="text-error">*</span></label>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">person</span>
      <input className="w-full bg-background border-error text-on-surface rounded-lg pl-10 pr-4 py-2.5 min-h-[44px] font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" id="name" name="name" placeholder="Veri giriniz..." type="text" value="" />
      </div>
      <p className="font-body-sm text-error flex items-center gap-1 mt-1">
      <span className="material-symbols-outlined text-[16px]">error</span>
                                  Ad Soyad alanı zorunludur.
                              </p>
      </div>
      <div className="space-y-2">
      <label className="font-label-md text-on-surface block" htmlFor="company">Şirket</label>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">domain</span>
      <input className="w-full bg-background border-outline-variant text-on-surface rounded-lg pl-10 pr-4 py-2.5 min-h-[44px] font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" id="company" name="company" placeholder="Veri giriniz..." type="text" />
      </div>
      </div>
      </div>
      {/* Bento-style Group: Qualification */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant space-y-4">
      <div className="space-y-2">
      <label className="font-label-md text-on-surface block" htmlFor="source">Kaynak <span className="text-error">*</span></label>
      <div className="relative">
      <select className="w-full bg-background border-outline-variant text-on-surface rounded-lg pl-3 pr-10 py-2.5 min-h-[44px] font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none transition-all" id="source" name="source">
      <option disabled={true} selected={true} value="">Seçiniz...</option>
      <option value="linkedin">LinkedIn</option>
      <option value="referans">Referans</option>
      <option value="email">Email</option>
      <option value="diger">Diğer</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
      </div>
      </div>
      <div className="space-y-2">
      <label className="font-label-md text-on-surface block" htmlFor="status">Durum</label>
      <div className="relative">
      <select className="w-full bg-background border-outline-variant text-on-surface rounded-lg pl-3 pr-10 py-2.5 min-h-[44px] font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none transition-all" id="status" name="status">
      <option selected={true} value="yeni">Yeni</option>
      <option value="beklemede">Beklemede</option>
      <option value="iletisim">İletişimde</option>
      <option value="tamamlandi">Tamamlandı</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
      </div>
      </div>
      </div>
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant space-y-4">
      <div className="space-y-2">
      <label className="font-label-md text-on-surface block" htmlFor="value">Tahmini Değer</label>
      <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline font-body-base">₺</span>
      <input className="w-full bg-background border-outline-variant text-on-surface rounded-lg pl-8 pr-4 py-2.5 min-h-[44px] font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all" id="value" name="value" placeholder="0.00" type="number" />
      </div>
      </div>
      <div className="space-y-2">
      <label className="font-label-md text-on-surface block" htmlFor="date">Tarih</label>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">calendar_today</span>
      <input className="w-full bg-background border-outline-variant text-on-surface rounded-lg pl-10 pr-4 py-2.5 min-h-[44px] font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all [color-scheme:dark]" id="date" name="date" type="date" />
      </div>
      </div>
      </div>
      </div>
      {/* Next Action Full Width */}
      <div className="bg-surface-container rounded-xl p-md border border-outline-variant space-y-2">
      <label className="font-label-md text-on-surface block" htmlFor="next_action">Sonraki Aksiyon</label>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-4 text-outline text-[20px]">assignment</span>
      <textarea className="w-full bg-background border-outline-variant text-on-surface rounded-lg pl-10 pr-4 py-3 font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all resize-none" id="next_action" name="next_action" placeholder="Aday için planlanan bir sonraki adımı giriniz..." rows={3}></textarea>
      </div>
      </div>
      </div>
      {/* Footer Actions */}
      <div className="px-lg py-md border-t border-outline-variant bg-surface-container-high flex items-center justify-end gap-3 shrink-0">
      <button className="min-h-[44px] px-6 font-label-md text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                          İptal
                      </button>
      <button className="min-h-[44px] px-6 rounded-lg bg-primary-container text-on-primary-container font-label-md hover:bg-inverse-primary transition-colors flex items-center gap-2" type="submit">
      <span className="material-symbols-outlined text-[18px]">save</span>
                          Kaydet
                      </button>
      </div>
      </dialog>
      </div>
    </>
  );
}
