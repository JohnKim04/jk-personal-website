import type { Metadata } from 'next'
import Link from 'next/link'

import { PageContainer } from '@/components/editorial'
import { getWritingMeta, writingPosts } from '@/content/writing'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Notes and essays from John Kim on engineering, systems, and software development.',
}

export default function WritingPage() {
  return (
    <PageContainer className="writing-page" size="reading">
      <section aria-labelledby="writing-title">
        <p className="eyebrow">Writing</p>
        <h1 id="writing-title">Notes on building, systems, and AI.</h1>
        <p className="writing-page__lede">
          A small collection of original notes on engineering, systems, and
          software development.
        </p>
      </section>

      {writingPosts.length > 0 ? (
        <ol className="writing-list">
          {writingPosts.map((post) => (
            <li key={post.slug}>
              <article>
                <p className="metadata">{getWritingMeta(post)}</p>
                <h2>
                  <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
              </article>
            </li>
          ))}
        </ol>
      ) : null}
    </PageContainer>
  )
}
