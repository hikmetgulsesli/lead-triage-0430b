// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Aday Ekle/Düzenle
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useEffect } from "react";
import type { Lead, LeadSource, LeadStatus } from "../types/domain";

interface AdayEkleduzenleProps {
  lead?: Lead;
  onSave: (data: Omit<Lead, "id"> | Lead) => void;
  onClose: () => void;
}

const sourceOptions: { value: LeadSource; label: string }[] = [
  { value: "web", label: "Web Sitesi" },
  { value: "referans", label: "Referans" },
  { value: "outbound", label: "Dış Arama" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "email", label: "Email" },
  { value: "diger", label: "Diğer" },
];

const statusOptions: { value: LeadStatus; label: string }[] = [
  { value: "yeni", label: "Yeni" },
  { value: "beklemede", label: "Beklemede" },
  { value: "iletisim", label: "İletişimde" },
  { value: "gorusuldu", label: "Görüşüldü" },
  { value: "tamamlandi", label: "Tamamlandı" },
  { value: "kazanildi", label: "Kazanıldı" },
  { value: "kaybedildi", label: "Kaybedildi" },
];

export function AdayEkleduzenle(props: AdayEkleduzenleProps) {
  const { lead, onSave, onClose } = props;
  const isEditing = !!lead;

  const [name, setName] = useState(lead?.name ?? "");
  const [company, setCompany] = useState(lead?.company ?? "");
  const [source, setSource] = useState<LeadSource>(lead?.source ?? "web");
  const [status, setStatus] = useState<LeadStatus>(lead?.status ?? "yeni");
  const [estimatedValue, setEstimatedValue] = useState<number>(lead?.estimatedValue ?? 0);
  const [date, setDate] = useState(lead?.date ?? "");
  const [nextAction, setNextAction] = useState(lead?.nextAction ?? "");
  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    if (lead) {
      setName(lead.name);
      setCompany(lead.company);
      setSource(lead.source);
      setStatus(lead.status);
      setEstimatedValue(lead.estimatedValue);
      setDate(lead.date);
      setNextAction(lead.nextAction);
      setNameError(false);
    }
  }, [lead]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    const data: Omit<Lead, "id"> = {
      name: name.trim(),
      company: company.trim(),
      source,
      status,
      estimatedValue: Number(estimatedValue) || 0,
      date,
      nextAction: nextAction.trim(),
      contacted: status === "gorusuldu" || status === "tamamlandi" || status === "kazanildi",
    };
    if (isEditing && lead) {
      onSave({ ...data, id: lead.id, contacted: lead.contacted });
    } else {
      onSave(data);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">
      {/* Side Panel Modal */}
      <div className="relative bg-surface-container-low h-full w-full max-w-md md:max-w-xl m-0 ml-auto border-l border-outline-variant shadow-2xl flex flex-col text-on-surface">
        {/* Header */}
        <div className="flex items-center justify-between px-lg py-md border-b border-outline-variant bg-surface-container-high shrink-0">
          <div>
            <h2 className="font-h2 text-on-surface">{isEditing ? "Adayı Düzenle" : "Yeni Aday Ekle"}</h2>
            <p className="font-body-sm text-on-surface-variant mt-1">
              {isEditing ? "Mevcut aday bilgilerini güncelleyin." : "Sisteme yeni bir potansiyel müşteri kaydedin."}
            </p>
          </div>
          <button
            aria-label="Kapat"
            onClick={onClose}
            className="w-[44px] h-[44px] rounded-full flex items-center justify-center hover:bg-surface-variant text-on-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {/* Form Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-lg py-lg space-y-6 custom-scrollbar">
          {/* Bento-style Group: Core Info */}
          <div className="bg-surface-container rounded-xl p-md border border-outline-variant space-y-5">
            <h3 className="font-label-sm text-on-surface-variant uppercase tracking-widest mb-4">Temel Bilgiler</h3>
            <div className="space-y-2">
              <label className="font-label-md text-on-surface block" htmlFor="name">Ad Soyad <span className="text-error">*</span></label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">person</span>
                <input
                  className={`w-full bg-background border-${nameError ? "error" : "outline-variant"} text-on-surface rounded-lg pl-10 pr-4 py-2.5 min-h-[44px] font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all`}
                  id="name"
                  name="name"
                  placeholder="Veri giriniz..."
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setNameError(false); }}
                />
              </div>
              {nameError && (
                <p className="font-body-sm text-error flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[16px]">error</span>
                  Ad Soyad alanı zorunludur.
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-on-surface block" htmlFor="company">Şirket</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">domain</span>
                <input
                  className="w-full bg-background border-outline-variant text-on-surface rounded-lg pl-10 pr-4 py-2.5 min-h-[44px] font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all"
                  id="company"
                  name="company"
                  placeholder="Veri giriniz..."
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* Bento-style Group: Qualification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container rounded-xl p-md border border-outline-variant space-y-4">
              <div className="space-y-2">
                <label className="font-label-md text-on-surface block" htmlFor="source">Kaynak <span className="text-error">*</span></label>
                <div className="relative">
                  <select
                    className="w-full bg-background border-outline-variant text-on-surface rounded-lg pl-3 pr-10 py-2.5 min-h-[44px] font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none transition-all"
                    id="source"
                    name="source"
                    value={source}
                    onChange={(e) => setSource(e.target.value as LeadSource)}
                  >
                    {sourceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface block" htmlFor="status">Durum</label>
                <div className="relative">
                  <select
                    className="w-full bg-background border-outline-variant text-on-surface rounded-lg pl-3 pr-10 py-2.5 min-h-[44px] font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none transition-all"
                    id="status"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as LeadStatus)}
                  >
                    {statusOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
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
                  <input
                    className="w-full bg-background border-outline-variant text-on-surface rounded-lg pl-8 pr-4 py-2.5 min-h-[44px] font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all"
                    id="value"
                    name="value"
                    placeholder="0.00"
                    type="number"
                    value={estimatedValue}
                    onChange={(e) => setEstimatedValue(Number(e.target.value))}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface block" htmlFor="date">Tarih</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">calendar_today</span>
                  <input
                    className="w-full bg-background border-outline-variant text-on-surface rounded-lg pl-10 pr-4 py-2.5 min-h-[44px] font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all [color-scheme:dark]"
                    id="date"
                    name="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Next Action Full Width */}
          <div className="bg-surface-container rounded-xl p-md border border-outline-variant space-y-2">
            <label className="font-label-md text-on-surface block" htmlFor="next_action">Sonraki Aksiyon</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-4 text-outline text-[20px]">assignment</span>
              <textarea
                className="w-full bg-background border-outline-variant text-on-surface rounded-lg pl-10 pr-4 py-3 font-body-base focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all resize-none"
                id="next_action"
                name="next_action"
                placeholder="Aday için planlanan bir sonraki adımı giriniz..."
                rows={3}
                value={nextAction}
                onChange={(e) => setNextAction(e.target.value)}
              />
            </div>
          </div>
        </form>
        {/* Footer Actions */}
        <div className="px-lg py-md border-t border-outline-variant bg-surface-container-high flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="min-h-[44px] px-6 font-label-md text-on-surface-variant hover:text-on-surface transition-colors"
            type="button"
          >
            İptal
          </button>
          <button
            onClick={handleSubmit}
            className="min-h-[44px] px-6 rounded-lg bg-primary-container text-on-primary-container font-label-md hover:bg-inverse-primary transition-colors flex items-center gap-2"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">save</span>
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}
