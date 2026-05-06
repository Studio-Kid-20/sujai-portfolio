export const SITE_NAME = "Sujai";
export const SITE_NAV_BRAND = "SUJAI";
export const SITE_TAGLINE = "Vision Into Vector";
export const COPYRIGHT_LINE = "© 2026 Sujai. Built with React, TypeScript, and Tailwind.";

const PAGE_TITLE_BY_PATH: Record<string, string> = {
  "/": "Sujai | Vision Into Vector",
  "/about":
    "I don't believe in 'impossible' tasks. My journey started with a pencil and paper, drawing imagery from my mind. Now, I use the browser as my canvas. Currently navigating the 11th-grade CBSE curriculum while building my own brand, I focus on turning ambitious ideas into interfaces that feel bold, polished, and alive.",
  "/projects":
    "From first deployments to lab experiments, each build is part of learning how to turn imagination into working software.",
  "/designs":
    "A visual lab for interface moods, poster energy, motion studies, and imagery-driven layout systems.",
};

export function resolveDocumentTitle(pathname: string): string {
  const exact = PAGE_TITLE_BY_PATH[pathname];
  if (exact) return exact;

  const segment = pathname.replace(/^\//, "").split("/")[0];
  if (!segment) return PAGE_TITLE_BY_PATH["/"];

  const label =
    segment === "skills"
      ? "Skills"
      : segment === "contact"
        ? "Contact"
        : segment === "privacy"
          ? "Privacy Policy"
          : segment === "terms"
            ? "Terms of Service"
            : segment.charAt(0).toUpperCase() + segment.slice(1);

  return `${SITE_NAME} | ${label}`;
}
