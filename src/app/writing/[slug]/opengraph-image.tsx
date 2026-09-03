import { ImageResponse } from 'next/og'
import { notFound } from 'next/navigation'

import { getWritingPost, writingPosts } from '@/content/writing'

export const alt = 'A Writing post by John Kim'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return writingPosts.map((post) => ({ slug: post.slug }))
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getWritingPost(slug)

  if (!post) {
    notFound()
  }

  return new ImageResponse(
    <div
      style={{
        background: '#f4f0e8',
        color: '#1d1b18',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '72px',
        width: '100%',
      }}
    >
      <div
        style={{
          color: '#1c4e80',
          display: 'flex',
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
        }}
      >
        Writing / John Kim
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: '-0.06em',
            lineHeight: 1,
          }}
        >
          {post.title}
        </div>
        <div style={{ color: '#5f5b54', display: 'flex', fontSize: 30 }}>
          {post.description}
        </div>
      </div>
      <div
        style={{
          borderTop: '2px solid #1d1b18',
          display: 'flex',
          fontSize: 24,
          justifyContent: 'space-between',
          paddingTop: '24px',
        }}
      >
        <span>John Kim</span>
        <span style={{ color: '#1c4e80', fontWeight: 700 }}>JK</span>
      </div>
    </div>,
    size,
  )
}
