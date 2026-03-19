import React, { useEffect, useState } from 'react'

import { Button, Divider, Stack, Typography, usePlanet } from '@open-void-ui/library'

import { useResume } from '../../context/resume-context'
import { PLANET_GROUPS, PLANETS, savePlanet } from '../../theme/planets'

const planetStyles = `
  @keyframes orbit {
    from { transform: rotate(0deg) translateX(6px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(6px) rotate(-360deg); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes theme-pulse {
    0%   { box-shadow: 0 0 0 0 var(--theme-pulse-color, rgba(139,92,246,0.7)); transform: scale(1); }
    50%  { box-shadow: 0 0 0 8px transparent; transform: scale(1.08); }
    100% { box-shadow: 0 0 0 0 transparent; transform: scale(1); }
  }
  @keyframes arrow-bounce {
    0%, 100% { transform: translateX(0); }
    50%       { transform: translateX(5px); }
  }
  @keyframes arrow-in {
    from { opacity: 0; transform: translateX(-8px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes arrow-out {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
  .planet-moon {
    animation: orbit 3s linear infinite;
  }
  .planet-ring {
    animation: spin 8s linear infinite;
  }
  .theme-btn-pulse {
    animation: theme-pulse 1s ease-in-out 3;
  }
  .theme-arrow {
    animation: arrow-in 0.4s ease forwards, arrow-bounce 0.7s ease-in-out 0.4s 4;
  }
  .theme-arrow-out {
    animation: arrow-out 0.4s ease forwards;
  }
`

interface PlanetIconProps {
  accent?: string
}

function PlanetIcon(props: PlanetIconProps) {
  const { accent } = props

  const color = accent ?? 'var(--void-color-action-primary)'

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse
        cx="9" cy="9" rx="8" ry="3"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.4"
        className="planet-ring"
        style={{ transformOrigin: '9px 9px' }}
      />
      <circle cx="9" cy="9" r="4.5" fill={color} opacity="0.9" />
      <circle cx="7.5" cy="7.5" r="1.2" fill="white" opacity="0.25" />
      <circle cx="9" cy="9" r="1.2" fill="white" opacity="0.7" className="planet-moon" style={{ transformOrigin: '9px 9px' }} />
    </svg>
  )
}

