import type { Metadata } from 'next'

import { PageContainer, SectionHeading } from '@/components/editorial'
import { experienceTimeline } from '@/content/experience'
import { aboutContent, siteIdentity } from '@/content/site'

const description =
  'Background and experience of John Kim, a software engineer based in San Francisco.'

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    description,
    images: [
      {
        alt: 'John Kim — Software Engineer',
        height: 630,
        url: '/opengraph-image',
        width: 1200,
      },
    ],
    locale: 'en_US',
    siteName: 'John Kim',
    title: 'About John Kim',
    type: 'website',
    url: '/about',
  },
  twitter: {
    card: 'summary_large_image',
    description,
    images: ['/opengraph-image'],
    title: 'About John Kim',
  },
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
        <section className="about-page__education">
          <SectionHeading
            eyebrow="Education"
            title={siteIdentity.education.school}
          />
          <p className="about-page__detail">{siteIdentity.education.degree}</p>
          <p className="about-page__detail">{siteIdentity.education.minor}</p>
          <p className="about-page__detail">
            {siteIdentity.education.graduation} / {siteIdentity.education.gpa}
          </p>
          <figure className="about-page__education-portrait">
            <img
              src="/images/john-full-grad.webp"
              alt="John Kim wearing a University of California, Santa Barbara graduation stole."
            />
            <figcaption className="metadata">
              UC Santa Barbara / Class of 2026
            </figcaption>
          </figure>
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
