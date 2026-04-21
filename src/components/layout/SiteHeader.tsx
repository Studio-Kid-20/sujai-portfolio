import { NavLink } from "react-router-dom";

import { primaryNav } from "@/content/site";
import { GradientLogo } from "@/components/ui/GradientLogo";

function navClassName(isActive: boolean) {
  return isActive
    ? "border-b-2 border-violet-400 pb-1 text-white"
    : "text-slate-400 transition-colors hover:text-violet-200";
}

export function SiteHeader() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-indigo-950/40 shadow-[0px_20px_40px_rgba(182,160,255,0.08)] backdrop-blur-xl light:border-slate-200/80 light:bg-white/90 light:shadow-slate-200/50">
      <nav
        className="flex w-full items-center justify-between px-6 py-4 font-headline tracking-tight md:px-8"
        aria-label="Primary"
      >
        <GradientLogo />
        <div className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.match === "exact"}
              className={({ isActive }) => navClassName(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <NavLink
            to="/contact"
            className="hidden rounded-xl bg-gradient-to-r from-primary to-primary-dim px-5 py-2 font-bold text-on-primary shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95 sm:inline-block light:shadow-none"
          >
            Let&apos;s Build
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
