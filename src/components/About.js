import { about } from '@/data/site'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading index="01" eyebrow="About" title="Engineer first, always shipping." />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="card divide-y divide-line">
              {about.facts.map((f) => (
                <div key={f.label} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted">{f.label}</dt>
                  <dd className="text-sm font-medium sm:text-right">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
