import { designTiles } from "@/content/projects";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function VisualExplorationsBento() {
  const fintech = designTiles.find((t) => t.id === "concept-frames")!;
  const blueprints = designTiles.find((t) => t.id === "marketplace-flows")!;
  const brand = designTiles.find((t) => t.id === "poster-energy")!;
  const motion = designTiles.find((t) => t.id === "motion-drafts")!;

  return (
    <section className="mb-32" aria-labelledby="visual-heading">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 id="visual-heading" className="font-headline text-3xl font-bold text-white light:text-slate-900">
            Design Lab
          </h2>
          <div className="mt-2 h-1 w-12 bg-secondary" />
        </div>
      </div>
      <div className="grid min-h-0 grid-cols-1 gap-4 md:min-h-[420px] md:grid-cols-4 md:grid-rows-2 md:gap-4">
        <div className="glass-card group relative min-h-[280px] overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 md:min-h-0">
          {fintech.imageSrc && (
            <img
              src={fintech.imageSrc}
              alt={fintech.imageAlt ?? ""}
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 light:from-[#f4f2fb]" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="mb-2 block font-label text-xs font-bold uppercase tracking-widest text-secondary">
              {fintech.label}
            </span>
            <h3 className="mb-3 font-headline text-2xl font-bold text-white md:text-3xl light:text-slate-900">
              {fintech.title}
            </h3>
            <p className="mb-4 max-w-md text-xs leading-relaxed text-on-surface-variant md:text-sm light:text-slate-600">
              {fintech.subtitle}
            </p>
            <p className="flex items-center gap-2 text-sm font-bold text-secondary">
              Imagery-first interface study <MaterialIcon name="arrow_forward" />
            </p>
          </div>
        </div>
        <div className="glass-card group relative min-h-[200px] overflow-hidden rounded-2xl md:col-span-2 md:row-span-1 md:min-h-0">
          {blueprints.imageSrc && (
            <img
              src={blueprints.imageSrc}
              alt={blueprints.imageAlt ?? ""}
              className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent light:from-[#f4f2fb]/90" />
          <div className="absolute inset-0 flex flex-col justify-center p-5 md:max-w-[85%] md:p-7">
            <span className="mb-1 block font-label text-[10px] font-bold uppercase tracking-widest text-tertiary">
              {blueprints.label}
            </span>
            <h3 className="font-headline text-xl font-bold text-white light:text-slate-900">{blueprints.title}</h3>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-on-surface-variant md:text-sm light:text-slate-600">
              {blueprints.subtitle}
            </p>
          </div>
        </div>
        <div className="glass-card group relative min-h-[200px] overflow-hidden rounded-2xl md:col-span-1 md:row-span-1 md:min-h-0">
          {brand.imageSrc && (
            <img
              src={brand.imageSrc}
              alt={brand.imageAlt ?? ""}
              className="h-full w-full object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-80"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 text-center">
              <h3 className="font-headline text-lg font-bold text-white light:text-slate-900">{brand.title}</h3>
              <p className="mt-1 text-[10px] text-on-surface-variant light:text-slate-600">{brand.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="glass-card group relative min-h-[200px] overflow-hidden rounded-2xl md:col-span-1 md:row-span-1 md:min-h-0">
          {motion.imageSrc && (
            <img
              src={motion.imageSrc}
              alt={motion.imageAlt ?? ""}
              className="h-full w-full object-cover opacity-55 transition-opacity duration-500 group-hover:opacity-80"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent light:from-[#f4f2fb]/90" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
            <MaterialIcon name="motion_mode" className="mb-2 text-3xl text-white drop-shadow-md light:text-slate-900" />
            <h3 className="font-headline text-base font-bold text-white md:text-lg light:text-slate-900">{motion.title}</h3>
            <p className="mt-1 text-[10px] text-on-surface-variant light:text-slate-600">{motion.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
