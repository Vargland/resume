// ── Period ────────────────────────────────────────────────────────────────────

export interface Period {
  end: string  // 'Present' | 'Dec 2021' | '2017' etc.
  start: string
}

export function isOngoing(period: Period): boolean {
  return period.end === 'Present'
}

// ── Experience ────────────────────────────────────────────────────────────────

export interface Role {
  bullets: string[]
  company: string
  period: Period
  title: string
}

// ── Education ─────────────────────────────────────────────────────────────────

export interface FormalDegree {
  degree: string
  institution: string
  kind: 'formal'
  location?: string
  period: Period
}

export interface SelfTaught {
  description: string
  kind: 'self-taught'
  period: Period
  title: string
}

export type EducationEntry = FormalDegree | SelfTaught

// ── Projects ──────────────────────────────────────────────────────────────────

export interface Project {
  description: string
  link?: string
  name: string
  tagline: string
  tech: string[]
}

// ── Skills ────────────────────────────────────────────────────────────────────

export interface SkillGroup {
  items: string[]
  label: string
}

// ── UI strings ────────────────────────────────────────────────────────────────

export interface UIStrings {
  nav: {
    aiProjects: string
    education: string
    experience: string
    menu: string
    skills: string
    summary: string
    toggleMenu: string
  }
  sections: {
    aiProjects: string
    contact: string
    education: string
    experience: string
    skills: string
    summary: string
  }
  theme: {
    lore: string
    moons: string
    planets: string
    switchTo: string
    title: string
    toggle: string
  }
}

// ── Resume ────────────────────────────────────────────────────────────────────

export interface ResumeData {
  contact: {
    github: string
    linkedin: string
    location: string
    npm: string
  }
  education: EducationEntry[]
  experience: Role[]
  meta: {
    description: string
    ogImage?: string
    siteUrl?: string
    title: string
  }
  person: {
    name: string
    title: string
  }
  projects: Project[]
  skillGroups: SkillGroup[]
  summary: string[]
  ui: UIStrings
}
