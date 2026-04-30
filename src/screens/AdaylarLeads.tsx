// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Adaylar (Leads)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AdaylarLeadsProps {}

export function AdaylarLeads(props: AdaylarLeadsProps) {
  return (
    <>
      {/* Mobile Top Navigation (Visible only on md:hidden if SideNav is hidden, but SideNav is required by JSON so we hide TopNavBar on mobile as per standard, wait, instructions say: On MOBILE (`md:hidden`), prohibit top-row text links and use BottomNavBar. On WEB (`hidden md:flex`), hide the BottomNavBar and use the full nav cluster in the TopAppBar.
          Wait, the JSON provided both TopNavBar and SideNavBar. We will use SideNavBar for web and TopNavBar logic for mobile/web hybrid as instructed, but let's stick to SideNavBar for left as it's typical for desktop, and maybe TopNavBar on top. 
          Actually, JSON gives TopNavBar and SideNavBar. I will render both. SideNavBar hidden on mobile, TopNavBar hidden on desktop? Or TopNavBar on top, SideNavBar on side? The prompt says "Main application view... Navigation tabs at the top". So I'll prioritize TopNavBar as requested by user prompt. But JSON has SideNavBar. I'll include SideNavBar left, TopNavBar top right, or just follow JSON. I will render TopNavBar. */}
      {/* TopNavBar */}
      <nav className="bg-slate-800 dark:bg-[#1E293B] font-['Inter'] antialiased text-sm tracking-tight docked full-width top-0 border-b border-b border-slate-700 dark:border-[#334155] flat no shadows flex justify-between items-center h-16 px-6 w-full max-w-full z-50 fixed hidden md:flex">
      <div className="flex items-center gap-6">
      <div className="text-lg font-bold text-slate-50 dark:text-[#F8FAFC]">LeadTriage</div>
      {/* Search Bar on Top Left */}
      <div className="relative flex items-center ml-4">
      <span className="material-symbols-outlined absolute left-3 text-outline" data-icon="search">search</span>
      <input className="bg-[#0F172A] border border-[#334155] rounded-DEFAULT text-on-surface pl-10 pr-4 py-2 h-9 focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition-all placeholder:text-[#475569] font-body-sm text-body-sm w-64" placeholder="Arama yapın..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-8 h-full">
      <div className="flex h-full items-end gap-6">
      {/* Navigation Links */}
      <a className="text-blue-500 dark:text-[#2563EB] border-b-2 border-blue-600 pb-1 font-semibold flex items-center h-full pt-1 hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors opacity-80 scale-95 transition-all" href="#">Adaylar</a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 flex items-center h-full pt-1 pb-[6px] border-b-2 border-transparent hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors" href="#">Pipeline</a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 flex items-center h-full pt-1 pb-[6px] border-b-2 border-transparent hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors" href="#">Analizler</a>
      <a className="text-slate-400 dark:text-[#475569] hover:text-slate-200 flex items-center h-full pt-1 pb-[6px] border-b-2 border-transparent hover:bg-slate-700/50 dark:hover:bg-[#334155] transition-colors" href="#">Ayarlar</a>
      </div>
      {/* Trailing Icons */}
      <div className="flex items-center gap-4 text-blue-600 dark:text-[#2563EB]">
      <button className="hover:bg-slate-700/50 dark:hover:bg-[#334155] p-2 rounded-full transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="hover:bg-slate-700/50 dark:hover:bg-[#334155] p-2 rounded-full transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </div>
      </nav>
      {/* SideNavBar (Mobile / Web structure handling) */}
      <aside className="bg-slate-900 dark:bg-[#1E293B] font-['Inter'] text-sm leading-relaxed docked left-0 h-screen w-64 border-r border-r border-slate-700 dark:border-[#334155] shadow-xl dark:shadow-none fixed left-0 top-0 h-full flex flex-col p-4 z-40 md:hidden">
      <div className="flex flex-col gap-8 h-full">
      <div>
      <div className="text-xl font-black text-slate-50 mb-6">LeadTriage</div>
      <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden flex-shrink-0">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="A close-up portrait of a confident male professional with a short beard and dark hair, wearing a casual grey t-shirt. The lighting is soft and natural, creating a warm and approachable mood. The background is a blurred, out-of-focus light grey wall, keeping the focus entirely on the subject. The image has a clean, modern aesthetic suitable for a sleek SaaS dashboard profile picture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbkhBrHlLP49IUS1JavLiM0NT5OvosXixbDrE4Y2W5kKbsH2q_xKKfybY2daCUusfsK32cgr1o5LiqXd5s09KT710pKNd1LbP3Swoh57Yhk9Z4wksJsSB6jCMKVk6zlqCzeK5Z-DyhEkAUcCh8qqUMvxmLwsb7I_CZZG_X0DaziB46O8j7kvCgDG06WnQWZujVKAuWSRf5VhM3JHvoLNJhnV2PzmOi_1xTPMc6lXZjxSXqm0d_PYtevK3vmoc22I2WjVtWhQVTFj8" />
      </div>
      <div>
      <div className="font-h3 text-h3 text-on-surface">Freelancer Paneli</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Hoş geldiniz</div>
      </div>
      </div>
      <div className="flex flex-col gap-2">
      <a className="bg-blue-600/10 dark:bg-[#2563EB]/10 text-blue-500 dark:text-[#2563EB] rounded-md px-4 py-2 flex items-center gap-3 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md translate-x-1 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="person">person</span>
                              Profilim
                          </a>
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md" href="#">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                              Bildirim Ayarları
                          </a>
      <a className="text-slate-400 dark:text-[#475569] px-4 py-2 flex items-center gap-3 hover:text-slate-100 hover:bg-slate-800 dark:hover:bg-[#334155] rounded-md" href="#">
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
                              Destek
                          </a>
      </div>
      </div>
      <div className="mt-auto">
      <button className="w-full bg-[#2563EB] text-white font-body-base text-body-base rounded-DEFAULT py-2 px-4 hover:bg-inverse-primary transition-colors flex items-center justify-center gap-2 min-h-[44px]">
      <span className="material-symbols-outlined" data-icon="add">add</span>
                          Yeni Aday Ekle
                      </button>
      </div>
      </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="flex-1 w-full md:mt-16 bg-background pt-lg px-lg pb-lg md:ml-0 overflow-x-hidden">
      {/* Page Header & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-xl">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Adaylar</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Aktif satış fırsatlarınızı yönetin ve önceliklendirin.</p>
      </div>
      <div className="flex items-center gap-4 w-full md:w-auto">
      {/* Mobile Search (if top nav hidden) */}
      <div className="relative flex items-center flex-1 md:hidden">
      <span className="material-symbols-outlined absolute left-3 text-outline" data-icon="search">search</span>
      <input className="w-full bg-[#0F172A] border border-[#334155] rounded-DEFAULT text-on-surface pl-10 pr-4 py-2 h-11 focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition-all placeholder:text-[#475569] font-body-sm text-body-sm" placeholder="Arama yapın..." type="text" />
      </div>
      <button className="hidden md:flex bg-[#2563EB] text-white font-label-md text-label-md rounded-DEFAULT px-4 py-2 items-center justify-center gap-2 min-h-[44px] hover:bg-inverse-primary transition-colors">
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
      <select className="bg-[#0F172A] border border-[#334155] rounded-DEFAULT text-on-surface py-2 pl-3 pr-8 min-h-[44px] font-body-sm text-body-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none">
      <option value="">Kaynak: Tümü</option>
      <option value="web">Web Sitesi</option>
      <option value="referral">Referans</option>
      <option value="outbound">Dış Arama</option>
      </select>
      <select className="bg-[#0F172A] border border-[#334155] rounded-DEFAULT text-on-surface py-2 pl-3 pr-8 min-h-[44px] font-body-sm text-body-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none">
      <option value="">Durum: Tümü</option>
      <option value="yeni">Yeni</option>
      <option value="beklemede">Beklemede</option>
      <option value="gorusuldu">Görüşüldü</option>
      </select>
      <select className="bg-[#0F172A] border border-[#334155] rounded-DEFAULT text-on-surface py-2 pl-3 pr-8 min-h-[44px] font-body-sm text-body-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none">
      <option value="">Değer: Sırala</option>
      <option value="high">Yüksekten Düşüğe</option>
      <option value="low">Düşükten Yükseğe</option>
      </select>
      <button className="ml-auto text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-colors min-h-[44px] px-2">
                      Temizle
                  </button>
      </div>
      {/* Data Table (Bento/Card Hybrid for modern feel) */}
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
      {/* Row 1 */}
      <tr className="hover:bg-[#334155] transition-colors group">
      <td className="px-4 py-sm">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-md text-label-md font-bold">
                                              AC
                                          </div>
      <div>
      <div className="font-body-base text-body-base text-on-surface font-medium">Ahmet Yılmaz</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Acme Corp</div>
      </div>
      </div>
      </td>
      <td className="px-4 py-sm font-body-sm text-body-sm text-on-surface-variant">Web Sitesi</td>
      <td className="px-4 py-sm font-body-base text-body-base text-on-surface">₺45,000</td>
      <td className="px-4 py-sm">
      <span className="inline-flex items-center px-2 py-0.5 rounded-xs font-label-sm text-label-sm bg-primary-container/20 text-primary-fixed">Yeni</span>
      </td>
      <td className="px-4 py-sm font-body-sm text-body-sm text-on-surface-variant">
                                      İlk aramayı yap
                                  </td>
      <td className="px-4 py-sm font-body-sm text-body-sm text-on-surface-variant">12 Eki 2023</td>
      <td className="px-4 py-sm text-right">
      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="w-8 h-8 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant flex items-center justify-center transition-colors" title="Görüşüldü İşaretle">
      <span className="material-symbols-outlined text-[20px]" data-icon="check_circle">check_circle</span>
      </button>
      <button className="w-8 h-8 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant flex items-center justify-center transition-colors" title="Düzenle">
      <span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span>
      </button>
      <button className="w-8 h-8 rounded text-error hover:bg-error-container/20 flex items-center justify-center transition-colors" title="Sil">
      <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
      </button>
      </div>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="hover:bg-[#334155] transition-colors group">
      <td className="px-4 py-sm">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-label-md text-label-md font-bold">
                                              GT
                                          </div>
      <div>
      <div className="font-body-base text-body-base text-on-surface font-medium">Ayşe Demir</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Global Tech</div>
      </div>
      </div>
      </td>
      <td className="px-4 py-sm font-body-sm text-body-sm text-on-surface-variant">Referans</td>
      <td className="px-4 py-sm font-body-base text-body-base text-on-surface">₺120,000</td>
      <td className="px-4 py-sm">
      <span className="inline-flex items-center px-2 py-0.5 rounded-xs font-label-sm text-label-sm bg-[#334155] text-on-surface-variant">Beklemede</span>
      </td>
      <td className="px-4 py-sm font-body-sm text-body-sm text-on-surface-variant">
                                      Teklif gönderilecek
                                  </td>
      <td className="px-4 py-sm font-body-sm text-body-sm text-on-surface-variant">10 Eki 2023</td>
      <td className="px-4 py-sm text-right">
      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="w-8 h-8 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant flex items-center justify-center transition-colors" title="Görüşüldü İşaretle">
      <span className="material-symbols-outlined text-[20px]" data-icon="check_circle">check_circle</span>
      </button>
      <button className="w-8 h-8 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant flex items-center justify-center transition-colors" title="Düzenle">
      <span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span>
      </button>
      <button className="w-8 h-8 rounded text-error hover:bg-error-container/20 flex items-center justify-center transition-colors" title="Sil">
      <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
      </button>
      </div>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="hover:bg-[#334155] transition-colors group">
      <td className="px-4 py-sm">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-bold">
                                              NX
                                          </div>
      <div>
      <div className="font-body-base text-body-base text-on-surface font-medium">Mehmet Kaya</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">NextGen Inc</div>
      </div>
      </div>
      </td>
      <td className="px-4 py-sm font-body-sm text-body-sm text-on-surface-variant">Dış Arama</td>
      <td className="px-4 py-sm font-body-base text-body-base text-on-surface">₺15,000</td>
      <td className="px-4 py-sm">
      <span className="inline-flex items-center px-2 py-0.5 rounded-xs font-label-sm text-label-sm bg-secondary-container/50 text-secondary-fixed">Görüşüldü</span>
      </td>
      <td className="px-4 py-sm font-body-sm text-body-sm text-on-surface-variant">
                                      Takip araması (Cuma)
                                  </td>
      <td className="px-4 py-sm font-body-sm text-body-sm text-on-surface-variant">08 Eki 2023</td>
      <td className="px-4 py-sm text-right">
      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="w-8 h-8 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant flex items-center justify-center transition-colors" title="Görüşüldü İşaretle">
      <span className="material-symbols-outlined text-[20px]" data-icon="check_circle">check_circle</span>
      </button>
      <button className="w-8 h-8 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant flex items-center justify-center transition-colors" title="Düzenle">
      <span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span>
      </button>
      <button className="w-8 h-8 rounded text-error hover:bg-error-container/20 flex items-center justify-center transition-colors" title="Sil">
      <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
      </button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination / Footer */}
      <div className="px-4 py-3 border-t border-[#334155] bg-[#1E293B] flex items-center justify-between">
      <div className="font-body-sm text-body-sm text-on-surface-variant">
                          Toplam 24 adaydan 1-3 arası gösteriliyor
                      </div>
      <div className="flex items-center gap-2">
      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
      </button>
      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors">
      <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
