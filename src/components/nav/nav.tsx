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
      id="main-nav"
      className="fixed top-0 left-0 right-0 z-50 px-6 py-[18px]"
      style={{
        background: 'var(--void-color-background-base)',
        borderBottom: '1px solid var(--void-color-border-subtle)',
      }}
    >
      {/* Desktop */}
      <ul role="list" className="hidden md:flex justify-center gap-8">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="nav-link text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: 'var(--void-color-text-muted)' }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile header */}
      <div className="flex md:hidden justify-between items-center">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: 'var(--void-color-text-muted)' }}
        >
          Menu
        </span>
        <button
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="p-1 flex flex-col gap-1 cursor-pointer bg-transparent border-0"
          onClick={() => setMenuOpen(o => !o)}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block transition-all duration-200"
              style={{
                background: 'var(--void-color-text-muted)',
                height: '1.5px',
                opacity: menuOpen && i === 1 ? 0 : 1,
                transform: menuOpen
                  ? i === 0 ? 'translateY(5.5px) rotate(45deg)'
                  : i === 2 ? 'translateY(-5.5px) rotate(-45deg)'
                  : 'none'
                  : 'none',
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
          className="flex md:hidden flex-col gap-4 pt-4 pb-1"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="nav-link text-xs tracking-widest uppercase"
                style={{ color: 'var(--void-color-text-muted)' }}
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
