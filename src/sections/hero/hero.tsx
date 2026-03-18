import {
  Avatar,
  Button,
  Stack,
  Typography,
} from '@open-void-ui/library'

type LinkButtonProps = React.ComponentProps<typeof Button> & {
  href?: string
  rel?: string
  target?: string
}
const LinkButton = Button as React.ComponentType<LinkButtonProps>

export function Hero() {
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
          alt="Germán Román"
          className="rounded-full"
          initials="GR"
          shape="square"
          size="xl"
        />
        <Stack
          align="center"
          direction="column"
          gap={2}
        >
          <Typography as="h1" color="primary" size="4xl" weight="bold">
            Germán Román
          </Typography>
          <Typography as="p" color="secondary" size="md">
            Senior Frontend Architect & Design Systems Lead
          </Typography>
          <Typography as="p" color="muted" size="sm">
            Remote, Argentina
          </Typography>
        </Stack>

        <Stack direction="row" gap={2}>
          <LinkButton
            as="a"
            href="https://www.linkedin.com/in/german-roman/"
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
            variant="outlined"
          >
            LinkedIn
          </LinkButton>
          <LinkButton
            as="a"
            href="https://github.com/Vargland"
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
            variant="outlined"
          >
            GitHub
          </LinkButton>
          <LinkButton
            as="a"
            href="https://www.npmjs.com/~open-void-ui"
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
