// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Profil Paneli
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import type { UserProfile, AppSettings, AppView } from "../types/domain";

interface ProfilPaneliProps {
  profile: UserProfile;
  settings: AppSettings;
  onProfileChange: (profile: Partial<UserProfile>) => void;
  onSettingsChange: (settings: Partial<AppSettings>) => void;
  onClose: () => void;
  onClearAll: () => void;
  onNavigate: (view: AppView) => void;
}

export function ProfilPaneli(props: ProfilPaneliProps) {
  const { profile, settings, onProfileChange, onSettingsChange, onClose, onClearAll } = props;

  return (
    <div className="fixed inset-0 bg-surface-container-lowest/80 backdrop-blur-sm z-50 flex items-center justify-center p-md sm:p-lg sm:justify-end">
      {/* Profile Panel Modal/Drawer */}
      <div className="bg-surface-container-high w-full max-w-sm rounded-xl border border-outline-variant shadow-2xl flex flex-col h-auto max-h-[921px] overflow-hidden transform transition-transform">
        {/* Panel Header */}
        <div className="flex items-center justify-between p-lg border-b border-outline-variant bg-surface-container">
          <h2 className="font-h2 text-on-surface">Kullanıcı Profili</h2>
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="w-touch-target h-touch-target flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-full transition-colors -mr-2"
          >
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
              <div className="font-h3 text-on-surface">{profile.name}</div>
              <div className="font-body-sm text-on-surface-variant">{profile.email}</div>
            </div>
          </div>
          {/* Settings Group */}
          <div className="space-y-md">
            {/* Timezone */}
            <div className="bg-surface-container rounded-lg p-md border border-outline-variant">
              <label className="block font-label-sm text-on-surface-variant mb-sm uppercase">Zaman Dilimi</label>
              <div className="flex items-center gap-sm text-on-surface font-body-base bg-surface-dim p-sm rounded border border-outline-variant">
                <span className="material-symbols-outlined text-outline">schedule</span>
                <span className="flex-1">{profile.timezone}</span>
                <button
                  onClick={() => {
                    const zones = ["Europe/Istanbul", "Europe/London", "America/New_York", "Asia/Tokyo"];
                    const idx = zones.indexOf(profile.timezone);
                    onProfileChange({ timezone: zones[(idx + 1) % zones.length] });
                  }}
                  className="text-primary hover:text-primary-fixed text-sm"
                >
                  Değiştir
                </button>
              </div>
            </div>
            {/* Notifications Toggle */}
            <div className="bg-surface-container rounded-lg p-md border border-outline-variant flex items-center justify-between">
              <div>
                <div className="font-h3 text-on-surface">Bildirimler</div>
                <div className="font-body-sm text-on-surface-variant mt-xs">E-posta ve sistem uyarıları</div>
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
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface ${
                  settings.notifications.newLead ? "bg-primary" : "bg-surface-variant border border-outline"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
                    settings.notifications.newLead ? "translate-x-6 bg-on-primary" : "translate-x-1 bg-outline"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        {/* Panel Footer */}
        <div className="p-lg border-t border-outline-variant bg-surface-container">
          <button
            onClick={onClearAll}
            className="w-full flex items-center justify-center gap-sm bg-transparent border border-outline-variant text-error font-label-md py-3 rounded-lg hover:bg-error-container hover:text-on-error hover:border-error-container transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            Çıkış Yap
          </button>
        </div>
      </div>
    </div>
  );
}
