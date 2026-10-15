import { githubLink } from '@/content/site'
import {
  getContributionCalendar,
  type ContributionDay,
} from '@/lib/github-contributions'

const dateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
})

const monthFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  timeZone: 'UTC',
})

function toDate(day: ContributionDay) {
  return new Date(`${day.date}T00:00:00Z`)
}

function describeDay(day: ContributionDay) {
  const date = dateFormat.format(toDate(day))

  if (day.count === null) {
    return date
  }

  return `${day.count === 0 ? 'No' : day.count.toLocaleString('en-US')} ${
    day.count === 1 ? 'contribution' : 'contributions'
  } on ${date}`
}

// Label each month at its first column, skipping a partial first column and
// the last two columns so neighbouring labels never collide.
function getMonthLabels(weeks: (ContributionDay | null)[][]) {
  let previousMonth = -1

  return weeks.map((week, weekIndex) => {
    const firstDay = week.find((day) => day !== null)

    if (!firstDay) {
      return null
    }

    const month = toDate(firstDay).getUTCMonth()
    const isNewMonth = month !== previousMonth
    previousMonth = month

    if (
      !isNewMonth ||
      weekIndex >= weeks.length - 2 ||
      (weekIndex === 0 && week[0] === null)
    ) {
      return null
    }

    return monthFormat.format(toDate(firstDay))
  })
}

export async function ContributionGraph({ username }: { username: string }) {
  const calendar = await getContributionCalendar(username)

  if (!calendar) {
    return (
      <p className="contribution-graph__fallback">
        <a href={githubLink.href} target="_blank" rel="noreferrer">
          See my activity on GitHub
        </a>
      </p>
    )
  }

  const monthLabels = getMonthLabels(calendar.weeks)
  const summary =
    calendar.total === null
      ? 'GitHub contributions in the last year'
      : `${calendar.total.toLocaleString('en-US')} GitHub contributions in the last year`

  return (
    <figure className="contribution-graph">
      <div className="contribution-graph__scroller">
        <div
          className="contribution-graph__grid"
          role="img"
          aria-label={summary}
        >
          {calendar.weeks.map((week, weekIndex) => {
            return [
              <span
                key={`label-${weekIndex}`}
                className="contribution-graph__month"
                aria-hidden="true"
              >
                {monthLabels[weekIndex]}
              </span>,
              ...week.map((day, dayIndex) =>
                day ? (
                  <span
                    key={day.date}
                    className="contribution-graph__day"
                    data-level={day.level}
                    title={describeDay(day)}
                  />
                ) : (
                  <span
                    key={`empty-${weekIndex}-${dayIndex}`}
                    className="contribution-graph__day contribution-graph__day--empty"
                  />
                ),
              ),
            ]
          })}
        </div>
      </div>
      <figcaption className="contribution-graph__caption metadata">
        <a href={githubLink.href} target="_blank" rel="noreferrer">
          {summary}
          <span aria-hidden="true"> ↗</span>
        </a>
        <span className="contribution-graph__legend" aria-hidden="true">
          Less
          {[0, 1, 2, 3, 4].map((level) => (
            <span
              key={level}
              className="contribution-graph__day"
              data-level={level}
            />
          ))}
          More
        </span>
      </figcaption>
    </figure>
  )
}
