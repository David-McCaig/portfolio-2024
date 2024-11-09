'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeScript = () => {
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme('light') // Set default theme
    }
  }, [setTheme])

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
    }
  }, [theme])

  return null
}

export default ThemeScript