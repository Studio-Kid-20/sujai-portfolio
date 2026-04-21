import { Link } from "react-router-dom";

import {
  FOOTER_BLURB,
  copyrightLine,
  contactMeta,
  footerNavLinks,
  footerResourceLinks,
  SITE_NAME,
  SITE_TAGLINE,
  socialLinks,
} from "@/content/site";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

type SiteFooterProps = {
  variant?: "home" | "default";
};

export function SiteFooter({ variant = "default" }: SiteFooterProps) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (variant === "home") {
    return (
      <footer className="relative w-full overflow-hidden border-t border-white/5 bg-[#0c0c21] pb-10 pt-20 light:border-slate-200 light:bg-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#111128] light:to-slate-200/80" />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-4">
          <div className="space-y-6 md:col-span-1">
            <div className="font-headline text-xl font-black text-white light:text-slate-900">
              {SITE_TAGLINE}
            </div>
            <p className="font-body text-sm leading-relaxed text-slate-500 light:text-slate-600">
              {FOOTER_BLURB}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-tertiary/20 bg-tertiary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-tertiary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
              Open for collaborations
            </div>
          </div>
          <div className="space-y-4 md:col-span-1">
            <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-white light:text-slate-900">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2">
              {footerNavLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="font-body text-sm text-slate-500 transition-colors hover:text-cyan-400 light:hover:text-violet-600"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 md:col-span-1">
            <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-white light:text-slate-900">
              Connect
            </h4>
            <div className="flex flex-col space-y-2">
              <a
                href={`mailto:${contactMeta.email}`}
                className="group flex items-center gap-2 font-body text-sm text-slate-500 transition-colors hover:text-cyan-400 light:hover:text-violet-600"
              >
                <MaterialIcon name="alternate_email" className="text-lg transition-transform group-hover:scale-110" />
                {contactMeta.email}
              </a>
              {socialLinks.slice(0, 3).map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="group flex items-center gap-2 font-body text-sm text-slate-500 transition-colors hover:text-cyan-400 light:hover:text-violet-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MaterialIcon name={s.icon ?? "link"} className="text-lg transition-transform group-hover:scale-110" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4 md:col-span-1">
            <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-white light:text-slate-900">
              Legal
            </h4>
            <div className="flex flex-col space-y-2">
              <Link
                to="/privacy"
                className="font-body text-sm text-slate-500 transition-colors hover:text-cyan-400 light:hover:text-violet-600"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-body text-sm text-slate-500 transition-colors hover:text-cyan-400 light:hover:text-violet-600"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 px-8 pt-8 md:flex-row light:border-slate-200">
          <p className="font-body text-sm tracking-wide text-slate-500 light:text-slate-600">
            {copyrightLine}
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="text-sm text-violet-400 transition-colors hover:text-cyan-400 light:text-violet-700"
          >
            Back to Top
          </button>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative w-full border-t border-white/5 bg-[#0c0c21] pb-10 pt-20 font-body text-sm tracking-wide light:border-slate-200 light:bg-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#111128] light:to-slate-200/80" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="mb-6 font-headline text-xl font-black text-white light:text-slate-900">{SITE_NAME}</div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-violet-400 light:border-violet-200 light:bg-violet-50 light:text-violet-800">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Open for collaborations
          </div>
          <p className="mb-6 text-slate-500 light:text-slate-600">
            {FOOTER_BLURB}
          </p>
        </div>
        <div className="md:col-span-1">
          <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white light:text-slate-900">
            Navigation
          </h4>
          <ul className="space-y-4">
            {footerNavLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-slate-500 transition-colors hover:text-cyan-400 light:hover:text-violet-600"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white light:text-slate-900">Connect</h4>
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${contactMeta.email}`}
                className="flex translate-y-[-2px] items-center gap-2 text-slate-500 transition-transform hover:text-cyan-400 light:hover:text-violet-600"
              >
                {contactMeta.email}
              </a>
            </li>
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="flex translate-y-[-2px] items-center gap-2 text-slate-500 transition-transform hover:text-cyan-400 light:hover:text-violet-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white light:text-slate-900">
            Policies
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                to="/privacy"
                className="text-slate-500 transition-colors hover:text-cyan-400 light:hover:text-violet-600"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-slate-500 transition-colors hover:text-cyan-400 light:hover:text-violet-600"
              >
                Terms
              </Link>
            </li>
            {footerResourceLinks
              .filter((x) => x.label === "Designs" || x.label === "Contact")
              .map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-slate-500 transition-colors hover:text-cyan-400 light:hover:text-violet-600"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 px-8 pt-8 md:flex-row light:border-slate-200">
        <p className="text-slate-500 light:text-slate-600">{copyrightLine}</p>
        <button
          type="button"
          onClick={scrollTop}
          className="cursor-pointer text-slate-500 transition-colors hover:text-violet-400 light:text-slate-600 light:hover:text-violet-700"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
