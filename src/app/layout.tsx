import type { Metadata } from 'next'
import { Geist_Mono, Newsreader } from 'next/font/google'

import { SiteShell } from '@/components/site-shell'

import './globals.css'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const newsreader = Newsreader({
  axes: ['opsz'],
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  subsets: ['latin'],
  variable: '--font-newsreader',
  weight: 'variable',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'John Kim — Software Engineer',
    template: '%s — John Kim',
  },
  description:
    'Software engineer in San Francisco with experience across infrastructure, developer tooling, and checkout systems.',
  applicationName: 'John Kim',
  category: 'Technology',
  openGraph: {
    title: 'John Kim — Software Engineer',
    description:
      'Software engineer in San Francisco with experience across infrastructure, developer tooling, and checkout systems.',
    locale: 'en_US',
    siteName: 'John Kim',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Kim — Software Engineer',
    description:
      'Software engineer in San Francisco with experience across infrastructure, developer tooling, and checkout systems.',
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
