import Link from 'next/link'

import {
  EditorialRule,
  ImpactHighlight,
  PageContainer,
  SectionHeading,
} from '@/components/editorial'
import { selectedImpact } from '@/content/experience'
import { linkedInLink, siteIdentity } from '@/content/site'
import { getWritingMeta, writingPosts } from '@/content/writing'

export default function Home() {
  const upcomingPost = writingPosts[0]

  return (
    <div className="home-page">
      <PageContainer className="home-hero">
        <section className="home-hero__copy" aria-labelledby="home-title">
          <p className="eyebrow">
            {siteIdentity.role} / {siteIdentity.shortLocation}
          </p>
          <h1 id="home-title">{siteIdentity.name}</h1>
          <p className="home-hero__lede">
            Software engineer with experience across infrastructure, developer
            tooling, and checkout systems.
          </p>
          <div className="home-hero__links">
            <a href="#selected-impact">Selected impact</a>
            <a href={linkedInLink.href} target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <aside
          className="headshot-placeholder"
          aria-label="Headshot placeholder"
        >
          <p className="metadata">Headshot / pending</p>
          <p>
            A natural headshot will be added after John selects a final
            web-ready image.
          </p>
        </aside>
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

      <PageContainer className="home-section home-section--writing">
        <EditorialRule />
        <div className="writing-preview">
          <SectionHeading
            eyebrow="Writing"
            title="A considered first note is on the way."
          />
          <article className="writing-preview__post">
            <p className="metadata">{getWritingMeta(upcomingPost)}</p>
            <h3>{upcomingPost.title}</h3>
            <p>{upcomingPost.description}</p>
            <Link href={`/writing/${upcomingPost.slug}`}>
              View publishing placeholder
            </Link>
          </article>
        </div>
      </PageContainer>
    </div>
  )
}
