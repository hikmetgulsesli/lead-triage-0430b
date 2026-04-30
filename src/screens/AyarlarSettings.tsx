// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ayarlar (Settings)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import type { AppSettings, AppView } from "../types/domain";

interface AyarlarSettingsProps {
  settings: AppSettings;
  onSettingsChange: (settings: Partial<AppSettings>) => void;
  onClearAll: () => void;
  onLoadSeed: () => void;
  onExport: () => void;
  onSimulateError: (enabled: boolean) => void;
  onNavigate: (view: AppView) => void;
  onOpenProfile: () => void;
  onAddLead: () => void;
}

export function AyarlarSettings(props: AyarlarSettingsProps) {
  const {
    settings,
    onSettingsChange,
    onClearAll,
    onLoadSeed,
    onExport,
    onSimulateError,
  } = props;

  return (
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
            <h3 className="font-h3 text-h3 text-on-surface">Görünüm & Tema</h3>
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <label className="font-label-md text-label-md text-on-surface-variant block mb-2">Tema Yoğunluğu</label>
              <div className="flex bg-surface-container-high p-1 rounded-lg border border-outline-variant">
                <button
                  onClick={() => onSettingsChange({ density: "compact" })}
                  className={`flex-1 py-2 px-4 rounded-md font-label-md text-label-md transition-colors text-center ${
                    settings.density === "compact"
                      ? "bg-surface-variant text-on-surface"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50"
                  }`}
                >
                  Kompakt
                </button>
                <button
                  onClick={() => onSettingsChange({ density: "default" })}
                  className={`flex-1 py-2 px-4 rounded-md font-label-md text-label-md transition-colors text-center ${
                    settings.density === "default"
                      ? "bg-surface-variant text-on-surface"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50"
                  }`}
                >
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
                <select
                  className="w-full bg-surface-dim border border-outline-variant text-on-surface font-body-base text-body-base rounded-lg px-4 h-[44px] focus:ring-2 focus:ring-primary-container focus:border-primary-container appearance-none outline-none"
                  id="currency-select"
                  value={settings.currency}
                  onChange={(e) => onSettingsChange({ currency: e.target.value as AppSettings["currency"] })}
                >
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
              <button
                onClick={() =>
                  onSettingsChange({
                    notifications: {
                      ...settings.notifications,
                      newLead: !settings.notifications.newLead,
                    },
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background ${
                  settings.notifications.newLead ? "bg-primary-container" : "bg-surface-variant border border-outline-variant"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 rounded-full transition-transform ${
                    settings.notifications.newLead
                      ? "translate-x-6 bg-on-primary"
                      : "translate-x-1 bg-outline"
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg border border-outline-variant/50">
              <div>
                <p className="font-label-md text-label-md text-on-surface">Takip Hatırlatıcıları</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Beklemedeki adaylar için günlük özet gönder.</p>
              </div>
              <button
                onClick={() =>
                  onSettingsChange({
                    notifications: {
                      ...settings.notifications,
                      followUp: !settings.notifications.followUp,
                    },
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background ${
                  settings.notifications.followUp ? "bg-primary-container" : "bg-surface-variant border border-outline-variant"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 rounded-full transition-transform ${
                    settings.notifications.followUp
                      ? "translate-x-6 bg-on-primary"
                      : "translate-x-1 bg-outline"
                  }`}
                />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-container-high rounded-lg border border-error-container/30">
              <div>
                <p className="font-label-md text-label-md text-on-surface flex items-center gap-2">
                  Yerel Depolama (LocalStorage) Durumu
                  <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">Aktif</span>
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Veriler tarayıcınızda kalıcı olarak saklanıyor.</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={onLoadSeed}
                  className="h-[44px] px-4 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-variant font-label-md text-label-md transition-colors whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">upload</span>
                  Test Verisi Yükle
                </button>
                <button
                  onClick={onClearAll}
                  className="h-[44px] px-4 rounded-lg border border-outline-variant text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                  Verileri Temizle
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-container-high rounded-lg border border-outline-variant/50">
              <div>
                <p className="font-label-md text-label-md text-on-surface">Veri Export</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Tüm verilerinizi JSON dosyası olarak indirin.</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={onExport}
                  className="h-[44px] px-4 rounded-lg bg-primary-container text-on-primary-container hover:bg-inverse-primary font-label-md text-label-md transition-colors whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Dışa Aktar
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-container-high rounded-lg border border-outline-variant/50 md:col-span-2">
              <div>
                <p className="font-label-md text-label-md text-on-surface">Hata Simülasyonu</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Kaydetme hatası senaryosunu test etmek için etkinleştirin.</p>
              </div>
              <button
                onClick={() => onSimulateError(true)}
                className="h-[44px] px-4 rounded-lg border border-error text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors whitespace-nowrap flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">bug_report</span>
                Hata Simüle Et
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
