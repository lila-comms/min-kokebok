import Link from "next/link";
import BottomNav from "@/components/BottomNav";

const ingredients = [
  { item: "400g laks" },
  { item: "2 ss miso" },
  { item: "1 agurk" },
  { item: "2 fedd hvitløk" },
  { item: "2 dl jasminris" },
  { item: "Yoghurt naturell" },
];

const steps = [
  {
    num: "01",
    title: "Kok risen",
    text: "Skyll jasminrisen grundig i kaldt vann. Kok opp med vann og finhakket hvitløk. La det småkoke under lokk på lav varme til alt vannet er absorbert, ca. 12-15 minutter.",
  },
  {
    num: "02",
    title: "Lag miso-glasuren",
    text: "Bland sammen misopasta, litt revet ingefær, honning og en skvett soya. Pensle laksen raust med glasuren på begge sider.",
  },
  {
    num: "03",
    title: "Stek laksen",
    text: "Varm en panne med litt nøytral olje. Stek laksen i ca 3-4 minutter på hver side til den er gjennomstekt og glasuren har begynt å karamellisere seg.",
  },
  {
    num: "04",
    title: "Lag agurkraita",
    text: "Riv agurken og press ut overflødig vann. Bland med yoghurt, litt limejuice, koriander og en klype salt. Server straks med laksen og risen.",
  },
];

