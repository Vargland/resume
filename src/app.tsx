import { VoidProvider } from '@open-void-ui/library'
import { ThemeSelector } from './components/theme-selector'
import { Nav } from './components/nav'
import { Hero } from './sections/hero'
import { Summary } from './sections/summary'
import { Experience } from './sections/experience'
import { AiProjects } from './sections/ai-projects'
import { Skills } from './sections/skills'
import { Education } from './sections/education'
import { Contact } from './sections/contact'
import { getInitialPlanet } from './theme/planets'

export function App() {
  return (
    <VoidProvider planet={getInitialPlanet()}>
      <Nav />
      <ThemeSelector />
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
