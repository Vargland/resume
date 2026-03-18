import { useState } from 'react'

const NAV_LINKS = [
  { href: '#summary', label: 'Summary' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'AI Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
]

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'var(--void-color-background-base)',
        borderBottom: '1px solid var(--void-color-border-subtle)',
        padding: '18px 24px 14px',
      }}
    >
      {/* Desktop */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
        }}
        className="hidden-mobile"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-xs tracking-widest uppercase transition-colors duration-200"
            style={{ color: 'var(--void-color-text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--void-color-text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--void-color-text-muted)')}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="show-mobile" style={{ display: 'none', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--void-color-text-muted)' }}>
          Menu
        </span>
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '18px',
                height: '1.5px',
                background: 'var(--void-color-text-muted)',
                transition: 'transform 0.2s, opacity 0.2s',
                transform: menuOpen
                  ? i === 0 ? 'translateY(5.5px) rotate(45deg)' : i === 2 ? 'translateY(-5.5px) rotate(-45deg)' : 'scaleX(0)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="show-mobile"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            paddingTop: '16px',
            paddingBottom: '4px',
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest uppercase"
              style={{ color: 'var(--void-color-text-muted)' }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 640px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 639px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
