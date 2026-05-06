import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

type ThemeType = 'light' | 'dark'
type ThemeContextType = {
  theme: ThemeType
  setTheme: (newTheme: ThemeType) => void
}
type ThemeProviderProps = { children: ReactNode }

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(initTheme)

  function initTheme(): ThemeType {
    const localTheme = localStorage.getItem('theme')

    if (!localTheme) {
      const isDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      return isDarkMode ? 'dark' : 'light'
    }

    return localTheme as ThemeType
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw Error('useTheme must be used within a ThemeContext provider')
  }
  return context
}
