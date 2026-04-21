import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { MobileBottomNav } from "@/components/mobile/MobileBottomNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { documentTitleForPath } from "@/content/site";

function pickFooterVariant(pathname: string): "home" | "default" {
  return pathname === "/" ? "home" : "default";
}

export function MainLayout() {
  const { pathname } = useLocation();
  const footerVariant = pickFooterVariant(pathname);

  useEffect(() => {
    document.title = documentTitleForPath(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-on-background light:bg-[#f4f2fb] light:text-slate-900">
      <SiteHeader />
      <div className="pb-24 pt-24 md:pb-8 md:pt-28">
        <Outlet />
      </div>
      <SiteFooter variant={footerVariant} />
      <MobileBottomNav />
    </div>
  );
}
