export type WritingPost = {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingTime: string
  body: string[]
  isPlaceholder?: boolean
}

// Keep drafts and unapproved AI-assisted notes outside the public repository.
// Any approved temporary example must set isPlaceholder so it stays labeled and
// no-indexed until replaced with reviewed writing.
export const writingPosts: WritingPost[] = [
  {
    slug: 'a-note-on-useful-tools',
    title: 'Placeholder: A note on useful tools',
    description:
      'A temporary note on making everyday software easier to use and maintain.',
    publishedAt: '2026-09-02',
    readingTime: '2 min read',
    isPlaceholder: true,
    body: [
      'This is a temporary, generated example used to exercise the Writing section. It will be replaced with a reviewed article before launch.',
      'Useful tools tend to make the next step obvious. They keep the common path short, give people enough context to make a decision, and make it clear when something needs attention.',
      'That does not always require a large feature. A better default, a clearer label, or a small check before an action can remove a surprising amount of friction from someone’s day.',
      'The goal is not to hide complexity that matters. It is to put the complexity where it is useful, so people can spend their time on the work that still needs judgment.',
    ],
  },
]

export function getWritingPost(slug: string) {
  return writingPosts.find((post) => post.slug === slug)
}

export function getWritingMeta(post: WritingPost) {
  const publishedAt = new Date(`${post.publishedAt}T00:00:00Z`)
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(publishedAt)

  const placeholderPrefix = post.isPlaceholder ? 'Placeholder / ' : ''

  return `${placeholderPrefix}${formattedDate} / ${post.readingTime}`
}