export default function OppskriftPage() {
  return (
    <>
      {/* Custom Header */}
      <header className="fixed top-0 w-full z-50 bg-[#fbf9f6]/80 backdrop-blur-md flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/oppskrifter" className="text-[#765936] hover:bg-[#f5f3f0]/50 p-2 rounded-full transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-[var(--font-headline)] text-2xl font-light tracking-tight text-[#765936]">Min kokebok</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[#765936] hover:bg-[#f5f3f0]/50 p-2 rounded-full transition-colors">
            <span className="material-symbols-outlined filled-icon" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </button>
          <button className="text-[#765936] hover:bg-[#f5f3f0]/50 p-2 rounded-full transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </header>

      <main className="pt-16 pb-12">
        {/* Hero Section */}
        <section className="relative h-[530px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Miso-glasert laks"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzpFQK5j2DgBfNtx9oArQXbHORIDeZoXml6Iuf9ACXXCZQ7c8Tmuii3KtZRP-bTbwL6uboTwseWrde4gvOS7a8w2FyLs4omAGuqva92MsnVtQqFhPCSnn7hNC-op5ZS8Di21px1nMS6kjlJIP3o6rgMBzu2vF3h2SG5s_fN-x2PfGcV4HzipsZvKjDiovMg7G81IzzTczDava7qdwFxsvaaCwjJiMGq_120sM7zW8UIYoyCI1lAKagR0jKgO9qZ36bMOSLxF7ymHo"
          />
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute bottom-0 left-0 w-full px-6 pb-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-2 mb-4">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.1em] font-semibold">Fisk</span>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.1em] font-semibold">asiatisk</span>
                <span className="bg-primary-container/20 text-primary px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.1em] font-semibold">favoritt</span>
              </div>
              <h2 className="font-[var(--font-headline)] text-4xl md:text-6xl text-on-surface leading-tight mb-6">
                Miso-glasert laks med asiatisk agurkraita og hvitløksris
              </h2>
              <div className="flex items-center gap-8 text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <span className="font-[var(--font-label)] text-sm">30 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">group</span>
                  <span className="font-[var(--font-label)] text-sm">2 porsjoner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 mt-12">
          {/* Ingredients Sidebar */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-24">
              <h3 className="font-[var(--font-headline)] text-2xl mb-8 border-b border-outline-variant/20 pb-4">Ingredienser</h3>
              <ul className="space-y-4">
                {ingredients.map((ing, i) => (
                  <li key={i} className="flex justify-between items-end gap-2 group">
                    <span className="text-on-surface-variant font-medium">{ing.item}</span>
                    <div className="flex-grow border-b border-dotted border-outline-variant opacity-30 mb-1 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-outline-variant text-sm">check_circle</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3 mt-10">
                <Link
                  href="/handleliste"
                  className="w-full bg-linear-to-r from-primary to-primary-container text-on-primary py-4 rounded-full font-medium shadow-lg shadow-primary/10 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">shopping_basket</span>
                  Kjøp ingredienser
                </Link>
                <button className="w-full border border-primary text-primary py-4 rounded-full font-medium hover:bg-primary-container/10 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">share</span>
                  Del oppskrift
                </button>
              </div>
            </div>
          </aside>

          {/* Instructions */}
          <article className="md:col-span-8 lg:col-span-9 space-y-12">
            {/* Chef Tip */}
            <div className="flex gap-6 p-8 bg-surface-container-highest/40 rounded-xl">
              <div className="w-1 bg-primary h-auto rounded-full"></div>
              <div>
                <h4 className="font-[var(--font-headline)] italic text-xl text-primary mb-2">Kokkens tips</h4>
                <p className="text-on-surface-variant leading-relaxed italic">
                  Server gjerne med ekstra sesamfrø og en skvis lime for å løfte de asiatiske smakene. Miso-glasuren kan også brukes på kylling eller tofu!
                </p>
              </div>
            </div>

            {/* Steps */}
            <div>
              <h3 className="font-[var(--font-headline)] text-3xl mb-8">Fremgangsmåte</h3>
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className={`grid grid-cols-[auto_1fr] gap-8 p-8 hover:bg-surface-container-low transition-colors rounded-xl group ${
                      i % 2 === 1 ? "bg-surface-container-low/50" : ""
                    }`}
                  >
                    <div className="font-[var(--font-headline)] text-4xl text-outline-variant group-hover:text-primary transition-colors">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-[var(--font-headline)] text-xl mb-3">{step.title}</h4>
                      <p className="text-on-surface-variant leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-96">
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Ingredienser"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfjTZgKbKEdJGRPqfa4jvg2qZLCGCIuh78mLgfdhfJPnoHppnRnf_CcAYKZmFxsXdYK12Q_w1hb2Kfd-aNaCtHC41udu6mGrSXpzzHlGjtGcuGbuC_14K5OpNMf204CQkDZK1qq9VYoQMzC2gh2rxFf1Q2Nfeli-pIAimD1wNeq4Jdc3TyWSeGD06s9aflWKlymlQs6O6Vwcf_1RhT3Pz5oM2fOcWjJ7WlXRa2Ecya5uX3nGXmzFsgVbiMI_XhloViE_SJZ2_qZ10"
                />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <img
                    className="w-full h-full object-cover"
                    alt="Ris"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp-gbPoqo_y6LL-cuU_Nbqx7xOA6v5nnLUFtfxHmaIErE7ybzL28QJD5kdWXu7u52J7X6etTt1C6NVXLj2k6C5w-7Ivwb6LEXFCQIUjBDl3OhjeE-b8KfBbDXmKz3tHx1ew91CjhwEh1u9Elh3eRTLzYqSu0bDijPvGtkBMvS4kk_CDU1iZ9RTMnscuv5jTvvWR8g6_jCyo9UnVlajft7kcTMzwic77b-f0HWPMS1czqWXSugPHbxNa65vHSTOZtdc3pET7sVse3w"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <img
                    className="w-full h-full object-cover"
                    alt="Urter"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2iuYEfEa5zzJIgZgy0LiQJcRAnngFWdgOcd5PHUXU-aUcs0GQ6jVDslKcmc2tVR02pBIcLLLcAVia43LXaxY0dYOvKpiVKzXPZR8M-QCcBnnN5bj7wkosPdFlYkkkyl6DBixxV0fJUbXHnSDS_LGZ7DVUxEsnuO92kxH3aJhU7lp75QIPPkwlw4sZYChY-Zjxd-jGtwML9ZOS-GduvHYTHSBF7jnkffN9ThD871nsqemJviqdQoPxLZQaVTTNU_oXZRHIvB7J2Bk"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <BottomNav />
    </>
  );
}
