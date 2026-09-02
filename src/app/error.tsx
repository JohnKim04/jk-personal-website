'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="error-page" aria-labelledby="error-title">
      <p className="eyebrow">Something went wrong</p>
      <h1 id="error-title">The page could not load.</h1>
      <p>Try again, or return home and start from the current site.</p>
      <div className="error-page__actions">
        <button type="button" onClick={reset}>
          Try again
        </button>
        <Link href="/">Return home</Link>
      </div>
    </section>
  )
}
