import { Typography, Stack } from '@open-void-ui/library'

export function Contact() {
  return (
    <section id="contact" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", background: 'var(--void-color-background-base)' }}>
      <Stack direction="column" gap={8} style={{ maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
        <footer className="pt-8 text-center" style={{ borderTop: '1px solid var(--void-color-border-subtle)' }}>
          <Typography as="p" size="xs" color="muted">
            Built with{' '}
            <a
              href="https://github.com/Vargland/void-ui"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--void-color-action-primary)' }}
            >
              void-ui
            </a>
            {' '}— an AI-native design system
          </Typography>
        </footer>
      </Stack>
    </section>
  )
}
