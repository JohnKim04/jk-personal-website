import type { MetadataRoute } from 'next'

import { writingPosts } from '@/content/writing'
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
    ...writingPosts.map((post) => ({
      url: `${siteUrl}/writing/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
