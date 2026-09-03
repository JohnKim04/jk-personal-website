import Link from 'next/link'
import type { ReactNode } from 'react'

import { PageContainer } from '@/components/editorial'
import { LinkedInIcon } from '@/components/linkedin-icon'
import { linkedInLink, professionalLinks, siteIdentity } from '@/content/site'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
]

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <PageContainer className="site-header__inner">
        <Link
          className="site-header__brand"
          href="/"
          aria-label="John Kim home"
        >
          John Kim
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="site-header__action linkedin-link"
          href={linkedInLink.href}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="linkedin-link__icon" />
          LinkedIn
        </a>
      </PageContainer>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <PageContainer className="site-footer__inner">
        <p className="site-footer__location metadata">
          {siteIdentity.location}
        </p>

        <nav aria-label="Professional links">
          <ul className="site-footer__links">
            {professionalLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={
                    link.href === linkedInLink.href
                      ? 'linkedin-link'
                      : undefined
                  }
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.href === linkedInLink.href ? (
                    <LinkedInIcon className="linkedin-link__icon" />
                  ) : null}
                  {link.label}
                  {link.href.startsWith('http') &&
                  link.href !== linkedInLink.href ? (
                    <span aria-hidden="true"> ↗</span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="site-footer__copyright metadata">© 2026 John Kim</p>
      </PageContainer>
    </footer>
  )
}
