# Architecture

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Bundler | Vite 5 |
| Design System | `@open-void-ui/library` + `@open-void-ui/tokens` |
| Styles | SCSS + CSS custom properties (no Tailwind) |
| SEO | `react-helmet-async` |
| Deployment | GitHub Pages (`/resume/` base path) |

---

## Folder Structure

```
src/
├── app.tsx                  # Root component — provider tree + layout
├── main.tsx                 # Entry point — loads theme CSS + global styles
│
├── context/
│   └── resume-context.tsx   # ResumeProvider + useResume() hook
│
├── data/
│   ├── schema.ts            # TypeScript interfaces (source of truth)
│   ├── index.ts             # Re-exports
│   └── locales/
│       ├── en.ts            # English resume data
│       └── es.ts            # Spanish resume data
│
├── theme/
│   └── planets.ts           # Planet themes — metadata, groups, localStorage helpers
│
├── components/
│   ├── locale-switcher/     # EN / ES toggle
│   ├── nav/                 # Top navigation (mobile-aware)
│   └── theme-selector/      # Planet picker grouped by category
│
├── sections/
│   ├── hero/                # Avatar, name, title, contact links
│   ├── summary/             # Professional overview
│   ├── experience/          # Work history
│   ├── ai-projects/         # AI side-projects
│   ├── skills/              # Skill groups
│   ├── education/           # Formal + self-taught
│   └── contact/             # Contact footer
│
└── styles/
    └── global.css           # Base resets, nav hover, print styles
```

---

## Data Flow

```
locales/en.ts | locales/es.ts
        ↓
  ResumeContext  ←→  localStorage ('cv-locale')
        ↓
  useResume()  →  data: ResumeData  →  all components
```

Every piece of copy — nav labels, section headings, resume content — comes from the active locale file. No hardcoded strings in components.

---

## Provider Tree

```tsx
<HelmetProvider>         // react-helmet-async — dynamic <head> tags
  <ResumeProvider>       // locale state + data
    <VoidProvider>       // design system theme
      <App />
    </VoidProvider>
  </ResumeProvider>
</HelmetProvider>
```

---

## Data Schema

Defined in `src/data/schema.ts` — TypeScript interfaces only, no runtime validation.

```
ResumeData
├── meta          (title, description, siteUrl, og image)
├── contact       (github, linkedin, location, npm)
├── summary       (paragraphs with <strong> highlights)
├── experience[]  (Role: company, title, bullets, period)
├── education[]   (FormalDegree | SelfTaught discriminated union)
├── aiProjects[]  (Project: name, description, links, tech)
├── skills[]      (SkillGroup: category + items[])
└── ui            (UIStrings: nav, sections, theme labels)
```

### Discriminated Union — Education

```ts
type EducationEntry = FormalDegree | SelfTaught

interface FormalDegree {
  type: 'formal'
  institution: string
  degree: string
  period: Period
}

interface SelfTaught {
  type: 'self-taught'
  description: string
  since: number
}
```

---

## Theming

12 planetary themes organised in 3 groups:

| Group | Themes |
|-------|--------|
| Planets | Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune |
| Moons | Moon, Europa, Io |
| Lore | Nostromo |

Theme selection is persisted in `localStorage` under the key `cv-planet`.
Each theme maps to a CSS token file provided by `@open-void-ui/tokens`.

---

## i18n

- Two locales: `en` (default) and `es`
- Locale persisted in `localStorage` under `cv-locale`
- All translatable strings live in `ResumeData.ui` (`UIStrings` interface)
- Switching locale replaces the entire `data` object — no separate translation keys

---

## SEO

`SeoHead` reads `data.meta` and injects:
- `<title>`, `<meta name="description">`
- Open Graph: `og:title`, `og:description`, `og:url`, `og:image`
- Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`

---

## Print Styles

Defined in `global.css` under `@media print`:
- Hides nav, theme selector, locale switcher
- Resets backgrounds to white / text to black
- Adds `break-inside: avoid` on experience and education entries
- Appends link URLs as visible text via `::after`
