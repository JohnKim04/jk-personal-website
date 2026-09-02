type WritingPostBase = {
  slug: string
  title: string
  description: string
}

type ComingSoonWritingPost = WritingPostBase & {
  status: 'coming-soon'
}

type PublishedWritingPost = WritingPostBase & {
  status: 'published'
  publishedAt: string
  readingTime: string
  body: string[]
}

export type WritingPost = ComingSoonWritingPost | PublishedWritingPost

export const writingPosts: WritingPost[] = [
  {
    slug: 'first-post-coming-soon',
    title: 'First post in progress',
    description:
      'An original note is being outlined and will be published after it has a clear point of view and final review.',
    status: 'coming-soon',
  },
]

export function getWritingPost(slug: string) {
  return writingPosts.find((post) => post.slug === slug)
}

export function getWritingMeta(post: WritingPost) {
  if (post.status === 'published') {
    return `${post.publishedAt} / ${post.readingTime}`
  }

  return 'Coming soon'
}
