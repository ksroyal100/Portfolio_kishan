import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, intro }) {
  return (
    <Reveal className="mb-12 max-w-2xl sm:mb-14">
      <p className="eyebrow">{index} — {eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {intro && <p className="mt-4 text-muted">{intro}</p>}
    </Reveal>
  )
}
