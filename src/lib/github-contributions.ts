export type ContributionLevel = 0 | 1 | 2 | 3 | 4

export type ContributionDay = {
  date: string
  level: ContributionLevel
  count: number | null
}

export type ContributionCalendar = {
  total: number | null
  /** Columns of seven days, Sunday first, oldest week first. */
  weeks: (ContributionDay | null)[][]
}

export const contributionRevalidateSeconds = 60 * 60 * 24

/**
 * Reads the public contribution calendar GitHub renders on a profile page.
 * It needs no token, so it only sees what the profile shows publicly. Returns
 * null when GitHub is unreachable or its markup changes, so callers can fall
 * back to a plain link.
 */
export async function getContributionCalendar(
  username: string,
): Promise<ContributionCalendar | null> {
  try {
    const response = await fetch(
      `https://github.com/users/${encodeURIComponent(username)}/contributions`,
      {
        headers: { Accept: 'text/html' },
        next: { revalidate: contributionRevalidateSeconds },
      },
    )

    if (!response.ok) {
      return null
    }

    return parseContributionCalendar(await response.text())
  } catch {
    return null
  }
}

const dayCellPattern = /<td\b[^>]*\bContributionCalendar-day\b[^>]*>/g
const tooltipPattern =
  /<tool-tip\b[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g
const totalPattern = /([\d,]+)\s+contributions?\s+in the last year/

function readAttribute(tag: string, name: string) {
  return tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1]
}

function parseCount(label: string) {
  const match = label.trim().match(/^(No|[\d,]+) contributions?/)

  if (!match) {
    return null
  }

  return match[1] === 'No' ? 0 : Number(match[1].replaceAll(',', ''))
}

export function parseContributionCalendar(
  html: string,
): ContributionCalendar | null {
  const countsById = new Map<string, number | null>()

  for (const [, id, label] of html.matchAll(tooltipPattern)) {
    countsById.set(id, parseCount(label))
  }

  const days: ContributionDay[] = []

  for (const [tag] of html.matchAll(dayCellPattern)) {
    const date = readAttribute(tag, 'data-date')
    const level = Number(readAttribute(tag, 'data-level'))
    const id = readAttribute(tag, 'id')

    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      continue
    }

    days.push({
      date,
      level: (level >= 0 && level <= 4 ? level : 0) as ContributionLevel,
      count: id ? (countsById.get(id) ?? null) : null,
    })
  }

  if (days.length === 0) {
    return null
  }

  days.sort((a, b) => a.date.localeCompare(b.date))

  const weeks: (ContributionDay | null)[][] = []
  let week: (ContributionDay | null)[] = Array(
    new Date(`${days[0].date}T00:00:00Z`).getUTCDay(),
  ).fill(null)

  for (const day of days) {
    week.push(day)

    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  }

  if (week.length > 0) {
    weeks.push([...week, ...Array(7 - week.length).fill(null)])
  }

  const counted = days.every((day) => day.count !== null)
  const statedTotal = html.match(totalPattern)?.[1]

  return {
    total: counted
      ? days.reduce((sum, day) => sum + (day.count ?? 0), 0)
      : statedTotal
        ? Number(statedTotal.replaceAll(',', ''))
        : null,
    weeks,
  }
}
