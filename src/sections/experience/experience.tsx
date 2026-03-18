import {
  Badge,
  Divider,
  Stack,
  Typography,
} from '@open-void-ui/library'
import { memo } from 'react'

import { useResume } from '../../context/resume-context'
import type { Role } from '../../data/schema'

const RoleItem = memo(function RoleItem({ role, isLast }: { isLast: boolean; role: Role }) {
  const period = `${role.period.start} – ${role.period.end}`

  return (
    <article style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
      <Stack direction="column" gap={4}>
        <Stack direction="column" gap={1}>
          <Stack align="center" direction="row" gap={2} style={{ flexWrap: 'wrap' }}>
            <Typography as="h3" color="primary" size="lg" weight="semibold">
              {role.title}
            </Typography>
            <Badge size="sm" variant="subtle">{role.company}</Badge>
          </Stack>
          <time style={{ display: 'block' }} dateTime={role.period.start}>
            <Typography as="p" color="muted" size="sm">{period}</Typography>
          </time>
        </Stack>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {role.bullets.map((bullet) => (
            <li key={bullet} style={{ alignItems: 'baseline', display: 'flex', gap: '0.5rem' }}>
              <span style={{ flexShrink: 0, transform: 'translateY(2px)' }}>
                <Badge dot size="sm" tone="success">{undefined}</Badge>
              </span>
              <Typography as="p" color="secondary" leading="relaxed" size="sm">
                {bullet}
              </Typography>
            </li>
          ))}
        </ul>

        {!isLast && <Divider variant="dashed" />}
      </Stack>
    </article>
  )
})

export function Experience() {
  const { data } = useResume()

  return (
    <section
      id="experience"
      style={{
        background: 'var(--void-color-background-base)',
        paddingBottom: '2rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <Stack
        direction="column"
        gap={10}
        style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '640px' }}
      >
        <Divider label="Experience" />
        <Stack direction="column" gap={10}>
          {data.experience.map((role, i) => (
            <RoleItem
              key={`${role.company}-${role.period.start}`}
              isLast={i === data.experience.length - 1}
              role={role}
            />
          ))}
        </Stack>
      </Stack>
    </section>
  )
}
