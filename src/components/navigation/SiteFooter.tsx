import { DefaultFooter } from "@/components/navigation/footer/DefaultFooter";
import { HomeFooter } from "@/components/navigation/footer/HomeFooter";

type SiteFooterProps = {
  variant?: "home" | "default";
};

export function SiteFooter({ variant = "default" }: SiteFooterProps) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (variant === "home") {
    return <HomeFooter onScrollTop={scrollTop} />;
  }

  return <DefaultFooter onScrollTop={scrollTop} />;
}
