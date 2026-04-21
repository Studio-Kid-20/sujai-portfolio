import { PAGE_TAGLINE_BY_PATH } from "@/content/site";
import { devProjects } from "@/content/projects";
import { ProjectDevCard } from "@/components/sections/ProjectDevCard";
import { VisualExplorationsBento } from "@/components/sections/VisualExplorationsBento";

export function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-12">
      <section className="mb-24" aria-labelledby="projects-hero-heading">
        <span className="mb-4 block font-label text-sm font-bold uppercase tracking-[0.2em] text-secondary">
          Build Archive
        </span>
        <h1
          id="projects-hero-heading"
          className="mb-6 bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text font-headline text-5xl font-extrabold tracking-tighter text-transparent md:text-7xl"
        >
          Builds & Milestones.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant light:text-slate-600">
          {PAGE_TAGLINE_BY_PATH["/projects"]}
        </p>
      </section>
      <section className="mb-32" aria-labelledby="dev-works-heading">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 id="dev-works-heading" className="font-headline text-3xl font-bold text-white light:text-slate-900">
              Selected Work
            </h2>
            <div className="mt-2 h-1 w-12 bg-primary" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {devProjects.map((p) => (
            <ProjectDevCard key={p.id} project={p} />
          ))}
        </div>
      </section>
      <VisualExplorationsBento />
    </main>
  );
}
