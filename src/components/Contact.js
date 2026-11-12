'use client'
import { useState } from 'react'
import { profile } from '@/data/site'
import Reveal from './Reveal'
import { CheckIcon, CopyIcon, DownloadIcon, GithubIcon, LinkedInIcon, MailIcon } from './Icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <Reveal>
          <div className="card relative px-6 py-14 text-center sm:px-12 sm:py-20">
            <div aria-hidden className="absolute left-1/2 top-0 -z-0 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-accent/15 blur-[90px]" />
            <div className="relative">
              <p className="eyebrow">05 — Contact</p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
                Hiring, or have something to build? Let us talk.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted">
                I am looking for Backend / Full-Stack SDE roles and open to relocation. The fastest way to reach me is email.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${profile.email}`} className="btn btn-primary"><MailIcon width={16} height={16} /> {profile.email}</a>
                <button type="button" onClick={copy} className="btn btn-ghost" aria-live="polite">
                  {copied ? <><CheckIcon width={16} height={16} /> Copied</> : <><CopyIcon width={16} height={16} /> Copy email</>}
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2.5"><LinkedInIcon width={16} height={16} /> LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2.5"><GithubIcon width={16} height={16} /> GitHub</a>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2.5"><DownloadIcon width={16} height={16} /> Resume</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
