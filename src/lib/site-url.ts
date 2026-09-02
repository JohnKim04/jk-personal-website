/**
 * Returns the production origin once a domain has been configured. Keeping this
 * optional lets the site work locally and on preview deployments before launch.
 */
export function getSiteUrl() {
  const value = process.env.SITE_URL

  if (!value) {
    return undefined
  }

  try {
    return new URL(value).origin
  } catch {
    return undefined
  }
}
