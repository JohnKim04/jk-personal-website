import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { PageContainer } from '@/components/editorial'
import { getWritingMeta, getWritingPost, writingPosts } from '@/content/writing'

export function generateStaticParams() {
  return writingPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getWritingPost(slug)

  if (!post) {
    return { title: 'Writing' }
  }

  return {
    title: post.title,
    description: post.description,
    robots:
      post.status === 'published' ? undefined : { follow: false, index: false },
  }
}

export default async function WritingPostPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const post = getWritingPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <PageContainer className="article-page" size="reading">
      <p className="eyebrow">Writing / {getWritingMeta(post)}</p>
      <h1>{post.title}</h1>
      <p className="article-page__lede">{post.description}</p>
      {post.status === 'published' ? (
        <article className="article-page__body">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      ) : (
        <div className="article-page__placeholder">
          <p className="metadata">Not published yet</p>
          <p>
            This route is ready for the first original article. No draft or
            generated copy is being presented as final writing.
          </p>
        </div>
      )}
      <Link href="/writing">Back to writing</Link>
    </PageContainer>
  )
}