export function ThemeSelector() {
  const { planet, setPlanet } = usePlanet()

  const { data } = useResume()

  const t = data.ui.theme

  const [open, setOpen] = useState(false)

  const [pulsing, setPulsing] = useState(true)

  const [arrowState, setArrowState] = useState<'visible' | 'hiding' | 'hidden'>('visible')

  useEffect(() => {
    savePlanet(planet)
  }, [planet])

  useEffect(() => {
    const hideTimer = setTimeout(() => setArrowState('hiding'), 3200)

    return () => clearTimeout(hideTimer)
  }, [])

  useEffect(() => {
    if (arrowState !== 'hiding') return

    const removeTimer = setTimeout(() => setArrowState('hidden'), 400)

    return () => clearTimeout(removeTimer)
  }, [arrowState])

  function dismissArrow() {
    setArrowState('hidden')
    setPulsing(false)
  }

  function handleSelect(name: typeof planet) {
    setPlanet(name)
    setOpen(false)
    dismissArrow()
  }

  const current = PLANETS.find(p => p.name === planet)

  return (
    <>
      <style>{planetStyles}</style>

      {/* Root wrapper */}
      <Stack
        style={{ position: 'fixed', top: '56px', right: '16px', zIndex: 50 }}
      >

        {/* Arrow hint */}
        {arrowState !== 'hidden' && (
          <Stack
            direction="row"
            align="center"
            gap={2}
            className={arrowState === 'hiding' ? 'theme-arrow-out' : 'theme-arrow'}
            style={{
              pointerEvents: 'none',
              position: 'absolute',
              right: '44px',
              top: '50%',
              transform: 'translateY(-50%)',
              whiteSpace: 'nowrap',
            }}
          >
            <Typography
              as="span"
              size="xs"
              style={{
                color: current?.accent ?? 'var(--void-color-text-secondary)',
                letterSpacing: '0.1em',
                opacity: 0.8,
                textTransform: 'uppercase',
              }}
            >
              {t.toggle}
            </Typography>
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 6 H16 M11 1 L18 6 L11 11"
                stroke={current?.accent ?? 'var(--void-color-text-secondary)'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Stack>
        )}

        {/* Trigger */}
        <Button
          variant="ghost"
          aria-label={t.toggle}
          aria-expanded={open}
          className={pulsing ? 'theme-btn-pulse' : undefined}
          onClick={() => { setOpen(o => !o); dismissArrow() }}
          style={{
            '--theme-pulse-color': `${current?.accent ?? 'rgba(139,92,246,0.7)'}99`,
            alignItems: 'center',
            borderColor: open || pulsing ? (current?.accent ?? 'var(--void-color-border-default)') : 'var(--void-color-border-default)',
            borderRadius: '50%',
            borderStyle: 'solid',
            borderWidth: '1.5px',
            boxShadow: open ? `0 0 12px ${current?.accent}44` : pulsing ? `0 0 8px ${current?.accent}66` : 'none',
            display: 'flex',
            height: '36px',
            justifyContent: 'center',
            transition: 'box-shadow 0.3s, border-color 0.3s',
            width: '36px',
          } as React.CSSProperties}
        >
          <PlanetIcon accent={current?.accent} />
        </Button>

        {/* Dropdown */}
        {open && (
          <>
            {/* Backdrop */}
            <Stack
              onClick={() => setOpen(false)}
              style={{ bottom: 0, left: 0, position: 'fixed', right: 0, top: 0, zIndex: 40 }}
            />

            {/* Panel */}
            <Stack
              direction="column"
              gap={0}
              style={{
                backdropFilter: 'blur(12px)',
                background: 'var(--void-color-background-overlay)',
                border: '1px solid var(--void-color-border-subtle)',
                borderRadius: 'var(--void-radius-lg)',
                boxShadow: 'var(--void-shadow-glow)',
                minWidth: '152px',
                overflow: 'hidden',
                padding: '6px',
                position: 'absolute',
                right: 0,
                top: 'calc(100% + 8px)',
                zIndex: 50,
              }}
            >
              {/* Header */}
              <Stack direction="row" align="center" gap={2} style={{ padding: '4px 10px 8px' }}>
                <PlanetIcon accent={current?.accent} />
                <Typography
                  as="p"
                  size="xs"
                  color="muted"
                  style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
                >
                  {t.title}
                </Typography>
              </Stack>

              <Divider />

              {/* Planet groups */}
              {PLANET_GROUPS.map(({ category }) => {
                const items = PLANETS.filter(p => p.category === category)

                const groupLabel = t[category]

                return (
                  <Stack key={category} direction="column" gap={0}>
                    <Stack style={{ marginTop: '4px', padding: '6px 10px 4px' }}>
                      <Typography
                        as="p"
                        color="muted"
                        size="xs"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                      >
                        {groupLabel}
                      </Typography>
                    </Stack>

                    <Stack direction="column" gap={0}>
                      {items.map(p => {
                        const isActive = planet === p.name

                        return (
                          <Button
                            key={p.name}
                            variant="ghost"
                            size="sm"
                            aria-label={`${t.switchTo} ${p.label}`}
                            onClick={() => handleSelect(p.name)}
                            style={{
                              background: isActive ? 'var(--void-color-background-surface)' : 'transparent',
                              borderRadius: 'var(--void-radius-sm)',
                              display: 'flex',
                              gap: '10px',
                              justifyContent: 'flex-start',
                              padding: '6px 10px',
                              width: '100%',
                            }}
                          >
                            <span style={{
                              background: p.accent,
                              borderRadius: '50%',
                              boxShadow: isActive ? `0 0 6px ${p.accent}bb` : 'none',
                              flexShrink: 0,
                              height: '8px',
                              transition: 'box-shadow 0.2s',
                              width: '8px',
                            }} />
                            <Typography
                              as="span"
                              color={isActive ? 'primary' : 'secondary'}
                              size="xs"
                              style={{ flex: 1, letterSpacing: '0.03em', textAlign: 'left' }}
                            >
                              {p.label}
                            </Typography>
                            {isActive && (
                              <span style={{
                                background: p.accent,
                                borderRadius: '50%',
                                boxShadow: `0 0 4px ${p.accent}`,
                                flexShrink: 0,
                                height: '5px',
                                width: '5px',
                              }} />
                            )}
                          </Button>
                        )
                      })}
                    </Stack>
                  </Stack>
                )
              })}
            </Stack>
          </>
        )}
      </Stack>
    </>
  )
}
