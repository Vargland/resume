import React, { useEffect, useState } from 'react'
import { Typography, usePlanet } from '@open-void-ui/library'

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
      {/* Ring */}
      <ellipse
        cx="9" cy="9" rx="8" ry="3"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.4"
        className="planet-ring"
        style={{ transformOrigin: '9px 9px' }}
      />
      {/* Planet body */}
      <circle cx="9" cy="9" r="4.5" fill={color} opacity="0.9" />
      {/* Shine */}
      <circle cx="7.5" cy="7.5" r="1.2" fill="white" opacity="0.25" />
      {/* Moon */}
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
    // arrow-in (0.4s) + arrow-bounce 4×0.7s = ~3.2s total, then fade out
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
      <div style={{ position: 'fixed', top: '56px', right: '16px', zIndex: 50 }}>
        {/* Arrow hint */}
        {arrowState !== 'hidden' && (
          <div
            className={arrowState === 'hiding' ? 'theme-arrow-out' : 'theme-arrow'}
            style={{
              alignItems: 'center',
              display: 'flex',
              gap: '6px',
              pointerEvents: 'none',
              position: 'absolute',
              right: '44px',
              top: '50%',
              transform: 'translateY(-50%)',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{
              color: current?.accent ?? 'var(--void-color-text-secondary)',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              opacity: 0.8,
              textTransform: 'uppercase',
            }}>
              {t.toggle}
            </span>
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 6 H16 M11 1 L18 6 L11 11"
                stroke={current?.accent ?? 'var(--void-color-text-secondary)'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
        {/* Trigger */}
        <button
          onClick={() => { setOpen(o => !o); dismissArrow() }}
          aria-label={t.toggle}
          aria-expanded={open}
          className={pulsing ? 'theme-btn-pulse' : undefined}
          style={{
            '--theme-pulse-color': `${current?.accent ?? 'rgba(139,92,246,0.7)'}99`,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--void-color-background-overlay)',
            border: `1.5px solid ${open || pulsing ? (current?.accent ?? 'var(--void-color-border-default)') : 'var(--void-color-border-default)'}`,
            boxShadow: open ? `0 0 12px ${current?.accent}44` : pulsing ? `0 0 8px ${current?.accent}66` : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s, border-color 0.3s',
          } as React.CSSProperties}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = current?.accent ?? 'var(--void-color-border-default)'
            e.currentTarget.style.boxShadow = `0 0 10px ${current?.accent}44`
          }}
          onMouseLeave={e => {
            if (!open) {
              e.currentTarget.style.borderColor = pulsing ? (current?.accent ?? 'var(--void-color-border-default)') : 'var(--void-color-border-default)'
              e.currentTarget.style.boxShadow = pulsing ? `0 0 8px ${current?.accent}66` : 'none'
            }
          }}
        >
          <PlanetIcon accent={current?.accent} />
        </button>

        {/* Dropdown */}
        {open && (
          <>
            <div style={{ position: 'fixed', inset: 0, zIndex: 40 }} onClick={() => setOpen(false)} />
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                zIndex: 50,
                minWidth: '152px',
                background: 'var(--void-color-background-overlay)',
                border: '1px solid var(--void-color-border-subtle)',
                borderRadius: 'var(--void-radius-lg)',
                boxShadow: 'var(--void-shadow-glow)',
                backdropFilter: 'blur(12px)',
                padding: '6px',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <div style={{
                padding: '4px 10px 8px',
                borderBottom: '1px solid var(--void-color-border-subtle)',
                marginBottom: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <PlanetIcon accent={current?.accent} />
                <Typography as="p" size="xs" color="muted" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {t.title}
                </Typography>
              </div>

              {/* Planet groups */}
              {PLANET_GROUPS.map(({ category }) => {
                const items = PLANETS.filter(p => p.category === category)

                const groupLabel = t[category]

                return (
                  <div key={category}>
                    <div style={{
                      marginTop: '4px',
                      padding: '6px 10px 4px',
                    }}>
                      <Typography
                        as="p"
                        color="muted"
                        size="xs"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                      >
                        {groupLabel}
                      </Typography>
                    </div>
                    {items.map(p => {
                      const isActive = planet === p.name

                      return (
                        <button
                          key={p.name}
                          aria-label={`${t.switchTo} ${p.label}`}
                          style={{
                            alignItems: 'center',
                            background: isActive ? 'var(--void-color-background-surface)' : 'transparent',
                            borderRadius: 'var(--void-radius-sm)',
                            cursor: 'pointer',
                            display: 'flex',
                            gap: '10px',
                            padding: '6px 10px',
                            transition: 'background 0.15s',
                            width: '100%',
                          }}
                          onClick={() => handleSelect(p.name)}
                          onMouseEnter={e => { e.currentTarget.style.background = 'var(--void-color-background-surface)' }}
                          onMouseLeave={e => { e.currentTarget.style.background = isActive ? 'var(--void-color-background-surface)' : 'transparent' }}
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
                        </button>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </>
  )
}
