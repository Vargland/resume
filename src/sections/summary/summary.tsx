import { Divider, Typography, Stack } from '@open-void-ui/library'

export function Summary() {
  return (
    <section id="summary" style={{ paddingBottom: "2rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: 'var(--void-color-background-subtle)' }}>
      <Stack direction="column" gap={8} style={{ maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Divider label="Summary" />
        <Stack direction="column" gap={4}>
          <Typography as="p" size="md" color="primary" leading="relaxed">
            Frontend Lead with 8+ years of experience building scalable applications and leading
            high-performing engineering teams. My background in Psychology uniquely shapes my
            approach to leadership, team dynamics, and user-centered problem-solving — rare skills
            in technical profiles that directly impact product quality and velocity.
          </Typography>
          <Typography as="p" size="md" color="secondary" leading="relaxed">
            Expert in{' '}
            <strong style={{ color: 'var(--void-color-text-accent)', fontWeight: 600 }}>Design Systems</strong>
            {', '}component architecture, and{' '}
            <strong style={{ color: 'var(--void-color-text-accent)', fontWeight: 600 }}>AI-augmented development workflows</strong>
            . I build the tools that make other engineers faster.
          </Typography>
        </Stack>
      </Stack>
    </section>
  )
}
