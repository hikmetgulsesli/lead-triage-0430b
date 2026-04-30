// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Durumu (Error State)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

interface HataDurumuErrorStateProps {
  onRetry: () => void;
  onClear: () => void;
}

export function HataDurumuErrorState(props: HataDurumuErrorStateProps) {
  const { onRetry, onClear } = props;

  return (
    <div className="flex-grow flex items-center justify-center relative">
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-error/5 rounded-full blur-[100px]"></div>
      </div>
      {/* Error Card Container */}
      <main className="relative z-10 w-full max-w-md px-gutter">
        <div className="bg-surface-container border border-outline-variant rounded-xl p-xl flex flex-col items-center text-center shadow-2xl">
          {/* Error Icon Banner */}
          <div className="w-20 h-20 bg-error-container rounded-full flex items-center justify-center mb-lg ring-8 ring-background">
            <span className="material-symbols-outlined text-[40px] text-on-error-container" style={{ fontVariationSettings: "'FILL' 1" }}>
              warning
            </span>
          </div>
          {/* Error Content */}
          <h1 className="font-h1 text-h1 text-on-surface mb-sm">Hata Durumu</h1>
          <p className="font-body-base text-body-base text-on-surface-variant mb-xl">
            Veri kaydedilirken bir hata oluştu.
          </p>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-md w-full">
            {/* Primary Action */}
            <button
              onClick={onRetry}
              className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-3 px-md rounded-lg min-h-[44px] hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              Tekrar Dene
            </button>
            {/* Secondary Action */}
            <button
              onClick={onClear}
              className="flex-1 bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md py-3 px-md rounded-lg min-h-[44px] hover:bg-surface-variant transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
              Yerel Veriyi Temizle
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
