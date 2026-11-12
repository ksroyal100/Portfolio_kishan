'use client'
import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { stats } from '@/data/site'
import Reveal from './Reveal'

function Counter({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) { if (reduce) setN(value); return }
    const c = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(v) })
    return () => c.stop()
  }, [inView, value, reduce])

  return <span ref={ref}>{n.toFixed(decimals)}{suffix}</span>
}

export default function Stats() {
  return (
    <section aria-label="Highlights" className="pb-6">
      <div className="container-x">
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface p-6 sm:p-8">
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
              {s.sub && <p className="font-mono text-[11px] text-muted/70">{s.sub}</p>}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
