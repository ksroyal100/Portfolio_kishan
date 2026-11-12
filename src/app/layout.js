import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { profile, SITE_URL } from '@/data/site'

const description =
  'Kishan Sahu — Software Engineer (Java, Spring Boot, Node.js, React, Next.js) building scalable backends and AI-powered products. Open to SDE roles.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kishan Sahu — Software Engineer | Backend & Full-Stack',
    template: '%s | Kishan Sahu',
  },
  description,
  keywords: [
    'Kishan Sahu', 'Software Engineer', 'Backend Developer', 'Full Stack Developer',
    'Java', 'Spring Boot', 'Node.js', 'React', 'Next.js', 'Portfolio',
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: `${profile.name} — Portfolio`,
    title: 'Kishan Sahu — Software Engineer',
    description,
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image', title: 'Kishan Sahu — Software Engineer', description },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

// Runs before first paint so there is no light/dark flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: SITE_URL,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ['Java', 'Spring Boot', 'Node.js', 'React', 'Next.js', 'REST APIs', 'MySQL', 'MongoDB', 'LLM integration'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
