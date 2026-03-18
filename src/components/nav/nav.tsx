import { useState } from 'react'

import { useResume } from '../../context/resume-context'

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { data } = useResume()
  const { nav } = data.ui

  const NAV_LINKS = [
    { href: '#summary',    label: nav.summary    },
    { href: '#experience', label: nav.experience },
    { href: '#projects',   label: nav.aiProjects },
    { href: '#skills',     label: nav.skills     },
    { href: '#education',  label: nav.education  },
  ]

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
      <ul
        role="list"
        className="void-sm:flex"
        style={{
          display: 'none',
          gap: '32px',
          justifyContent: 'center',
          listStyle: 'none',
        }}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="nav-link"
              style={{
                color: 'var(--void-color-text-muted)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile header */}
      <div
        className="void-sm:hidden"
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            color: 'var(--void-color-text-muted)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {nav.menu}
        </span>
        <button
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={nav.toggleMenu}
          style={{
            alignItems: 'center',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '4px',
          }}
          onClick={() => setMenuOpen(o => !o)}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                background: 'var(--void-color-text-muted)',
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
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul
          id="mobile-menu"
          role="list"
          className="void-sm:hidden"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            listStyle: 'none',
            paddingBottom: '4px',
            paddingTop: '16px',
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="nav-link"
                style={{
                  color: 'var(--void-color-text-muted)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
