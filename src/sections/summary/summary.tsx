import {
  Divider,
  Stack,
  Typography,
} from '@open-void-ui/library'

import { useResume } from '../../context/resume-context'

export const Summary = () => {
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
        <Divider label={data.ui.sections.summary} />
        <Stack direction="column" gap={4}>
          {data.summary.map((paragraph, index) => (
            <Typography
              key={index}
              as="p"
              color={index === 0 ? 'primary' : 'secondary'}
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
