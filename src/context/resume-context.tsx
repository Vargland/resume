import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { en, es, type ResumeData } from '../data'

export type Locale = 'en' | 'es'

const LOCALES: Record<Locale, ResumeData> = { en, es }

interface ResumeContextValue {
  data: ResumeData
  locale: Locale
  setLocale: (locale: Locale) => void
}

const ResumeContext = createContext<ResumeContextValue | null>(null)

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem('cv-locale')

    return stored === 'es' ? 'es' : 'en'
  })

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem('cv-locale', next)

    setLocaleState(next)
  }, [])

  const value = useMemo<ResumeContextValue>(
    () => ({ data: LOCALES[locale], locale, setLocale }),
    [locale, setLocale],
  )

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
}

export const useResume = (): ResumeContextValue => {
  const ctx = useContext(ResumeContext)

  if (!ctx) throw new Error('useResume must be used inside <ResumeProvider>')

  return ctx
}
