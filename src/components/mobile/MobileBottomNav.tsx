import { NavLink } from "react-router-dom";

import { MaterialIcon } from "@/components/ui/MaterialIcon";

const tabs = [
  { to: "/", label: "Home", icon: "home", end: true },
  { to: "/projects", label: "Work", icon: "grid_view", end: false },
  { to: "/skills", label: "Skills", icon: "psychology", end: false },
  { to: "/contact", label: "Contact", icon: "mail", end: false },
] as const;

function tabClass(active: boolean) {
  return active
    ? "flex flex-col items-center gap-1 rounded-2xl bg-primary/20 px-4 py-2 text-primary light:bg-violet-100 light:text-violet-800"
    : "flex flex-col items-center gap-1 px-4 py-2 text-on-surface-variant transition-colors hover:text-primary light:text-slate-600 light:hover:text-violet-700";
}

export function MobileBottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0c0c21]/95 pb-3 pt-2 backdrop-blur-xl md:hidden light:border-slate-200 light:bg-white/95"
      aria-label="Mobile primary"
    >
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 pb-2">
        {tabs.map((tab) => (
          <NavLink key={tab.to} to={tab.to} end={tab.end}>
            {({ isActive }) => (
              <span className={tabClass(isActive)}>
                <MaterialIcon name={tab.icon} className="text-[22px]" />
                <span className="font-label text-[10px] font-bold uppercase tracking-wide">{tab.label}</span>
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
