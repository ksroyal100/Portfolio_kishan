import { profile } from '@/data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono text-xs">Built with Next.js · Tailwind CSS · Framer Motion</p>
      </div>
    </footer>
  )
}
