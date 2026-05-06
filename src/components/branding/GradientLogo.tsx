import { Link } from "react-router-dom";

import { SITE_NAV_BRAND } from "@/data/site";

type GradientLogoProps = {
  className?: string;
};

export function GradientLogo({ className = "" }: GradientLogoProps) {
  return (
    <Link
      to="/"
      aria-label={`${SITE_NAV_BRAND}, home`}
      className={`group flex items-center gap-2.5 font-headline uppercase ${className}`.trim()}
    >
      <img
        src="/favicon.svg"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-[10px] shadow-[0_6px_16px_rgba(244,114,182,0.25)] ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
        decoding="async"
      />
      <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#b6a0ff] to-[#ff6c95] bg-clip-text text-transparent">
        {SITE_NAV_BRAND}
      </span>
    </Link>
  );
}
