const localMetadataBase = new URL('http://localhost:3000')

/**
 * Returns the final HTTPS origin once it has been configured. Keeping this
 * optional lets the site work locally and on preview deployments before launch.
 */
export function getSiteUrl() {
  const value = process.env.SITE_URL

  if (!value) {
    return undefined
  }

  try {
    const url = new URL(value)

    if (
      url.protocol !== 'https:' ||
      url.username ||
      url.password ||
      url.pathname !== '/' ||
      url.search ||
      url.hash
    ) {
      return undefined
    }

    return url.origin
  } catch {
    return undefined
  }
}

/**
 * Supplies a safe metadata base in local and preview environments when no
 * final production origin has been configured yet.
 */
export function getMetadataBase() {
  const siteUrl = getSiteUrl()

  return siteUrl ? new URL(siteUrl) : localMetadataBase
}
