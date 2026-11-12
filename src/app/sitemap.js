import { SITE_URL } from '@/data/site'

export const dynamic = 'force-static'

export default function sitemap() {
  return [{ url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }]
}
