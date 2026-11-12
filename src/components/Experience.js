import { certifications, education, experience } from '@/data/site'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

function TimelineItem({ title, org, meta, children }) {
  return (
    <li className="relative pl-8">
      <span aria-hidden className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h4 className="text-lg font-semibold">{title}</h4>
        <span className="font-mono text-xs text-muted">{meta}</span>
      </div>
      <p className="text-sm text-accent">{org}</p>
      <div className="mt-3 text-sm text-muted">{children}</div>
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading index="04" eyebrow="Experience" title="Where I have worked and learned." />
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <ol className="relative space-y-12 before:absolute before:left-[5px] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-line">
              {experience.map((e) => (
                <TimelineItem key={e.role + e.period} title={e.role} org={`${e.org} · ${e.place}`} meta={e.period}>
                  <ul className="space-y-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5"><span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />{pt}</li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
              {education.map((e) => (
                <TimelineItem key={e.degree} title={e.degree} org={e.school} meta={e.period}>
                  <p>{e.note}</p>
                </TimelineItem>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Certifications</h3>
            <ul className="mt-5 space-y-4">
              {certifications.map((c) => (
                <li key={c.name} className="card p-5">
                  <p className="font-medium">{c.name}</p>
                  <p className="font-mono text-xs text-accent">{c.issuer}</p>
                  <p className="mt-2 text-sm text-muted">{c.desc}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
