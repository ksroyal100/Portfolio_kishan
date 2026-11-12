'use client'

// Card wrapper with a soft highlight that follows the cursor.
export default function Spotlight({ children, className = '' }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <div onMouseMove={onMove} className={`card spotlight ${className}`}>
      {children}
    </div>
  )
}
