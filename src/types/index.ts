export type NavItem = {
  label: string;
  to: string;
  /** Match pathname prefix for active state (e.g. /projects includes work) */
  match?: "exact" | "prefix";
};

export type SocialLink = {
  label: string;
  href: string;
  icon?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  liveUrl?: string;
  repoUrl?: string;
  liveLabel?: string;
  repoLabel?: string;
};

export type DesignTile = {
  id: string;
  title: string;
  subtitle?: string;
  label: string;
  imageSrc?: string;
  imageAlt?: string;
  variant: "hero" | "wide" | "small" | "gradient";
};

export type SkillBar = {
  name: string;
  percent: number;
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  accent: "primary" | "secondary" | "tertiary";
  bars?: SkillBar[];
  tools?: { name: string; icon: string }[];
};

export type InnovationNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  side: "left" | "right";
};
