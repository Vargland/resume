import type { ResumeData } from '../schema'

export const en: ResumeData = {
  contact: {
    github: 'https://github.com/Vargland',
    linkedin: 'https://www.linkedin.com/in/german-roman/',
    location: 'Remote, Argentina',
    npm: 'https://www.npmjs.com/~open-void-ui',
  },
  education: [
    {
      degree: "Bachelor's Degree in Psychology",
      institution: 'UCALP',
      kind: 'formal',
      location: 'Rosario',
      period: { end: '2017', start: '2012' },
    },
    {
      description: 'Self-directed learning across frontend engineering, design systems, and AI tooling.',
      kind: 'self-taught',
      period: { end: 'Present', start: '2014' },
      title: 'Software Engineering',
    },
  ],
  experience: [
    {
      bullets: [
        'Led a cross-functional frontend team across multiple enterprise clients.',
        'Architected micro-frontend solutions using Module Federation and Vite.',
        'Defined and enforced coding standards, PR workflows, and DX tooling.',
        'Mentored engineers at mid and junior levels.',
      ],
      company: 'Making Sense LLC',
      period: { end: 'Present', start: 'Dec 2021' },
      title: 'Senior Frontend Engineer & Team Lead',
    },
    {
      bullets: [
        'Founded the product area and built the core frontend from scratch.',
        'Designed a component library and data-visualization layer for agronomic data.',
        'Shipped features used by thousands of farmers across Latin America.',
      ],
      company: 'Kilimo',
      period: { end: 'Dec 2021', start: 'Aug 2020' },
      title: 'Frontend Lead & Product Area Founder',
    },
    {
      bullets: [
        'Delivered frontend solutions for Fortune 500 clients.',
        'Worked across React, Angular, and hybrid mobile apps.',
        'Contributed to internal design systems and UI standards.',
      ],
      company: 'Globant',
      period: { end: 'Aug 2020', start: 'Aug 2017' },
      title: 'Frontend Engineer',
    },
  ],
  meta: {
    description:
      'Senior Frontend Architect & Design Systems Lead with 8+ years building scalable applications and design systems.',
    siteUrl: 'https://vargland.github.io/resume',
    title: 'German Roman — Senior Frontend Architect',
  },
  person: {
    name: 'German Roman',
    title: 'Senior Frontend Architect & Design Systems Lead',
  },
  projects: [
    {
      description:
        'A React component library published on NPM featuring 12 planetary themes, a Figma plugin, and an MCP Server for AI-assisted development with Claude and Cursor.',
      link: 'https://github.com/Vargland/void-ui',
      name: 'void-ui',
      tagline: 'AI-Native Design System',
      tech: ['React', 'TypeScript', 'Style Dictionary', 'Storybook', 'MCP', 'Figma Plugin'],
    },
    {
      description:
        'Real-time price comparison engine powered by Claude 3.5 Sonnet, integrating VTEX and Endeca APIs to surface retail intelligence.',
      name: 'price-agent',
      tagline: 'AI Retail Intelligence',
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
      items: ['MCP', 'Claude Code', 'Cursor', 'LLM Integration', 'AI-augmented workflows'],
      label: 'AI Stack',
    },
  ],
  summary: [
    'Frontend Lead with 8+ years of experience building scalable applications and leading high-performing engineering teams. My background in Psychology uniquely shapes my approach to UX and team dynamics.',
    'Deep expertise in <strong>Design Systems</strong>, component architecture, and <strong>AI-augmented development workflows</strong> — from authoring NPM libraries to shipping MCP servers that bridge design tools and AI assistants.',
  ],
  ui: {
    nav: {
      aiProjects: 'AI Projects',
      education: 'Education',
      experience: 'Experience',
      menu: 'Menu',
      skills: 'Skills',
      summary: 'Summary',
      toggleMenu: 'Toggle navigation menu',
    },
    sections: {
      aiProjects: 'AI Projects',
      contact: 'Built with void-ui — an AI-native design system',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      summary: 'Summary',
    },
    theme: {
      lore: 'Lore',
      moons: 'Moons',
      planets: 'Planets',
      switchTo: 'Switch to',
      title: 'Theme',
      toggle: 'Switch planet theme',
    },
  },
}
