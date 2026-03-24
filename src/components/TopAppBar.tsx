"use client";

import Link from "next/link";

export default function TopAppBar() {
  return (
    <header className="fixed top-0 w-full z-50 glass-header">
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/20">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDybpJaj4wlPg3eiO3YJeVdwK9S-ibueLAyEi4XRn5E6tq4zdRXdMA1yLNPzFY6EPjUP-1Crgt9N9uW5bSrKvox0XQ7vIyWaKUqbf3JROYEPkCrwqQADgApEd6DOAdbsUsY7fF8RU9C_-kT0Jqfvs6LCEd5VciTAd_k0rhVxRwIQjAfTZU0u5Fd8TDluVph_WPUTGExpIxjTRaJa5NdCO6WMoWsRypV9GrthVRboDDDozwdpIJmCBNmEbd-OaZWp6WqrSc4Vpqyy0w"
            />
          </div>
        </div>
        <Link href="/">
          <h1 className="text-2xl font-bold text-[#1b1c1a] font-[var(--font-headline)] italic tracking-tight cursor-pointer">
            Min kokebok
          </h1>
        </Link>
        <button className="text-[#765936] hover:opacity-70 transition-opacity active:scale-95">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>
    </header>
  );
}
