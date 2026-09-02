import type { MetadataRoute } from 'next'

import { getSiteUrl } from '@/lib/site-url'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()

  if (!siteUrl) {
    return []
  }

  return [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/writing`, changeFrequency: 'weekly', priority: 0.7 },
  ]
}
