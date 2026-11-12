'use client'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './Icons'

export default function ThemeToggle({ className = '' }) {
  const [dark, setDark] = useState(null)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch (e) {}
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-fg transition hover:border-accent/60 hover:text-accent ${className}`}
    >
      {dark === null ? <span className="h-5 w-5" /> : dark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
