import { Divider, Typography, Stack } from '@open-void-ui/library'

export function Education() {
  return (
    <section id="education" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", background: 'var(--void-color-background-subtle)' }}>
      <Stack direction="column" gap={8} style={{ maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Divider label="Education" />
        <Stack direction="column" gap={6}>
          <Stack direction="column" gap={1}>
            <Typography as="h3" size="lg" weight="semibold" color="primary">
              Bachelor's Degree in Psychology
            </Typography>
            <Typography as="p" size="sm" color="secondary">UCALP, Rosario</Typography>
          </Stack>
          <Stack direction="column" gap={1}>
            <Typography as="h3" size="lg" weight="semibold" color="primary">
              Software Engineering
            </Typography>
            <Typography as="p" size="sm" color="secondary">Self-taught · 2014 – Present</Typography>
          </Stack>
        </Stack>
      </Stack>
    </section>
  )
}
