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
      className="min-h-svh flex flex-col items-center justify-center px-6 pt-16 pb-12"
      style={{ background: 'var(--void-color-background-base)' }}
    >
      <Stack
        align="center"
        className="w-full text-center"
        direction="column"
        gap={6}
        style={{ maxWidth: '480px' }}
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
