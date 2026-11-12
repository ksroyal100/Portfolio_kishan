import { skills } from '@/data/site'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Spotlight from './Spotlight'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Tools I reach for."
          intro="Grouped by what I use them for, not by how many logos I can fit on a page."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.category} delay={(i % 3) * 0.08}>
              <Spotlight className="h-full p-6">
                <h3 className="text-lg font-semibold">{g.category}</h3>
                <p className="mt-1 text-sm text-muted">{g.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => <li key={s} className="chip">{s}</li>)}
                </ul>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
