/** @type {import('tailwindcss').Config} */
const withVar = (name) => `rgb(var(--${name}) / <alpha-value>)`

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        bg: withVar('bg'),
        surface: withVar('surface'),
        fg: withVar('fg'),
        muted: withVar('muted'),
        line: withVar('line'),
        accent: withVar('accent'),
        'accent-fg': withVar('accent-fg'),
      },
      keyframes: {
        ping2: { '75%,100%': { transform: 'scale(2.2)', opacity: '0' } },
      },
      animation: { ping2: 'ping2 1.8s cubic-bezier(0,0,.2,1) infinite' },
    },
  },
  plugins: [],
}
