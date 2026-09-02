import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { SiteShell } from '@/components/site-shell'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
