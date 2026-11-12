import Image from 'next/image'
import { projects } from '@/data/site'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Spotlight from './Spotlight'
import { ArrowUpRight, GithubIcon } from './Icons'

function Links({ live, github, title }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer" className="btn btn-primary !py-2.5" aria-label={`Open live demo of ${title}`}>
          Live demo <ArrowUpRight width={16} height={16} />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2.5" aria-label={`View source code of ${title}`}>
          <GithubIcon width={16} height={16} /> Code
        </a>
      )}
    </div>
  )
}

function Shot({ p, sizes, priority = false }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-bg lg:border-b-0 lg:border-r">
      <Image
        src={p.image}
        alt={`Screenshot of ${p.title}`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
      />
    </div>
  )
}

function Stack({ items }) {
  return <ul className="mt-5 flex flex-wrap gap-2">{items.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
}

function Featured({ p }) {
  return (
    <Reveal>
      <Spotlight className="group grid lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <Shot p={p} sizes="(min-width:1024px) 600px, 100vw" />
        <div className="flex flex-col justify-center p-6 sm:p-9">
          <p className="eyebrow">Featured · {p.type}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h3>
          <p className="mt-4 text-muted">{p.summary}</p>
          <ul className="mt-5 space-y-2 text-sm text-fg/80">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2.5"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{h}</li>
            ))}
          </ul>
          <Stack items={p.stack} />
          <Links live={p.live} github={p.github} title={p.title} />
        </div>
      </Spotlight>
    </Reveal>
  )
}

function Card({ p, i }) {
  return (
    <Reveal delay={i * 0.08} className="h-full">
      <Spotlight className="group flex h-full flex-col">
        <Shot p={p} sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw" />
        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.type}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">{p.title}</h3>
          <p className="mt-3 text-sm text-muted">{p.summary}</p>
          <ul className="mt-4 space-y-1.5 text-sm text-fg/80">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2.5"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{h}</li>
            ))}
          </ul>
          <div className="mt-auto">
            <Stack items={p.stack} />
            <Links live={p.live} github={p.github} title={p.title} />
          </div>
        </div>
      </Spotlight>
    </Reveal>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Things I have built and shipped."
          intro="Each project links to its source on GitHub, and the web apps have live demos."
        />
        <div className="space-y-6">
          <Featured p={featured} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => <Card key={p.slug} p={p} i={i} />)}
          </div>
        </div>
        <Reveal className="mt-10 text-center">
          <a href="https://github.com/ksroyal100?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <GithubIcon width={16} height={16} /> More on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  )
}
