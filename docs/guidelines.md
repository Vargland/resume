# Development Guidelines

Rules and conventions to follow when contributing to this project.
This file is intended as a reference for AI assistants and contributors alike.

---

## Code Style

### Imports

- Sorted alphabetically.
- When there are **3 or more** named imports from the same module, use cascade format (one per line).

```ts
// ✅ 2 imports — inline
import { useEffect, useState } from 'react'

// ✅ 3+ imports — cascade
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
```

- Import order: external packages → internal modules → relative imports.
- Blank line between import groups (enforced by ESLint).

---

### Props

- Every component must have a named interface suffixed with `Props`.
- The parameter must be `props: ComponentNameProps`.
- Destructuring happens **inside the function body**, not in the parameter.

```ts
// ✅ Correct
interface ProjectCardProps {
  project: Project
}

function ProjectCard(props: ProjectCardProps) {
  const { project } = props
  // ...
}

// ❌ Incorrect — inline destructuring
function ProjectCard({ project }: { project: Project }) {}

// ❌ Incorrect — anonymous type
function ProjectCard(props: { project: Project }) {}
```

---

### Blank Lines Between Statements

Enforced by `@stylistic/padding-line-between-statements`. Rules:

- Blank line before every `return`.
- Blank line between every `const` / `let` / `var` declaration.
- Blank line after the last `import` block.
- Blank line before and after any block statement (`if`, `for`, function body, etc.).

```ts
// ✅
const foo = 'foo'

const bar = 'bar'

if (foo) {
  doSomething()
}

return bar
```

---

## Components

- **Semantic HTML**: use `<article>`, `<section>`, `<time>`, `<ul>/<li>` where appropriate.
- **Accessibility**: `aria-label`, `aria-expanded`, `aria-controls` on interactive elements.
- **No hardcoded strings** in JSX — all copy comes from `useResume()` → `data`.
- **No inline styles** unless strictly necessary (e.g. dynamic accent colors).
- Use `React.memo` for list-item components that receive stable props.

---

## Translations

All UI text lives in `src/data/locales/en.ts` and `src/data/locales/es.ts` under the `ui` key.

```ts
// Access in any component
const { data } = useResume()
const t = data.ui
```

When adding new UI text:
1. Add the field to the `UIStrings` interface in `src/data/schema.ts`.
2. Add the English value in `src/data/locales/en.ts`.
3. Add the Spanish value in `src/data/locales/es.ts`.

---

## Data Layer

- All types are defined in `src/data/schema.ts` — TypeScript interfaces only (no Zod, no runtime validation).
- Locale files (`en.ts`, `es.ts`) must satisfy the `ResumeData` interface.
- The default locale is **English** (`en`).
- Never duplicate schema logic — reuse existing interfaces.

---

## Theming

- Themes are defined in `src/theme/planets.ts`.
- Each theme must have: `name`, `label`, `category` (`planets | moons | lore`), and `accent` color.
- The `PLANET_GROUPS` constant controls the display order in the theme selector.
- Theme CSS tokens are provided by `@open-void-ui/tokens` — do not override them manually.

---

## Styling

- **No Tailwind** — it was removed from the project.
- Use CSS custom properties from `@open-void-ui/tokens`.
- Layout utilities (responsive, flex, min-height) live in `@open-void-ui/library` utils.
- Component-scoped styles go in `.scss` files next to the component.
- Global styles live in `src/styles/global.css`.

---

## Design System

This project uses `@open-void-ui/library` — a custom design system built by the same author.

- Prefer void-ui components (`Button`, `Avatar`, `Divider`, etc.) over native HTML when available.
- Do not add utility classes that belong in the design system to the resume project directly — add them to void-ui instead.
- Valid `Button` variants: `primary`, `secondary`, `ghost` (not `filled`).

---

## Deployment

- Live URL: **https://vargland.github.io/resume**
- Hosted on GitHub Pages with base path `/resume/`.
- Deploy: `npm run deploy` (runs build first via `predeploy` hook).
- The `gh-pages` branch is managed automatically — do not edit it manually.

---

## Git & Branches

- `main` is the primary branch.
- Feature work goes on `feat/<description>` branches.
- Open a PR to `main` — do not commit directly.
- Commit messages follow conventional commits (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`).

---

## Linting

```bash
npm run lint        # check
npx eslint src --fix  # auto-fix
```

All rules must pass with zero warnings before merging.
