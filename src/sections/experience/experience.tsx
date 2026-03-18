import { Divider, Typography, Stack, Badge } from '@open-void-ui/library'

interface Role {
  title: string
  company: string
  period: string
  bullets: string[]
}

const ROLES: Role[] = [
  {
    title: 'Senior Frontend Engineer & Team Lead',
    company: 'Making Sense LLC',
    period: 'Dec 2021 – Present · Remote',
    bullets: [
      'Leading a frontend team of 3 engineers, setting technical direction, and enforcing high-quality coding standards.',
      'Architected a custom component library from scratch, successfully removing dependencies on external UI libraries (Material, Bootstrap) and significantly reducing bundle size.',
      'Collaborating with design and product teams to define frontend architecture and product strategy.',
      'Introduced rigorous unit testing practices (Jest/Vitest) and standardized development workflows.',
    ],
  },
  {
    title: 'Frontend Lead & Product Area Founder',
    company: 'Kilimo',
    period: 'Aug 2020 – Dec 2021 · Remote',
    bullets: [
      'Founded the product area from zero, defining frontend architecture and cross-team workflows.',
      'Reduced application load time by 70% through advanced lazy loading and performance optimization strategies.',
      'Implemented user metrics tooling to drive data-informed product decisions.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Globant',
    period: 'Aug 2017 – Aug 2020 · Argentina',
    bullets: [
      'Developed scalable, high-performance applications for enterprise clients including Rockwell Automation and McAfee.',
      'Standardized team practices using BEM methodology and automated testing.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" style={{ paddingBottom: "2rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: 'var(--void-color-background-base)' }}>
      <Stack direction="column" gap={10} style={{ maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Divider label="Experience" />
        <Stack direction="column" gap={10}>
          {ROLES.map((role, i) => (
            <Stack key={i} direction="column" gap={4}>
              <Stack direction="column" gap={1}>
                <Stack direction="row" align="center" gap={2} className="flex-wrap">
                  <Typography as="h3" size="lg" weight="semibold" color="primary">
                    {role.title}
                  </Typography>
                  <Badge variant="subtle" size="sm">{role.company}</Badge>
                </Stack>
                <Typography as="p" size="sm" color="muted">{role.period}</Typography>
              </Stack>
              <ul className="flex flex-col gap-2">
                {role.bullets.map((b, j) => (
                  <li key={j} className="flex items-baseline gap-2">
                    <Typography className="shrink-0" style={{ transform: 'translateY(2px)' }}>
                      <Badge dot tone="success" size="sm" children={undefined} />
                    </Typography>
                    <Typography as="p" size="sm" color="secondary" leading="relaxed">{b}</Typography>
                  </li>
                ))}
              </ul>
              {i < ROLES.length - 1 && <Divider variant="dashed" />}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </section>
  )
}
