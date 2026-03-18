import { useState, useEffect } from 'react'
import { usePlanet, Typography } from '@open-void-ui/library'
import { PLANETS, savePlanet } from '../../theme/planets'

const planetStyles = `
  @keyframes orbit {
    from { transform: rotate(0deg) translateX(6px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(6px) rotate(-360deg); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  .planet-moon {
    animation: orbit 3s linear infinite;
  }
  .planet-ring {
    animation: spin 8s linear infinite;
  }
`

function PlanetIcon({ accent }: { accent?: string }) {
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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    savePlanet(planet)
  }, [planet])

  function handleSelect(name: typeof planet) {
    setPlanet(name)
    setOpen(false)
  }

  const current = PLANETS.find(p => p.name === planet)

  return (
    <>
      <style>{planetStyles}</style>
      <div style={{ position: 'fixed', top: '56px', right: '16px', zIndex: 50 }}>
        {/* Trigger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Switch planet theme"
          aria-expanded={open}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--void-color-background-overlay)',
            border: `1.5px solid ${open ? (current?.accent ?? 'var(--void-color-border-default)') : 'var(--void-color-border-default)'}`,
            boxShadow: open ? `0 0 12px ${current?.accent}44` : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s, border-color 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = current?.accent ?? 'var(--void-color-border-default)'
            e.currentTarget.style.boxShadow = `0 0 10px ${current?.accent}44`
          }}
          onMouseLeave={e => {
            if (!open) {
              e.currentTarget.style.borderColor = 'var(--void-color-border-default)'
              e.currentTarget.style.boxShadow = 'none'
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
                  Theme
                </Typography>
              </div>

              {/* Planet list */}
              {PLANETS.map(p => {
                const isActive = planet === p.name
                return (
                  <button
                    key={p.name}
                    onClick={() => handleSelect(p.name)}
                    aria-label={`Switch to ${p.label}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      width: '100%',
                      padding: '6px 10px',
                      borderRadius: 'var(--void-radius-sm)',
                      background: isActive ? 'var(--void-color-background-surface)' : 'transparent',
                      cursor: 'pointer',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--void-color-background-surface)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = isActive ? 'var(--void-color-background-surface)' : 'transparent' }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: p.accent,
                        flexShrink: 0,
                        boxShadow: isActive ? `0 0 6px ${p.accent}bb` : 'none',
                        transition: 'box-shadow 0.2s',
                      }}
                    />
                    <Typography
                      as="span"
                      size="xs"
                      color={isActive ? 'primary' : 'secondary'}
                      style={{ flex: 1, textAlign: 'left', letterSpacing: '0.03em' }}
                    >
                      {p.label}
                    </Typography>
                    {isActive && (
                      <span style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: p.accent,
                        flexShrink: 0,
                        boxShadow: `0 0 4px ${p.accent}`,
                      }} />
                    )}
                  </button>
                )
              })}
            </div>
          </>
        )}
      </div>
    </>
  )
}
