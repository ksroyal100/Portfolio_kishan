'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { profile } from '@/data/site'
import { ArrowDown, DownloadIcon, GithubIcon, LinkedInIcon, MailIcon, PinIcon } from './Icons'

function RoleRotator({ roles }) {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2600)
    return () => clearInterval(t)
  }, [reduce, roles.length])

  return (
    <span className="relative inline-flex h-8 items-center overflow-hidden align-bottom font-mono text-base text-accent sm:text-lg">
      <span className="sr-only">{roles.join(', ')}</span>
      <span aria-hidden="true" className="mr-2 text-muted">&gt;</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[i]}
          aria-hidden="true"
          initial={reduce ? false : { y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const fade = (d) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } })

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="absolute left-1/2 top-[-160px] -z-10 h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.div {...fade(0)} className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.p {...fade(0.08)} className="mt-7 font-mono text-sm text-muted">Hi, I am {profile.name}.</motion.p>
          <motion.h1 {...fade(0.14)} className="mt-3 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            I build backend systems and{' '}
            <span className="bg-gradient-to-r from-accent to-sky-500 bg-clip-text text-transparent">AI&#8209;powered practical software products.</span>
          </motion.h1>

          <motion.div {...fade(0.2)} className="mt-5"><RoleRotator roles={profile.roles} /></motion.div>

          <motion.p {...fade(0.26)} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.intro}</motion.p>

          <motion.div {...fade(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">View projects <ArrowDown width={16} height={16} /></a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Resume <DownloadIcon width={16} height={16} /></a>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: profile.github, label: 'GitHub', Icon: GithubIcon },
                { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
                { href: `mailto:${profile.email}`, label: 'Email', Icon: MailIcon },
              ].map(({ href, label, Icon }) => (
                <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl text-muted transition hover:bg-accent/10 hover:text-accent">
                  <Icon width={21} height={21} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div {...fade(0.2)} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-sky-500/20 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-line bg-gradient-to-b from-accent/15 to-surface">
            <Image src="/images/profile/kishan.webp" alt="Portrait of Kishan Sahu" fill priority sizes="(min-width:1024px) 400px, 80vw" className="object-contain object-bottom" />
          </div>
          <div className="absolute -left-3 bottom-8 hidden rounded-xl border border-line bg-surface/90 px-3.5 py-2.5 shadow-lg backdrop-blur sm:block">
            <p className="font-mono text-[11px] text-muted">primary stack</p>
            <p className="text-sm font-medium">Java · Spring Boot · Next.js</p>
          </div>
          {/* <div className="absolute -right-3 top-8 hidden rounded-xl border border-line bg-surface/90 px-3.5 py-2.5 shadow-lg backdrop-blur sm:block">
            <p className="font-mono text-[11px] text-muted">also building with</p>
            <p className="text-sm font-medium">Next.js · LLM APIs</p>
          </div> */}
          <p className="mt-5 flex items-center justify-center gap-1.5 text-sm text-muted lg:justify-start">
            <PinIcon width={16} height={16} /> {profile.location}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
