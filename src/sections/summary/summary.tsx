import {
  Divider,
  Stack,
  Typography,
} from '@open-void-ui/library'

import { useResume } from '../../context/resume-context'

export function Summary() {
  const { data } = useResume()

  return (
    <section
      id="summary"
      style={{
        background: 'var(--void-color-background-subtle)',
        paddingBottom: '2rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <Stack
        direction="column"
        gap={8}
        style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '640px' }}
      >
        <Divider label="Summary" />
        <Stack direction="column" gap={4}>
          {data.summary.map((paragraph, i) => (
            <Typography
              key={i}
              as="p"
              color={i === 0 ? 'primary' : 'secondary'}
              leading="relaxed"
              size="md"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </Stack>
      </Stack>
    </section>
  )
}
