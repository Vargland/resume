import {
  Avatar,
  Button,
  Stack,
  Typography,
} from '@open-void-ui/library'

import { useResume } from '../../context/resume-context'

type LinkButtonProps = React.ComponentProps<typeof Button> & {
  href?: string
  rel?: string
  target?: string
}
const LinkButton = Button as React.ComponentType<LinkButtonProps>

export function Hero() {
  const { data } = useResume()

  const { contact, person } = data

  return (
    <section
      id="hero"
      style={{
        alignItems: 'center',
        background: 'var(--void-color-background-base)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100svh',
        padding: '4rem 1.5rem 3rem',
      }}
    >
      <Stack
        align="center"
        direction="column"
        gap={6}
        style={{ maxWidth: '480px', textAlign: 'center', width: '100%' }}
      >
        <Avatar
          alt={person.name}
          initials="GR"
          shape="circle"
          size="xl"
          src="/avatar.png"
          style={{ boxShadow: 'var(--void-shadow-glow)' }}
        />

        <Stack align="center" direction="column" gap={2}>
          <Typography as="h1" color="primary" size="4xl" weight="bold">
            {person.name}
          </Typography>
          <Typography as="p" color="secondary" size="md">
            {person.title}
          </Typography>
          <Typography as="p" color="muted" size="sm">
            {contact.location}
          </Typography>
        </Stack>

        <Stack direction="row" gap={2}>
          <LinkButton
            as="a"
            href={contact.linkedin}
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
            variant="outlined"
          >
            LinkedIn
          </LinkButton>
          <LinkButton
            as="a"
            href={contact.github}
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
            variant="outlined"
          >
            GitHub
          </LinkButton>
          <LinkButton
            as="a"
            href={contact.npm}
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
            variant="outlined"
          >
            NPM
          </LinkButton>
        </Stack>
      </Stack>
    </section>
  )
}
