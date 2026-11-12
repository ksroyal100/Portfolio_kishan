import Link from 'next/link'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="h2">This page does not exist.</h1>
      <p className="mt-3 text-muted">The link may be broken or the page may have moved.</p>
      <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
    </section>
  )
}
