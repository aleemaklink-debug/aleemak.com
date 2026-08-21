import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { nav } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return nav.map(({ href }) => ({
    url: `${site.url}${href === '/' ? '' : href}`,
    lastModified: now,
    changeFrequency: href === '/' ? 'weekly' : 'monthly',
    priority: href === '/' ? 1 : 0.7,
  }))
}
