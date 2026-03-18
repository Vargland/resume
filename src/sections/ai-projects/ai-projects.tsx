import { Divider, Typography, Stack, Badge, Button, Tabs, TabsList, TabsTrigger, TabsContent } from '@open-void-ui/library'

type LinkButtonProps = React.ComponentProps<typeof Button> & {
  href?: string
  target?: string
  rel?: string
}
const LinkButton = Button as React.ComponentType<LinkButtonProps>

interface Project {
  id: string
  name: string
  tagline: string
  description: string
  tech: string[]
  link?: string
  linkLabel?: string
}

const PROJECTS: Project[] = [
  {
    id: 'void-ui',
    name: 'void-ui',
    tagline: 'AI-Native Design System',
    description:
      'Space-inspired React component library published on NPM. Built with a dynamic Design Token system supporting 12 planetary themes, a dedicated Figma plugin for design-to-code sync, and a custom MCP Server that provides full library context to AI assistants (Claude/Cursor) — enabling zero-hallucination code generation.',
    tech: ['React', 'TypeScript', 'Style Dictionary', 'Storybook', 'MCP', 'Figma Plugin'],
    link: 'https://github.com/Vargland/void-ui',
    linkLabel: 'GitHub',
  },
  {
    id: 'price-agent',
    name: 'price-agent',
    tagline: 'AI Retail Intelligence',
    description:
      'Real-time price comparison engine using Claude 3.5 Sonnet for natural language parsing of shopping lists. Integrates non-documented retail APIs (VTEX/Endeca) for live data fetching and EAN de-duplication — turning a plain text grocery list into a ranked, price-optimized result set.',
    tech: ['Claude 3.5 Sonnet', 'TypeScript', 'VTEX API', 'Endeca', 'LLM Integration'],
  },
]

export function AiProjects() {
  return (
    <section id="projects" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", background: 'var(--void-color-background-subtle)' }}>
      <Stack direction="column" gap={8} style={{ maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Divider label="AI Projects" />
        <Tabs defaultValue="void-ui" variant="line">
          <TabsList>
            {PROJECTS.map(p => (
              <TabsTrigger key={p.id} value={p.id}>{p.name}</TabsTrigger>
            ))}
          </TabsList>
          {PROJECTS.map(p => (
            <TabsContent key={p.id} value={p.id}>
              <div className="pt-6 pb-2">
                <Stack direction="column" gap={3}>
                  <Stack direction="column" gap={1}>
                    <Typography as="h3" size="xl" weight="semibold" color="primary">{p.name}</Typography>
                    <Typography as="p" size="sm" color="muted">{p.tagline}</Typography>
                  </Stack>
                  <Typography as="p" size="sm" color="secondary" leading="relaxed">{p.description}</Typography>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map(t => (
                      <Badge key={t} variant="subtle" size="sm">{t}</Badge>
                    ))}
                  </div>
                  {p.link && (
                    <div>
                      <LinkButton as="a" href={p.link} variant="ghost" size="sm" target="_blank" rel="noopener noreferrer">
                        {p.linkLabel} ↗
                      </LinkButton>
                    </div>
                  )}
                </Stack>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Stack>
    </section>
  )
}
