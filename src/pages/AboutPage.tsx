import { Link } from "react-router-dom";

import { ABOUT_HIGHLIGHTS, ABOUT_STORY, EXPERIENCE_HIGHLIGHT } from "@/content/site";

const workspaceImg = "/assets/about-studio.jpg";

export function AboutPage() {
  return (
    <main className="space-y-24 pb-12">
      <section className="mx-auto max-w-7xl px-8" aria-labelledby="about-heading">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="w-full space-y-8 lg:w-1/2">
            <div className="space-y-2">
              <span className="font-label text-sm font-bold uppercase tracking-widest text-secondary">
                The Story Behind The Build
              </span>
              <h1
                id="about-heading"
                className="font-headline text-5xl font-extrabold leading-tight tracking-tight md:text-6xl"
              >
                From sketchbook lines to browser layers.
              </h1>
            </div>
            <p className="max-w-xl font-body text-xl leading-relaxed text-on-surface-variant light:text-slate-600">
              {ABOUT_STORY}
            </p>
            <div className="grid gap-3">
              {ABOUT_HIGHLIGHTS.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-on-surface-variant light:border-slate-200 light:bg-white/70 light:text-slate-600"
                >
                  {highlight}
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-secondary/20 bg-secondary/10 p-5 light:border-rose-200 light:bg-rose-50">
              <p className="font-label text-xs uppercase tracking-[0.2em] text-secondary">Milestone</p>
              <h2 className="mt-2 font-headline text-2xl font-bold text-white light:text-slate-900">
                {EXPERIENCE_HIGHLIGHT.milestone}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant light:text-slate-600">
                {EXPERIENCE_HIGHLIGHT.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="rounded-xl bg-gradient-to-r from-primary to-primary-dim px-8 py-4 font-bold text-on-primary shadow-[0_20px_40px_rgba(182,160,255,0.08)] transition-all hover:translate-y-[-2px]"
              >
                Let&apos;s Build
              </Link>
              <Link
                to="/projects"
                className="glass-panel rounded-xl border border-white/10 px-8 py-4 font-bold text-white transition-all hover:bg-white/10 light:border-slate-300 light:bg-white/70 light:text-slate-900 light:hover:bg-white"
              >
                Explore Projects
              </Link>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-tertiary/20 blur-[100px]" />
            <div className="animate-float-slow will-change-transform motion-reduce:animate-none">
              <div className="glass-panel relative z-10 rotate-2 overflow-hidden rounded-xl border border-white/5 p-4 shadow-2xl transition-transform duration-500 hover:rotate-0 hover:shadow-[0_24px_48px_rgba(182,160,255,0.12)] light:border-slate-200 light:bg-white/80">
                <img
                  src={workspaceImg}
                  alt="Creative studio workspace with a desk and dramatic lighting"
                  className="aspect-square w-full rounded-lg object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-tr from-primary/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
