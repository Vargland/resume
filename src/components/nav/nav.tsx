import * as React from 'react'

import { Button, Stack, Typography, usePlanet } from '@open-void-ui/library'

import { useResume } from '../../context/resume-context'
import { PLANETS } from '../../theme/planets'

export function Nav() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const [activeHref, setActiveHref] = React.useState('')

  const { data } = useResume()

  const { planet } = usePlanet()

  const { nav } = data.ui

  const accent = PLANETS.find(p => p.name === planet)?.accent ?? 'var(--void-color-action-primary)'

  const NAV_LINKS = [
    { href: '#summary',    label: nav.summary    },
    { href: '#experience', label: nav.experience },
    { href: '#projects',   label: nav.aiProjects },
    { href: '#skills',     label: nav.skills     },
    { href: '#education',  label: nav.education  },
  ]

  const observerRef = React.useRef<IntersectionObserver | null>(null)

  React.useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1))

    const candidates = new Map<string, number>()

    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            candidates.set(entry.target.id, entry.intersectionRatio)
          } else {
            candidates.delete(entry.target.id)
          }
        })

        if (candidates.size === 0) return

        const top = [...candidates.entries()].sort((a, b) => b[1] - a[1])[0][0]

        setActiveHref(`#${top}`)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.1, 0.5, 1] },
    )

    ids.forEach(id => {
      const el = document.getElementById(id)

      if (el) observerRef.current!.observe(el)
    })

    return () => observerRef.current?.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav
      id="main-nav"
      style={{
        background: 'var(--void-color-background-base)',
        borderBottom: '1px solid var(--void-color-border-subtle)',
        left: 0,
        padding: '18px 24px 14px',
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Desktop */}
      <Stack
        as="ul"
        direction="row"
        gap={8}
        justify="center"
        className="void-sm:flex"
        style={{ display: 'none', listStyle: 'none' }}
      >
        {NAV_LINKS.map(({ href, label }) => {
          const isActive = activeHref === href

          return (
            <li key={href} style={{ position: 'relative' }}>
              <Typography
                as="a"
                {...{ href } as React.AnchorHTMLAttributes<HTMLAnchorElement>}
                size="xs"
                color={isActive ? 'primary' : 'secondary'}
                weight={isActive ? 'semibold' : 'regular'}
                style={{
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </Typography>
              {isActive && (
                <span style={{
                  background: accent,
                  borderRadius: '2px',
                  bottom: '-18px',
                  height: '2px',
                  left: '50%',
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  width: '100%',
                }} />
              )}
            </li>
          )
        })}
      </Stack>

      {/* Mobile header */}
      <Stack
        direction="row"
        align="center"
        justify="space-between"
        className="void-sm:hidden"
      >
        <Typography
          as="span"
          size="xs"
          color="secondary"
          style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          {nav.menu}
        </Typography>

        <Button
          variant="ghost"
          size="sm"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={nav.toggleMenu}
          onClick={() => setMenuOpen(o => !o)}
          style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                background: 'var(--void-color-text-secondary)',
                display: 'block',
                height: '1.5px',
                opacity: menuOpen && i === 1 ? 0 : 1,
                transform: menuOpen
                  ? i === 0 ? 'translateY(5.5px) rotate(45deg)'
                  : i === 2 ? 'translateY(-5.5px) rotate(-45deg)'
                  : 'none'
                  : 'none',
                transition: 'transform 0.2s, opacity 0.2s',
                width: '18px',
              }}
            />
          ))}
        </Button>
      </Stack>

      {/* Mobile dropdown */}
      {menuOpen && (
        <Stack
          as="ul"
          id="mobile-menu"
          direction="column"
          gap={4}
          className="void-sm:hidden"
          style={{ listStyle: 'none', paddingBottom: '4px', paddingTop: '16px' }}
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = activeHref === href

            return (
              <li key={href}>
                <Typography
                  as="a"
                  {...{ href } as React.AnchorHTMLAttributes<HTMLAnchorElement>}
                  size="xs"
                  color={isActive ? 'primary' : 'secondary'}
                  weight={isActive ? 'semibold' : 'regular'}
                  style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Typography>
              </li>
            )
          })}
        </Stack>
      )}
    </nav>
  )
}
