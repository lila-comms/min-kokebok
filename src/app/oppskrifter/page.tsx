"use client";

import { useState } from "react";
import Link from "next/link";
import TopAppBar from "@/components/TopAppBar";
import BottomNav from "@/components/BottomNav";

const categories = ["Alle", "Fisk", "Kjøtt", "Vegetar", "Pasta", "Suppe", "Barnas Favoritter", "Dessert", "Annet"];

const recipes = [
  {
    id: 1,
    title: "Miso-glasert laks med asiatisk agurkraita og hvitløksris",
    fullTitle: "Miso-glasert laks med asiatisk agurkraita og hvitløksris",
    category: "Fisk",
    servings: "2 porsjoner",
    time: "30 min",
    favorite: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8pD5G-sXx7ra8JmoyVrpp58SiUxMjCTPdXtl6zmwztTwK9Zv-BTfXLrzwW0v4LQzj4MlClz7DEUPlDelsqrML_7qjfwdMJYG3dVUh6PBpVzDoSSJuG92DKnlA5l64hiSIlX2pLQ_7riq_iFpxwK0Y2wat_ygDQZq0CrozVaYPn0n48VgD31mzWuGR4HCHH4tYeRRhj250wDs8egdvufht9s9gN9d-dsurIL_egl264kmHF1E9vbD_WZW0830pj_7I50KAF2P00Kg",
    hashtags: ["#asiatisk", "#favoritt"],
  },
  {
    id: 2,
    title: "Rask Middags-Buddha Bowl",
    fullTitle: "Rask Middags-Buddha Bowl",
    category: "Vegetar",
    servings: "4 porsjoner",
    time: "15 min",
    favorite: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1mL7S9UJO5DIzXyu-mLU2zqnjvonTr1T89n7aVI69zKI0c6xGunN8bUWcvDfSInKbpG8UJihNNqZnT_BqcTJo1M8KIWjV2JjSWFlsSFHMkEoQHTU7InzwevJWem40-kvV21euWMnZLtI3KA9V3ene0DV6XvfSbigVyD8UaXnBOAib457kc___dLMCb6FKd-VsHXYIRJ8z_Re2lS5jbMnzga5KDDLSBdPFbjfi414uqEQH-u7cPcABKtdTul66l2M7ZgT97HjBWhQ",
    hashtags: ["#sunn", "#rask"],
  },
  {
    id: 3,
    title: "Autentisk Carbonara uten Fløte",
    fullTitle: "Autentisk Carbonara uten Fløte",
    category: "Pasta",
    servings: "2 porsjoner",
    time: "20 min",
    favorite: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMN0IXxCO4pzRz_dQUfakysik3Grn__Bzoh8lZ59Z0bEgekAl0VUZyplbWwx0LQjxn8h0-I3iQY6_zNN0XpSpHufNG0W30MKOXcP5j2INrSvHJq6h71qvJXUb-yEkcFD2sLQ1XORv9dawRZfHcU5j6JGpOKpS_F6z49RuY4A6FFzPvciGbKsrX_vBiAzUtpdLLZst6Mh7FVsP9kcZ6eQofVeGsv6TBhYS1q4M9mYxZZJI8_sg4zgL0U_LLnT1YeOd-_dslWsun91I",
    hashtags: ["#italiensk", "#klassiker"],
  },
  {
    id: 4,
    title: "Ovnsbakt Tomatsuppe med Grillet Ost",
    fullTitle: "Ovnsbakt Tomatsuppe med Grillet Ost",
    category: "Suppe",
    servings: "4 porsjoner",
    time: "45 min",
    favorite: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqFLbntjwbzeipaIJPKQm9ptiMefSEr-K2Mi6E5QRYMGnOrOWJFjHrLlw-kavbNGWLlIPD2qaEGEGVYZ0eePSkHkAgFORbhX9YTLcpR9CPh8XSwM2FCWGTI-glnRHADOppNzz1ukij-XzHcjyYtjwLkhFfRtRx1BppzZUBS70yYc_GvYcK0tPLikWDdhBrlkIVCo_uoV1wtdDBRmyLxpAyV1-eSrowwwgz0KNvgTAw4IT8xEAfeUdrVunuyZq6TtpI3b67jPeiwGg",
    hashtags: ["#comfortfood"],
  },
];

export default function OppskrifterPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = selectedCategory === "Alle" || recipe.category === selectedCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <TopAppBar />
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        {/* Hero Header Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-2 block">Din samling</span>
              <h2 className="text-5xl md:text-6xl font-[var(--font-headline)] text-on-surface leading-tight">Mine Oppskrifter</h2>
            </div>
            <div className="text-on-surface-variant italic font-[var(--font-headline)] text-lg">
              Viser <span className="text-primary font-bold not-italic">142</span> kulinariske skatter
            </div>
          </div>

          {/* Search & Filters */}
          <div className="mt-10 space-y-6">
            <div className="relative max-w-2xl group">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline-variant group-focus-within:text-primary transition-colors">search</span>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 bg-transparent border-b border-outline-variant/30 focus:border-primary focus:ring-0 transition-all font-[var(--font-body)] text-lg outline-none placeholder:text-outline-variant/60"
                placeholder="Søk etter tittel eller ingrediens..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 -mx-6 px-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredRecipes.map((recipe) => (
            <Link href="/oppskrift" key={recipe.id}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4 editorial-shadow">
                  <img
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={recipe.image}
                  />
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 rounded-full bg-surface/90 backdrop-blur flex items-center justify-center editorial-shadow transition-transform active:scale-90">
                      <span
                        className={`material-symbols-outlined ${recipe.favorite ? "filled-icon text-primary" : "text-on-surface-variant"}`}
                        style={recipe.favorite ? { fontVariationSettings: "'FILL' 1" } : undefined}
                      >
                        favorite
                      </span>
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-secondary-container/90 backdrop-blur text-on-secondary-container text-[10px] uppercase tracking-widest font-bold rounded-full">
                      {recipe.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/60">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">group</span> {recipe.servings}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">schedule</span> {recipe.time}
                    </span>
                  </div>
                  <h3 className="text-2xl font-[var(--font-headline)] text-on-surface group-hover:text-primary transition-colors leading-snug">
                    {recipe.fullTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {recipe.hashtags.map((tag) => (
                      <span key={tag} className="text-xs italic text-on-surface-variant/80">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      {/* Desktop FAB */}
      <Link
        href="/ny-oppskrift"
        className="hidden md:flex fixed bottom-12 right-12 bg-linear-to-tr from-primary to-primary-container text-on-primary w-16 h-16 rounded-full items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all z-40 group"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </Link>

      <BottomNav />
    </>
  );
}
