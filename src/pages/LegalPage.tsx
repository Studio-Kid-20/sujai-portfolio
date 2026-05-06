import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-16 pt-4">
      <h1 className="title-gradient mb-6 font-headline text-4xl font-bold">{title}</h1>
      <div className="space-y-4 font-body leading-relaxed text-on-surface-variant light:text-slate-600">{children}</div>
    </main>
  );
}
