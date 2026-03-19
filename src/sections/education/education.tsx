import {
  Divider,
  Stack,
  Typography,
} from '@open-void-ui/library'

import { useResume } from '../../context/resume-context'
import type { EducationEntry } from '../../data/schema'

interface EducationItemProps {
  entry: EducationEntry
}

function EducationItem(props: EducationItemProps) {
  const { entry } = props

  if (entry.kind === 'formal') {
    const period = `${entry.period.start} – ${entry.period.end}`

    const subtitle = [entry.institution, entry.location].filter(Boolean).join(', ')

    return (
      <article className="break-inside-avoid">
        <Stack direction="column" gap={1}>
          <Typography as="h3" color="primary" size="lg" weight="semibold">
            {entry.degree}
          </Typography>
          <Typography as="p" color="secondary" size="sm">{subtitle}</Typography>
          <time dateTime={entry.period.start}>
            <Typography as="p" color="muted" size="sm">{period}</Typography>
          </time>
        </Stack>
      </article>
    )
  }

  const period = `${entry.period.start} – ${entry.period.end}`

  return (
    <article className="break-inside-avoid">
      <Stack direction="column" gap={1}>
        <Typography as="h3" color="primary" size="lg" weight="semibold">
          {entry.title}
        </Typography>
        <Typography as="p" color="secondary" size="sm">{entry.description}</Typography>
        <time dateTime={entry.period.start}>
          <Typography as="p" color="muted" size="sm">{period}</Typography>
        </time>
      </Stack>
    </article>
  )
}

export function Education() {
  const { data } = useResume()

  return (
    <section
      id="education"
      style={{
        background: 'var(--void-color-background-subtle)',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <Stack
        direction="column"
        gap={8}
        style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '640px' }}
      >
        <Divider label={data.ui.sections.education} />
        <Stack direction="column" gap={6}>
          {data.education.map((entry) => (
            <EducationItem
              key={entry.kind === 'formal' ? entry.degree : entry.title}
              entry={entry}
            />
          ))}
        </Stack>
      </Stack>
    </section>
  )
}
