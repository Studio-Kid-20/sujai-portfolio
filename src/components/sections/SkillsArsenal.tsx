import type { SkillCategory } from "@/content/types";
import { skillCategories } from "@/content/projects";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const accentBar: Record<SkillCategory["accent"], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
};

const accentBorder: Record<SkillCategory["accent"], string> = {
  primary: "hover:border-primary/30",
  secondary: "hover:border-secondary/30",
  tertiary: "hover:border-tertiary/30",
};

const accentBadge: Record<SkillCategory["accent"], string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  tertiary: "bg-tertiary/10 text-tertiary",
};

export function SkillsArsenal() {
  return (
    <section className="mx-auto max-w-7xl px-8" aria-labelledby="skills-heading">
      <div className="mb-16 space-y-4 text-center">
        <span className="font-label text-sm font-bold uppercase tracking-[0.2em] text-tertiary">
          Skill Stack
        </span>
        <h2 id="skills-heading" className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
          Creative + Code Toolkit
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-tertiary" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {skillCategories.map((cat) => (
          <div key={cat.id} className="space-y-6">
            <div className="flex items-center gap-3">
              <MaterialIcon
                name={cat.icon}
                className={`text-3xl ${
                  cat.accent === "primary"
                    ? "text-primary"
                    : cat.accent === "secondary"
                      ? "text-secondary"
                      : "text-tertiary"
                }`}
              />
              <h3 className="font-headline text-2xl font-bold">{cat.title}</h3>
            </div>
            {cat.bars && (
              <div className="space-y-4">
                {cat.bars.map((bar) => (
                  <div
                    key={bar.name}
                    className={`glass-panel rounded-xl border border-white/5 p-6 transition-all ${accentBorder[cat.accent]} group`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-body font-semibold">{bar.name}</span>
                      <span
                        className={`rounded px-2 py-1 font-label text-xs font-bold ${accentBadge[cat.accent]}`}
                      >
                        {bar.percent}%
                      </span>
                    </div>
                    <ProgressBar percent={bar.percent} colorClass={accentBar[cat.accent]} />
                  </div>
                ))}
              </div>
            )}
            {cat.tools && (
              <div className="grid grid-cols-2 gap-4">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="glass-panel flex flex-col items-center justify-center rounded-xl border border-white/5 p-6 text-center transition-all hover:bg-tertiary/5 group"
                  >
                    <MaterialIcon
                      name={tool.icon}
                      className="mb-4 text-4xl text-on-surface-variant transition-colors group-hover:text-tertiary"
                    />
                    <span className="font-label text-sm font-bold uppercase tracking-wider">{tool.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
