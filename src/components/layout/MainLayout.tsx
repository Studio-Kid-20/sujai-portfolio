import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { MobileBottomNav } from "@/components/mobile/MobileBottomNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { documentTitleForPath } from "@/content/site";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";

function pickFooterVariant(pathname: string): "home" | "default" {
  return pathname === "/" ? "home" : "default";
}

export function MainLayout() {
  const { pathname } = useLocation();
  const footerVariant = pickFooterVariant(pathname);

  useEffect(() => {
    document.title = documentTitleForPath(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-on-background light:bg-[#f4f2fb] light:text-slate-900 selection:bg-primary selection:text-on-primary">
        <BackgroundEffects />

        <SiteHeader />
        <div className="relative z-10 pb-24 pt-24 md:pb-8 md:pt-28">
          <Outlet />
        </div>
        <SiteFooter variant={footerVariant} />
        <MobileBottomNav />
      </div>
    </SmoothScroll>
  );
}
