import {
  Badge,
  Divider,
  Stack,
  Typography,
} from '@open-void-ui/library'
import { memo } from 'react'

import { useResume } from '../../context/resume-context'
import type { SkillGroup } from '../../data/schema'

interface SkillGroupItemProps {
  group: SkillGroup
}

const SkillGroupItem = memo(function SkillGroupItem(props: SkillGroupItemProps) {
  const { group } = props

  return (
    <Stack direction="column" gap={2}>
      <Typography as="p" color="muted" size="xs" weight="semibold">
        {group.label.toUpperCase()}
      </Typography>
      <ul aria-label={group.label} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
        {group.items.map((skill) => (
          <li key={skill}>
            <Badge size="sm" variant="subtle">{skill}</Badge>
          </li>
        ))}
      </ul>
    </Stack>
  )
})

export function Skills() {
  const { data } = useResume()

  return (
    <section
      id="skills"
      style={{
        background: 'var(--void-color-background-base)',
        paddingBottom: '3rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <Stack
        direction="column"
        gap={8}
        style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '640px' }}
      >
        <Divider label={data.ui.sections.skills} />
        <Stack direction="column" gap={6}>
          {data.skillGroups.map((group) => (
            <SkillGroupItem key={group.label} group={group} />
          ))}
        </Stack>
      </Stack>
    </section>
  )
}
