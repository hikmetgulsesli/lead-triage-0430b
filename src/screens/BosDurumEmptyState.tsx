// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum (Empty State)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import type { FC } from "react";

interface BosDurumEmptyStateProps {
  onAddLead: () => void;
  isAddOpen?: boolean;
}

export function BosDurumEmptyState(props: BosDurumEmptyStateProps) {
  const { onAddLead, isAddOpen = false } = props;
  return (
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
            <span className="material-symbols-outlined text-4xl text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 0" }}>plagiarism</span>
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
        <button
          
          id="add-first-lead-btn"
          onClick={onAddLead}
          aria-expanded={isAddOpen}
          className="bg-primary-container text-white font-label-md text-label-md px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-inverse-primary transition-colors min-h-[44px] shadow-lg shadow-primary-container/20"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          İlk Adayı Ekle
        </button>
      </div>
    </div>
  );
}
