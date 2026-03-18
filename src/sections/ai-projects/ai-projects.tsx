import {
  Badge,
  Button,
  Divider,
  Stack,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Typography,
} from '@open-void-ui/library'

import { useResume } from '../../context/resume-context'
import type { Project } from '../../data/schema'

type LinkButtonProps = React.ComponentProps<typeof Button> & {
  href?: string
  rel?: string
  target?: string
}
const LinkButton = Button as React.ComponentType<LinkButtonProps>

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="pt-6 pb-2">
      <Stack direction="column" gap={3}>
        <Stack direction="column" gap={1}>
          <Typography as="h3" color="primary" size="xl" weight="semibold">
            {project.name}
          </Typography>
          <Typography as="p" color="muted" size="sm">{project.tagline}</Typography>
        </Stack>

        <Typography as="p" color="secondary" leading="relaxed" size="sm">
          {project.description}
        </Typography>

        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t}>
              <Badge size="sm" variant="subtle">{t}</Badge>
            </li>
          ))}
        </ul>

        {project.link && (
          <div>
            <LinkButton
              as="a"
              href={project.link}
              rel="noopener noreferrer"
              size="sm"
              target="_blank"
              variant="ghost"
            >
              GitHub ↗
            </LinkButton>
          </div>
        )}
      </Stack>
    </article>
  )
}

export function AiProjects() {
  const { data } = useResume()

  return (
    <section
      id="projects"
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
        <Divider label="AI Projects" />
        <Tabs defaultValue={data.projects[0].name} variant="line">
          <TabsList>
            {data.projects.map((p) => (
              <TabsTrigger key={p.name} value={p.name}>{p.name}</TabsTrigger>
            ))}
          </TabsList>
          {data.projects.map((p) => (
            <TabsContent key={p.name} value={p.name}>
              <ProjectCard project={p} />
            </TabsContent>
          ))}
        </Tabs>
      </Stack>
    </section>
  )
}
