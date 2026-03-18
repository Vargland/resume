import type { PlanetName } from '@open-void-ui/library'

export type PlanetCategory = 'planets' | 'moons' | 'lore'

export interface PlanetMeta {
  accent: string
  category: PlanetCategory
  label: string
  name: PlanetName
}

export const PLANETS: PlanetMeta[] = [
  { accent: '#7a7670', category: 'planets', label: 'Mercury',  name: 'mercury'  },
  { accent: '#c86818', category: 'planets', label: 'Venus',    name: 'venus'    },
  { accent: '#2a825a', category: 'planets', label: 'Earth',    name: 'earth'    },
  { accent: '#a83018', category: 'planets', label: 'Mars',     name: 'mars'     },
  { accent: '#8878b0', category: 'planets', label: 'Jupiter',  name: 'jupiter'  },
  { accent: '#c8a050', category: 'planets', label: 'Saturn',   name: 'saturn'   },
  { accent: '#40b0c0', category: 'planets', label: 'Uranus',   name: 'uranus'   },
  { accent: '#3060c8', category: 'planets', label: 'Neptune',  name: 'neptune'  },
  { accent: '#8888a0', category: 'moons',   label: 'Moon',     name: 'moon'     },
  { accent: '#5088a8', category: 'moons',   label: 'Europa',   name: 'europa'   },
  { accent: '#c8a820', category: 'moons',   label: 'Io',       name: 'io'       },
  { accent: '#00ff46', category: 'lore',    label: 'Nostromo', name: 'nostromo' },
]

export const PLANET_GROUPS: { category: PlanetCategory; label: string }[] = [
  { category: 'planets', label: 'Planets' },
  { category: 'moons',   label: 'Moons'   },
  { category: 'lore',    label: 'Lore'    },
]

const STORAGE_KEY = 'cv-planet'

export function getInitialPlanet(): PlanetName {
  const stored = localStorage.getItem(STORAGE_KEY) as PlanetName | null
  return stored ?? 'mercury'
}

export function savePlanet(planet: PlanetName): void {
  localStorage.setItem(STORAGE_KEY, planet)
}
