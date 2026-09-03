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
    return {
      title: 'Page not found',
      robots: {
        follow: false,
        index: false,
      },
    }
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/writing/${post.slug}`,
    },
    openGraph: {
      description: post.description,
      locale: 'en_US',
      publishedTime: `${post.publishedAt}T00:00:00.000Z`,
      siteName: 'John Kim',
      title: post.title,
      type: 'article',
      url: `/writing/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      description: post.description,
      title: post.title,
    },
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
      <article className="article-page__body">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
      <Link href="/writing">Back to writing</Link>
    </PageContainer>
  )
}
