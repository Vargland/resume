import { VoidProvider } from '@open-void-ui/library'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { LocaleSwitcher } from './components/locale-switcher'
import { Nav } from './components/nav'
import { ThemeSelector } from './components/theme-selector'
import { ResumeProvider, useResume } from './context/resume-context'
import { AiProjects } from './sections/ai-projects'
import { Contact } from './sections/contact'
import { Education } from './sections/education'
import { Experience } from './sections/experience'
import { Hero } from './sections/hero'
import { Skills } from './sections/skills'
import { Summary } from './sections/summary'
import { getInitialPlanet } from './theme/planets'

const SeoHead = () => {
  const { data } = useResume()

  const { meta, person } = data

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      {meta.siteUrl && <meta property="og:url" content={meta.siteUrl} />}
      {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="author" content={person.name} />
    </Helmet>
  )
}

const Resume = () => {
  return (
    <VoidProvider planet={getInitialPlanet()}>
      <SeoHead />
      <Nav />
      <ThemeSelector />
      <LocaleSwitcher />
      <main className="w-full">
        <Hero />
        <Summary />
        <Experience />
        <AiProjects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </VoidProvider>
  )
}

export const App = () => {
  return (
    <HelmetProvider>
      <ResumeProvider>
        <Resume />
      </ResumeProvider>
    </HelmetProvider>
  )
}
