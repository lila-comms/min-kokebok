import TopAppBar from "@/components/TopAppBar";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <TopAppBar />

      <main className="flex-1 pb-24">
        {/* Hero Section */}
        <section className="relative mb-8">
          <div className="relative h-80 overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjTBBISj1AUqgTLh-bvlE0eSaWMgdcnpzi8rpS1HsBfPTgkw7uy3mlcTRj3N6c3_dWNFWot-Jyy5wODoq1attShaCJG1OYht-niRxwFMsKaGH9bkO6OubxltDFLyD27L14Ct1dxQB-cLAPUnbgBm8nCZp4L4sz3sDxuC5pGI265szbSA7RUA3gnDKCmO8-X6m44NkERBF40E_RM_B-I_WAtUTkTiJPDU-9nlcpF2v6eRPkxXjyS9bcwM-4ZCQj5tI76Jg4v5B-8Q4"
              alt="Oppdag nye smaker - Månedens inspirasjon"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h1 className="text-4xl font-bold text-white mb-2">Oppdag nye smaker</h1>
              <p className="text-lg text-white/90">Månedens inspirasjon</p>
            </div>
          </div>
        </section>

        <div className="px-4 space-y-8">
          {/* Bento Grid - Editorial */}
          <section className="space-y-4">
            {/* Main feature card */}
            <div className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjTBBISj1AUqgTLh-bvlE0eSaWMgdcnpzi8rpS1HsBfPTgkw7uy3mlcTRj3N6c3_dWNFWot-Jyy5wODoq1attShaCJG1OYht-niRxwFMsKaGH9bkO6OubxltDFLyD27L14Ct1dxQB-cLAPUnbgBm8nCZp4L4sz3sDxuC5pGI265szbSA7RUA3gnDKCmO8-X6m44NkERBF40E_RM_B-I_WAtUTkTiJPDU-9nlcpF2v6eRPkxXjyS9bcwM-4ZCQj5tI76Jg4v5B-8Q4"
                alt="Risotto - Silky and luxurious"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                <h3 className="text-2xl font-bold text-white">Risotto</h3>
                <p className="text-white/80">Silky and luxurious</p>
              </div>
            </div>

            {/* Two smaller cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-2xl overflow-hidden cursor-pointer group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkkxcohXD0TkgddeEB_Q0bLPF7jmQ24Fjs92X9Xd_2aZeMt1FW8p5IVt301n19wC7ONcquzqwKbToRdXVSsP9SB708F4p3rbSwKzKSXfA_LCBwykIVjELtLj2U9a40uOOUQomWohFVL3S4GJjspG6QMKdpMQsBgKMTa2pddxGsan_xu2ZfuyRz11mV1n1JGFPvjdQLAK3afiQR_GGekZvLrYBUzOPiniJs9MSH3i4ohPvit8Q8mA5HKAmiBxAh3BGuVhA070vT9Do"
                  alt="Colorful salads"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold text-white">Salater</h3>
                  <p className="text-white/80 text-sm">Fargerike og friske</p>
                </div>
              </div>

              <div className="relative h-40 rounded-2xl overflow-hidden cursor-pointer group bg-secondary-container">
                <div className="w-full h-full flex flex-col justify-center items-center p-4 text-center">
                  <h3 className="text-2xl font-bold text-on-secondary-container mb-2">Jordskokk</h3>
                  <p className="text-on-secondary-container/80 text-sm">Sesongens ingrediens</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sesongens favoritter */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-on-surface">Sesongens favoritter</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <a
                href="/oppskrift"
                className="rounded-2xl overflow-hidden bg-surface-container-low group cursor-pointer"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa1gwtDL9JFGv12R1SAlObTpn-ogyRycgqdD-hjJJEiOvWUXWqfdsp2DWwPsHlVZMlZpg6D6h9DTppRnHajHvyRsOHtwmiCMTsq1ec-suiCkDLu8gytm88owTUbkRK5GTNXi1QBxWaKxuO88wHwjKsDr7-HCGrwFp8dtRUzObTD1h72veiF0C6MLwg8CEqR-Ey-zMQJ6_onYCAWTTz4qkZ59VHnU_OVHPTkSSTnnhM3i06wZun1XxOpkaLXluxASJuXJKGHtHXVvc"
                    alt="Gresskarsuppe"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-on-surface">Gresskarsuppe</h3>
                  <p className="text-sm text-on-surface-variant">Varm og god</p>
                </div>
              </a>

              {/* Card 2 */}
              <a
                href="/oppskrift"
                className="rounded-2xl overflow-hidden bg-surface-container-low group cursor-pointer"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANZXufVi5yw70LtJKkR_FquCHpaFIIo6MYxFWAe1iBhJ6hmgyCejgA2qa4hHBs71kzzVnesXCzjte-5OZCrVTXIkkv9QMdWlK2bPa02oOYDsFh0xS1VgoBbrx35y1MAy6f6ZqUWPxY_CPc_dH6IT7vPKhDz1ZQbRsSkInDbXQFOISUGvbvduwAsJWPi7NWlr506ulW2qUKv6LFXMGnqM3pfO_m4FHpQ_k3x5OSRTBkjuqzqnt9jckUOvDehiHVGF_RJzF60x8Z090"
                    alt="Pasta med salviesmør"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-on-surface">Pasta</h3>
                  <p className="text-sm text-on-surface-variant">Med salviesmør</p>
                </div>
              </a>

              {/* Card 3 */}
              <a
                href="/oppskrift"
                className="rounded-2xl overflow-hidden bg-surface-container-low group cursor-pointer"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_JAfbSNjTeYccOA6QLSyS_UzPonXxq-uGB68Q6E_phrziB4gwtQl-_59hHGOXVbWpEafhtzcNptOTOWPWBC3PgffyHsu0ofqN1c52iitLHpscqp8tCfxBTSkxCiKY79RgOEBZg_Dl8HJvVk7Xnhc-TX4LcqpSJMBRh6fpTBfGZggVmrvao-BBAHXeD50X53arSGPg0tcgz7gGTUVslDzznXtkECdgUhBr0DSvMXL2I3WTlQjAWP7wBXUsSgbQ1EgfDdMUHQM6IsY"
                    alt="Rustikk plommetarte"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-on-surface">Plommetarte</h3>
                  <p className="text-sm text-on-surface-variant">Rustikk og deilig</p>
                </div>
              </a>

              {/* Card 4 */}
              <a
                href="/oppskrift"
                className="rounded-2xl overflow-hidden bg-surface-container-low group cursor-pointer"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATBYduTJ-JpYufF4rpK56SvVQO85aOj5csdk6GSZH7h7M0wZj7-Diq6YcYcC7AWiAzpTdTIC_U4i0O5tqoB-hdQIZJmNUx2KF8xA7QlVk8Onm19VXML2zIom2zDpcQQbeQ1qhKkwapL-zbQtgCIJmNi_M0fu_YNw4tA9PqDPe38YEpfwXQrHYXrCsx8Lbn2fapC5R4NKIaQ9a1EErdeLxf4RdTSX8k9rxMANOCwGKv6ueqcaqKQ29q-8a3pAkXkgmHCnaGbawyB9o"
                    alt="Sjømatbowl"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-on-surface">Sjømatbowl</h3>
                  <p className="text-sm text-on-surface-variant">Frisk og proteinrik</p>
                </div>
              </a>
            </div>
          </section>

          {/* Raske hverdagsretter */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-on-surface">Raske hverdagsretter</h2>
            <div className="flex overflow-x-auto gap-4 pb-2 -mx-4 px-4 snap-x">
              {/* Card 1 */}
              <a
                href="/oppskrift"
                className="flex-shrink-0 w-56 rounded-2xl overflow-hidden bg-surface-container-low group cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW1pe7LKe-LBev2rpntrl-BEOUTBLurC6zlVav86EI16sVY3utnYE527EQlNc56xp4N6-ea5QLEiKyIV9zKMCOApncRPb5fh_zla4mhM6ddwYe4Lixu8PVNtGlPQqP9DN4zuL3Sz-MzYPo_3_p2buZ2B3hf4-cNrlYhkm_5siLw5jlwsiItVd_hYleeznWRcXExLfx1ONsyDHoHbIbuE9y-z77FQaLCmWisMSJkqWtifsySnilOlasa6O23Tm9cL5etd2M-8ekRac"
                    alt="Ramen"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-on-surface">Ramen</h3>
                  <p className="text-sm text-on-surface-variant">Møtsommelig og mettende</p>
                </div>
              </a>

              {/* Card 2 */}
              <a
                href="/oppskrift"
                className="flex-shrink-0 w-56 rounded-2xl overflow-hidden bg-surface-container-low group cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSmznJ0PLIejHJTG9eF0UdYjj711oS-8svB0_kqd6XKKnHnreD62CSDdue2A6otzvlGzXsE2KS8L8yShxzxJquG3r1rd_8AO1ICBQWaRarO-orE5QdUOj4xTSKo23AXfJt3X3_anI24OdoeaLVdRtUszjm-R29HBPsRCMC3tV0SbqlsvhUwzUJXtvet3Okg4GiAa7ih4EhNBHoQlJTZ6ZldfPL1Oyh1yF-rhxKNS6LRWoQNs9KZpc61RTxzQz1zRorzm8pl0qoUEo"
                    alt="Sitronlaks"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-on-surface">Sitronlaks</h3>
                  <p className="text-sm text-on-surface-variant">Lett og sunnere</p>
                </div>
              </a>

              {/* Card 3 */}
              <a
                href="/oppskrift"
                className="flex-shrink-0 w-56 rounded-2xl overflow-hidden bg-surface-container-low group cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjzzg4qp6doxe8IWoQLmcQ_vyGW7rtAka5Wzs21E1-hs5CdOgAp7u1Vhy1qwhhXqDXI4i1tGO3HEQcYJzYaG_V0aPNfLwdl2OnkSE04BX5sNzCYko2nC_NxZfjAmbL4j_s_p1dJIEh3wXqV6RWFQtPEeS4_oYB2D5rp7_PZiTLE-BPqoLubCAMMsE9oXofL513d3J3sOEDdgq1FgUBCDxqwPshBll49BcsfLjiQDmwyb7L4oiNuB6QPU4p69Grw97ExP5IUFcHvLo"
                    alt="Fisketaco"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-on-surface">Fisketaco</h3>
                  <p className="text-sm text-on-surface-variant">Pikant og festlig</p>
                </div>
              </a>
            </div>
          </section>

          {/* Topprangerte oppskrifter */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-on-surface">Topprangerte oppskrifter</h2>
            <div className="space-y-3">
              {/* Ranking 1 */}
              <a
                href="/oppskrift"
                className="flex gap-4 bg-surface-container-low rounded-2xl overflow-hidden hover:bg-surface-container-lowest transition-colors cursor-pointer"
              >
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM_GCQ_sOQPtKfBNFI3ZyGCf8J5cVBa-D0uk9cla2SpFTnrXH24b4ffvszZ4d8ypZASopcN44uIskgQnf4S-_7zQoOpzEEEaIFVEt0cAp_fL6kRsFWroqJhhNIzO8BhR6fzL-HcpDp0vBhmgX9H1I18UalrPZzkjaOtXLvgNauDLp_5G2AR6pR6RuJuT2TMDcoGTXUdVjQAZeDaPFi7DGkw76IeLOTmwA6mR5FdNcpA8peHBZ4tjNEJoA-Q8tNnQcCEkhHWXETgOg"
                    alt="Carbonara"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center flex-1 p-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">1</span>
                    <h3 className="text-lg font-semibold text-on-surface">Carbonara</h3>
                  </div>
                  <p className="text-sm text-on-surface-variant">Klassiker som aldri blir gammel</p>
                </div>
              </a>

              {/* Ranking 2 */}
              <a
                href="/oppskrift"
                className="flex gap-4 bg-surface-container-low rounded-2xl overflow-hidden hover:bg-surface-container-lowest transition-colors cursor-pointer"
              >
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaXb07ypbBgBlQYK5okxOE7obCO2IiIc0WIkDtKM2Ok9lvVSpkI8-DR6AB1OkCZd1y22d53B4JP8JUWPKncBzDEmkWzMTHZsjj3Gg9Aqdd4nY5eOSsroY-ld-VIaQERIhNzY2A3hdnXEQqzc3TxRAxWyBinLOsV6xVB_fDc3mcFLYSTeptQH8mJdcUlRP9LfImodvfduVIs0tr6Pot56oQTSrzBjDBLBf4VlwKNcs4Mx7b9CqQSsXosWHVKO-nehbgKN0I6TBqMx0"
                    alt="Sjokoladefondant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center flex-1 p-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">2</span>
                    <h3 className="text-lg font-semibold text-on-surface">Sjokoladefondant</h3>
                  </div>
                  <p className="text-sm text-on-surface-variant">Dekadent og lett å lage</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-28 right-6 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-on-primary shadow-lg hover:shadow-xl transition-shadow">
        <span className="text-2xl">+</span>
      </button>

      <BottomNav />
    </div>
  );
}
