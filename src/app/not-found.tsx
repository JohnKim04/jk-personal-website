import Link from 'next/link'

import { PageContainer } from '@/components/editorial'

export default function NotFound() {
  return (
    <PageContainer className="not-found-page" size="reading">
      <p className="eyebrow">404 / Not found</p>
      <h1>This page is not here.</h1>
      <p>
        The link may be out of date, or the page may not exist yet. Head back
        home to find the current work and writing.
      </p>
      <Link className="text-link" href="/">
        Return home
      </Link>
    </PageContainer>
  )
}
