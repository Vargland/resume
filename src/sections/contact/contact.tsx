import { Stack, Typography } from '@open-void-ui/library'

import { useResume } from '../../context/resume-context'

export const Contact = () => {
  const { data } = useResume()

  return (
    <section
      id="contact"
      style={{
        background: 'var(--void-color-background-base)',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <Stack
        direction="column"
        gap={8}
        style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '640px' }}
      >
        <footer style={{
          borderTop: '1px solid var(--void-color-border-subtle)',
          paddingTop: '2rem',
          textAlign: 'center',
        }}>
          <Typography as="p" color="muted" size="xs">
            {data.ui.sections.contact}
          </Typography>
        </footer>
      </Stack>
    </section>
  )
}
