"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/oppskrifter", icon: "menu_book", label: "Oppskrifter" },
  { href: "/", icon: "explore", label: "Oppdag" },
  { href: "/maltidsplan", icon: "calendar_today", label: "Måltidsplan" },
  { href: "/profil", icon: "person", label: "Profil" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pt-3 pb-6 px-4 bg-[#fbf9f6]/80 backdrop-blur-md z-50 rounded-t-lg shadow-[0_-4px_24px_rgba(27,28,26,0.06)]">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              isActive
                ? "flex flex-col items-center justify-center bg-linear-to-br from-[#765936] to-[#b5926a] text-white rounded-full px-6 py-1 transition-all duration-300 ease-in-out"
                : "flex flex-col items-center justify-center text-[#4e453c] px-4 py-1 transition-all duration-300 ease-in-out hover:text-[#765936]"
            }
          >
            <span
              className="material-symbols-outlined"
              style={
                isActive
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {item.icon}
            </span>
            <span className="font-sans uppercase tracking-[0.1em] text-[10px] font-medium mt-1">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
