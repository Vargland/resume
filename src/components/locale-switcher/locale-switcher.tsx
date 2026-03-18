import { Button } from '@open-void-ui/library'

import { type Locale, useResume } from '../../context/resume-context'

const LOCALES: { label: string; value: Locale }[] = [
  { label: 'EN', value: 'en' },
  { label: 'ES', value: 'es' },
]

export function LocaleSwitcher() {
  const { locale, setLocale } = useResume()

  return (
    <div
      aria-label="Language switcher"
      role="group"
      style={{
        bottom: '1.25rem',
        display: 'flex',
        gap: '0.25rem',
        position: 'fixed',
        right: '1.25rem',
        zIndex: 50,
      }}
    >
      {LOCALES.map(({ label, value }) => (
        <Button
          key={value}
          aria-pressed={locale === value}
          size="sm"
          variant={locale === value ? 'primary' : 'ghost'}
          onClick={() => setLocale(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}
