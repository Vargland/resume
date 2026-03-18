import type { PlanetName } from '@open-void-ui/library'

export interface PlanetMeta {
  name: PlanetName
  label: string
  accent: string
}

export const PLANETS: PlanetMeta[] = [
  { name: 'mercury',  label: 'Mercury',  accent: '#7a7670' },
  { name: 'venus',    label: 'Venus',    accent: '#c86818' },
  { name: 'earth',    label: 'Earth',    accent: '#2a825a' },
  { name: 'moon',     label: 'Moon',     accent: '#8888a0' },
  { name: 'mars',     label: 'Mars',     accent: '#a83018' },
  { name: 'jupiter',  label: 'Jupiter',  accent: '#8878b0' },
  { name: 'saturn',   label: 'Saturn',   accent: '#c8a050' },
  { name: 'europa',   label: 'Europa',   accent: '#5088a8' },
  { name: 'uranus',   label: 'Uranus',   accent: '#40b0c0' },
  { name: 'neptune',  label: 'Neptune',  accent: '#3060c8' },
  { name: 'io',       label: 'Io',       accent: '#c8a820' },
  { name: 'nostromo', label: 'Nostromo', accent: '#00ff46' },
]

const STORAGE_KEY = 'cv-planet'

export function getInitialPlanet(): PlanetName {
  const stored = localStorage.getItem(STORAGE_KEY) as PlanetName | null
  return stored ?? 'mercury'
}

export function savePlanet(planet: PlanetName): void {
  localStorage.setItem(STORAGE_KEY, planet)
}
