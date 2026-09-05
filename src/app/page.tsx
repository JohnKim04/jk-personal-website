import type { Metadata } from 'next'
import Link from 'next/link'

import {
  EditorialRule,
  ImpactHighlight,
  PageContainer,
  SectionHeading,
} from '@/components/editorial'
import { LinkedInIcon } from '@/components/linkedin-icon'
import { selectedImpact } from '@/content/experience'
import {
  emailLink,
  homepageContent,
  linkedInLink,
  siteIdentity,
} from '@/content/site'
import { getWritingMeta, writingPosts } from '@/content/writing'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  const recentPosts = writingPosts.slice(0, 3)

  return (
    <div className="home-page">
      <PageContainer className="home-hero" size="standard">
        <section className="home-hero__copy" aria-labelledby="home-title">
          <p className="eyebrow">
            {siteIdentity.role} / {siteIdentity.shortLocation}
          </p>
          <h1 id="home-title">{siteIdentity.name}</h1>
          <p className="home-hero__lede">{homepageContent.heroLede}</p>
          <div className="home-hero__links">
            <a href={emailLink.href}>Email John</a>
            <a href="#selected-impact">Selected impact</a>
            <a
              className="linkedin-link"
              href={linkedInLink.href}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="linkedin-link__icon" />
              LinkedIn
            </a>
          </div>
        </section>
      </PageContainer>

      <PageContainer className="home-section" id="selected-impact">
        <SectionHeading
          eyebrow="Selected impact"
          title="Systems with clear outcomes."
        />
        <div className="impact-list">
          {selectedImpact.map((highlight) => (
            <ImpactHighlight
              key={highlight.title}
              eyebrow={`${highlight.company} / ${highlight.role}`}
              title={highlight.title}
              metadata={highlight.metadata}
            >
              <p>{highlight.description}</p>
            </ImpactHighlight>
          ))}
        </div>
      </PageContainer>

      {recentPosts.length > 0 ? (
        <PageContainer className="home-section home-section--writing">
          <EditorialRule />
          <section className="home-writing">
            <SectionHeading eyebrow="Writing" title="Recent notes" />
            <ol className="home-writing__list">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <article>
                    <p className="metadata">{getWritingMeta(post)}</p>
                    <div>
                      <h3>
                        <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p>{post.description}</p>
                      <Link href={`/writing/${post.slug}`}>Read the note</Link>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
            <Link className="home-writing__all" href="/writing">
              View all writing
            </Link>
          </section>
        </PageContainer>
      ) : null}
    </div>
  )
}
