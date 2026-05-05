import { PAGE_TAGLINE_BY_PATH, DESIGNS_HEADING, DESIGNS_TAGLINE } from "@/content/site";
import { designTiles } from "@/content/projects";

export function DesignsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-12">
      <section className="mb-12" aria-labelledby="designs-heading">
        <span className="mb-4 block font-label text-sm font-bold uppercase tracking-[0.2em] text-tertiary">
          {DESIGNS_TAGLINE}
        </span>
        <h1
          id="designs-heading"
          className="mb-4 font-headline text-4xl font-extrabold text-white md:text-5xl light:text-slate-900"
        >
          {DESIGNS_HEADING}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant light:text-slate-600">
          {PAGE_TAGLINE_BY_PATH["/designs"]}
        </p>
      </section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {designTiles.map((tile) => (
          <article
            key={tile.id}
            className="glass-card overflow-hidden rounded-2xl border border-white/5 light:border-slate-200"
          >
            {tile.imageSrc ? (
              <div className="relative h-48 overflow-hidden">
                <img src={tile.imageSrc} alt={tile.imageAlt ?? tile.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent light:from-[#f4f2fb]/90" />
              </div>
            ) : null}
            <div className="p-6">
              <p className="mb-1 font-label text-[10px] font-bold uppercase tracking-widest text-secondary">
                {tile.label || "Exploration"}
              </p>
              <h2 className="font-headline text-xl font-bold text-white light:text-slate-900">{tile.title}</h2>
              {tile.subtitle ? (
                <p className="mt-2 text-sm text-on-surface-variant light:text-slate-600">{tile.subtitle}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
