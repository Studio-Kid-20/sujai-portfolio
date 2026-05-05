import { Hero } from "@/components/sections/hero/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { SkillsArsenal } from "@/components/sections/SkillsArsenal";
import { ProjectDevCard } from "@/components/sections/ProjectDevCard";
import { VisualExplorationsBento } from "@/components/sections/VisualExplorationsBento";
import { MotionShowcase } from "@/components/sections/MotionShowcase";
import { InnovationFlow } from "@/components/sections/innovation/InnovationFlow";
import { devProjects } from "@/content/projects";

export function HomePage() {
  return (
    <main className="relative min-h-[calc(100vh-6rem)]">
      <Hero />

      <section className="mx-auto max-w-7xl px-8 py-16 space-y-16">
        <Reveal>
          <div className="space-y-4 mb-16 text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold text-white md:text-4xl">Skills Arsenal</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              A curated collection of tools and technologies I use to bring ideas to life.
            </p>
          </div>
          <SkillsArsenal />
        </Reveal>

        <div className="space-y-16">
          <Reveal>
            <div className="space-y-4 text-center md:text-left">
              <h2 className="font-headline text-3xl font-bold text-white md:text-4xl">Featured Projects</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl">
                A selection of my recent work in development and design.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {devProjects.slice(0, 2).map((project, index) => (
              <Reveal key={project.title} delay={0.2 + index * 0.1}>
                <ProjectDevCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        <MotionShowcase />
        <InnovationFlow />

        <Reveal>
          <div className="space-y-4 mb-16 text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold text-white md:text-4xl">Visual Explorations</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              Where code meets creativity. A gallery of experiments and designs.
            </p>
          </div>
          <VisualExplorationsBento />
        </Reveal>
      </section>
    </main>
  );
}
