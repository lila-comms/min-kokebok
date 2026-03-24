'use client';

import TopAppBar from '@/components/TopAppBar';
import BottomNav from '@/components/BottomNav';

export default function ProfilPage() {
  const friendAvatars = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDD4Vv_ONpqSY3q-Vyrde_BBvvddQYCnG6_7FwAxHlAdFsKTJn7NKJoDVSTYQe84Myx4jxiafUXU45Tg8v-uFtPM6nJAL_6lNOIyguV8lvwzt8ltUBIuRsmm-aDKrmvewVhXCmWEWs8Yg3qQ1Qe2Nh_iKKtRji0kwXxz0mlKyIjyE9UYV_s5YpbCOXQdyxytKdojgOTGZiSH2R0W6K-9EIaSsST_YoK4gYpUbiYFLOSAfcYSQArG94b9EVALMe7lRGjuN6mOe1Ub88',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBEiXtT1N3y_zbH0-pv7n4RPniQgfRMig1M8b_-rfdo9JBzHAmZM6NdG8HRV1kkzCsj1WnfbOZtD7atCNt6qMkHzM7Nn2xF7HX_vd8XWN44Ku6U8U4L6j1YYUzOVIetcgcZYdPXxbhW6EtpRohVN1eZ27e3oWYhBBw-KcMRPRlPN4co347h0ssCuwUWycDPR56IR6ce8us4EF0lw6zAgKMF3DA37gAMQHyCNc79gXaf8ZV01TpnTFRadiq2C0LsdpwrBpGTII8qYAg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCL53wwxX5QQMYe37Y3D7pJsVElwLEqGuyTFU5hT0M0GD3jzVJM3mKVS4U2niR1hJdltNzhriRLbraZ1IM2BkMiOmiIHpLZcwxDsgb2MMEJRR2oWJ0L7EIFO9iVAV8pETDNqeGTeB9FbUSukWRCgKsoGhfNF9eG47oxQhCTXGt0rhPbfxRBdn13-hbKsWZv3Pcf6lhnD4g34TiG86yoHPOC4zLlO5zJNrkSOhavaDrcZE605ZrEI1MhktNSQtu9GvCIK2dNn8J9NLM',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCZvX89wfrp6aOMELO5p5CcuknjYY3YtpzB5BGBTZGbTn3tJW4y_ALBWVTlXnBOq6DPAtr9IdX1P-J15-zInaQN2OlMHUQ5MwhSMmlGKR6W-qTTalt1IummCUrbGx0Oq-6sheXuQd4zGmKi41kweUTiNQsQ-rZWuSL7Vm2bDIXijGzaQAHkBYC23Ni9pLzEFw7y6yZkqp9iFqtO0CSwxdTngNLcnes_piBehigSEGgW_hKwWBpnVrePAlNLJ8SfZMj_SD4cQk58eKw'
  ];

  const settings = [
    { icon: '👤', label: 'Kontoinformasjon', href: '#' },
    { icon: '🥗', label: 'Kostholdspreferanser', href: '#' },
    { icon: '🔔', label: 'Varslinger', href: '#' },
    { icon: '🌐', label: 'Språk', href: '#' }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopAppBar />

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <div className="mb-6 transform -rotate-2 inline-block">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFRtp7b-39Rzf7wRqTRCavDTEN0Z6jJ-1_nggKmvsZ0JAU8akenv76Zw99EJSCerq0fFL5bnEZbiO_wbG3FbOsMGJy94p4EzpUXP-CWgKhSwf0CjyHA7vJMJgMLC0MU04Dqjy8kfax1hguRqnOxJmnTNpQj-wf70xuhs7k8hTEbIvGf_Heta9QjznnBzEUufAGDXg-3PUb6zQmXIDu_MfR8Ks3rCMERHrbskOQL0o5MH5VEIUHURRFICKjmsxmZ3y74i_SupYCHC0"
              alt="Astrid Berg"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>
          <h1 className="text-3xl font-bold text-on-background mb-2">Astrid Berg</h1>
          <p className="text-sm text-on-surface-variant font-medium mb-3">Digital Curator</p>
          <p className="text-on-surface-variant italic">
            Leioneser og mat-elsker basert i Oslo. Liker å eksperimentere med nye ingredienser og dele mine funn.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-surface-container rounded-lg p-6 text-center editorial-shadow">
            <p className="text-2xl font-bold text-primary mb-1">142</p>
            <p className="text-sm text-on-surface-variant">Oppskrifter</p>
          </div>
          <div className="bg-surface-container rounded-lg p-6 text-center editorial-shadow">
            <p className="text-2xl font-bold text-primary mb-1">24</p>
            <p className="text-sm text-on-surface-variant">Lagrede</p>
          </div>
          <div className="bg-surface-container rounded-lg p-6 text-center editorial-shadow">
            <p className="text-2xl font-bold text-primary mb-1">12</p>
            <p className="text-sm text-on-surface-variant">Venner</p>
          </div>
        </div>

        {/* Friends Section */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-on-background mb-4">Mine venner</h2>
          <div className="relative h-20">
            {friendAvatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`Friend ${index + 1}`}
                className="absolute w-16 h-16 rounded-full object-cover border-3 border-background shadow-md"
                style={{ left: `${index * 40}px`, top: 0 }}
              />
            ))}
            <div
              className="absolute w-16 h-16 rounded-full bg-surface-container border-3 border-background flex items-center justify-center font-semibold text-on-surface-variant shadow-md"
              style={{ left: `${friendAvatars.length * 40}px`, top: 0 }}
            >
              +8
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-on-background mb-4">Innstillinger</h2>
          <div className="space-y-1">
            {settings.map((setting, index) => (
              <a
                key={index}
                href={setting.href}
                className="flex items-center gap-4 px-6 py-4 text-on-background hover:bg-surface-container-highest transition-colors rounded-lg"
              >
                <span className="text-2xl">{setting.icon}</span>
                <span className="flex-1 font-medium">{setting.label}</span>
                <span className="text-on-surface-variant">›</span>
              </a>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-full bg-error text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow mb-12">
          Logg ut
        </button>

        {/* Quote Section */}
        <div className="text-center pt-8 border-t border-outline">
          <p className="text-lg italic text-on-background mb-2">
            "Cooking is like love. It should be entered into with abandon or not at all."
          </p>
          <p className="text-on-surface-variant">— Auguste Escoffier</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
