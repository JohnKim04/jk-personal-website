export type ExperienceHighlight = {
  company: string
  role: string
  title: string
  description: string
  metadata: string[]
}

export const selectedImpact: ExperienceHighlight[] = [
  {
    company: 'Coinbase',
    role: 'Software Engineer',
    title: 'Cloud-cost anomaly detection',
    description:
      'Building a cloud-cost anomaly-detection platform and the systems teams use to investigate issues.',
    metadata: ['Go', 'Postgres', 'Temporal'],
  },
  {
    company: 'Coinbase',
    role: 'Software Engineer',
    title: 'Less alert noise, faster resolution',
    description:
      'Built an anomaly-resolution portal that reduced repetitive alert noise by 70%.',
    metadata: ['Full stack', 'FinOps'],
  },
  {
    company: 'Shopify',
    role: 'Software Engineering Intern',
    title: 'Checkout systems at scale',
    description:
      'Contributed to a large-scale refactor across 600+ Sorbet T::Enum usages, checkout bug fixes, and a split-checkout frontend change associated with an 8% completion-rate increase.',
    metadata: ['Ruby', 'Sorbet', 'Checkout'],
  },
]

export const experienceTimeline = [
  {
    company: 'Coinbase',
    role: 'Software Engineer',
    period: 'Jun 2026 - Present',
  },
  {
    company: 'Shopify',
    role: 'Software Engineering Intern',
    period: 'Sep 2025 - Apr 2026',
  },
  {
    company: 'Coinbase',
    role: 'Software Engineering Intern',
    period: 'Jun 2025 - Sep 2025',
  },
] as const
