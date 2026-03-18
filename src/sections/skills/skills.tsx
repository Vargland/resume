import { Divider, Typography, Badge, Stack } from '@open-void-ui/library'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    skills: ['React 18/19', 'TypeScript', 'Angular', 'Vite', 'GraphQL', 'React Query', 'Redux'],
  },
  {
    category: 'Design Engineering',
    skills: ['Design Systems', 'CSS Custom Properties', 'SCSS', 'Tailwind CSS', 'Styled Components', 'Storybook'],
  },
  {
    category: 'Testing & QA',
    skills: ['Vitest', 'Jest', 'Testing Library', 'CI/CD Pipelines'],
  },
  {
    category: 'AI Stack',
    skills: ['MCP (Model Context Protocol)', 'Claude Code', 'Cursor', 'LLM Integration', 'AI-augmented workflows'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6" style={{ paddingBottom: "3rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: 'var(--void-color-background-base)' }}>
      <Stack direction="column" gap={8} style={{ maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Divider label="Skills" />
        <Stack direction="column" gap={6}>
          {SKILL_GROUPS.map(group => (
            <Stack key={group.category} direction="column" gap={2}>
              <Typography as="p" size="xs" weight="semibold" color="muted">
                {group.category.toUpperCase()}
              </Typography>
              <Stack className="flex flex-wrap gap-1.5" gap={2} direction="row" style={{  flexBasis: 'wrap' }}> 
                {group.skills.map(skill => (
                  <Badge key={skill} variant="subtle" size="sm">{skill}</Badge>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </section>
  )
}
