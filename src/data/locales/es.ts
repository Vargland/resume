import type { ResumeData } from '../schema'

export const es: ResumeData = {
  contact: {
    github: 'https://github.com/Vargland',
    linkedin: 'https://www.linkedin.com/in/german-roman/',
    location: 'Remoto, Argentina',
    npm: 'https://www.npmjs.com/~open-void-ui',
  },
  education: [
    {
      degree: 'Licenciatura en Psicología',
      institution: 'UCALP',
      kind: 'formal',
      location: 'Rosario',
      period: { end: '2017', start: '2012' },
    },
    {
      description: 'Aprendizaje autodidacta en ingeniería frontend, design systems y herramientas de IA.',
      kind: 'self-taught',
      period: { end: 'Present', start: '2014' },
      title: 'Ingeniería de Software',
    },
  ],
  experience: [
    {
      bullets: [
        'Lideré un equipo frontend multifuncional para múltiples clientes enterprise.',
        'Diseñé soluciones micro-frontend con Module Federation y Vite.',
        'Definí y apliqué estándares de código, flujos de PR y herramientas de DX.',
        'Mentoricé ingenieros junior y semi-senior.',
      ],
      company: 'Making Sense LLC',
      period: { end: 'Present', start: 'Dic 2021' },
      title: 'Senior Frontend Engineer & Team Lead',
    },
    {
      bullets: [
        'Fundé el área de producto y construí el frontend desde cero.',
        'Diseñé una librería de componentes y capa de visualización para datos agronómicos.',
        'Lancé funcionalidades usadas por miles de productores en América Latina.',
      ],
      company: 'Kilimo',
      period: { end: 'Dic 2021', start: 'Ago 2020' },
      title: 'Frontend Lead & Fundador de Área de Producto',
    },
    {
      bullets: [
        'Entregué soluciones frontend para clientes Fortune 500.',
        'Trabajé con React, Angular y apps móviles híbridas.',
        'Contribuí a design systems internos y estándares de UI.',
      ],
      company: 'Globant',
      period: { end: 'Ago 2020', start: 'Ago 2017' },
      title: 'Frontend Engineer',
    },
  ],
  meta: {
    description:
      'Arquitecto Frontend Senior & Líder de Design Systems con 8+ años construyendo aplicaciones escalables y sistemas de diseño.',
    siteUrl: 'https://vargland.github.io/resume',
    title: 'German Roman — Arquitecto Frontend Senior',
  },
  person: {
    name: 'German Roman',
    title: 'Arquitecto Frontend Senior & Líder de Design Systems',
  },
  projects: [
    {
      description:
        'Librería de componentes React publicada en NPM con 12 temas planetarios, un plugin de Figma y un servidor MCP para desarrollo asistido por IA con Claude y Cursor.',
      link: 'https://github.com/Vargland/void-ui',
      name: 'void-ui',
      tagline: 'Design System AI-Native',
      tech: ['React', 'TypeScript', 'Style Dictionary', 'Storybook', 'MCP', 'Figma Plugin'],
    },
    {
      description:
        'Motor de comparación de precios en tiempo real impulsado por Claude 3.5 Sonnet, integrando APIs de VTEX y Endeca para inteligencia retail.',
      name: 'price-agent',
      tagline: 'Inteligencia Retail con IA',
      tech: ['Claude 3.5 Sonnet', 'TypeScript', 'VTEX API', 'Endeca', 'LLM Integration'],
    },
  ],
  skillGroups: [
    {
      items: ['React 18/19', 'TypeScript', 'Angular', 'Vite', 'GraphQL', 'React Query', 'Redux'],
      label: 'Frontend',
    },
    {
      items: ['Design Systems', 'CSS Custom Properties', 'SCSS', 'Tailwind CSS', 'Styled Components', 'Storybook'],
      label: 'Design Engineering',
    },
    {
      items: ['Vitest', 'Jest', 'Testing Library', 'CI/CD Pipelines'],
      label: 'Testing & QA',
    },
    {
      items: ['MCP', 'Claude Code', 'Cursor', 'LLM Integration', 'Workflows con IA'],
      label: 'AI Stack',
    },
  ],
  summary: [
    'Frontend Lead con 8+ años de experiencia construyendo aplicaciones escalables y liderando equipos de alto rendimiento. Mi formación en Psicología da forma a mi enfoque de UX y dinámicas de equipo.',
    'Expertise profundo en <strong>Design Systems</strong>, arquitectura de componentes y <strong>workflows de desarrollo aumentados con IA</strong> — desde librerías NPM hasta servidores MCP que conectan herramientas de diseño con asistentes de IA.',
  ],
}
