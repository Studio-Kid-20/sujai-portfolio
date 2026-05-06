import { footerNavLinks, footerResourceLinks } from "@/data/navigation";
import { COPYRIGHT_LINE, SITE_NAME } from "@/data/site";

import { FooterConnectList } from "./FooterConnectList";
import { FooterLinkList } from "./FooterLinkList";

const FOOTER_BLURB =
  "Imagery-first thinking, browser-built execution, and a student builder mindset focused on shipping work that feels alive.";

const policyLinks = footerResourceLinks.filter((link) => link.label === "Privacy" || link.label === "Terms");
const resourceLinks = footerResourceLinks.filter((link) => link.label === "Designs" || link.label === "Contact");

type DefaultFooterProps = {
  onScrollTop: () => void;
};

export function DefaultFooter({ onScrollTop }: DefaultFooterProps) {
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
          <p className="mb-6 text-slate-500 light:text-slate-600">{FOOTER_BLURB}</p>
        </div>

        <div className="md:col-span-1">
          <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white light:text-slate-900">Navigation</h4>
          <FooterLinkList compact links={footerNavLinks} />
        </div>

        <div className="md:col-span-1">
          <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white light:text-slate-900">Connect</h4>
          <FooterConnectList compact />
        </div>

        <div className="md:col-span-1">
          <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white light:text-slate-900">Policies</h4>
          <FooterLinkList compact links={[...policyLinks, ...resourceLinks]} />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 px-8 pt-8 md:flex-row light:border-slate-200">
        <p className="text-slate-500 light:text-slate-600">{COPYRIGHT_LINE}</p>
        <button
          type="button"
          onClick={onScrollTop}
          className="cursor-pointer text-slate-500 transition-colors hover:text-violet-400 light:text-slate-600 light:hover:text-violet-700"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
