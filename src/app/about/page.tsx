import type { Metadata } from 'next'

import { PageContainer, SectionHeading } from '@/components/editorial'
import { experienceTimeline } from '@/content/experience'
import { aboutContent, siteIdentity } from '@/content/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Background and experience of John Kim, a software engineer based in San Francisco.',
}

export default function AboutPage() {
  return (
    <PageContainer className="about-page" size="standard">
      <section className="about-page__intro" aria-labelledby="about-title">
        <p className="eyebrow">About</p>
        <h1 id="about-title">{siteIdentity.name}</h1>
        <div className="about-page__narrative">
          {aboutContent.narrative.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <div className="about-page__grid">
        <section>
          <SectionHeading
            eyebrow="Education"
            title={siteIdentity.education.school}
          />
          <p className="about-page__detail">{siteIdentity.education.degree}</p>
          <p className="about-page__detail">{siteIdentity.education.minor}</p>
          <p className="about-page__detail">
            {siteIdentity.education.graduation} / {siteIdentity.education.gpa}
          </p>
        </section>

        <section>
          <SectionHeading eyebrow="Experience" title="A selected timeline" />
          <ol className="experience-timeline">
            {experienceTimeline.map((entry) => (
              <li key={`${entry.company}-${entry.role}`}>
                <p className="metadata">{entry.period}</p>
                <p>{entry.company}</p>
                <p>{entry.role}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </PageContainer>
  )
}
