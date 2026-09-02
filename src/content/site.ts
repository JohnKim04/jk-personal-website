export const siteIdentity = {
  name: 'John Kim',
  role: 'Software Engineer',
  location: 'San Francisco, CA',
  shortLocation: 'San Francisco',
  email: 'johnkim6144@gmail.com',
  education: {
    school: 'University of California, Santa Barbara',
    degree: 'B.S. in Computer Science',
    minor: 'Minor in Statistical Science',
    graduation: 'Graduated June 2026',
    gpa: '3.94 GPA',
  },
} as const

export const emailLink = {
  label: 'Email',
  href: `mailto:${siteIdentity.email}`,
} as const

export const linkedInLink = {
  label: 'LinkedIn',
  href: 'https://www.linkedin.com/in/johnkim00/',
} as const

export const githubLink = {
  label: 'GitHub',
  href: 'https://github.com/JohnKim04',
} as const

export const professionalLinks = [emailLink, linkedInLink, githubLink] as const

export const homepageContent = {
  heroLede:
    'Software engineer building reliable systems across infrastructure, developer tooling, and checkout.',
} as const

export const aboutContent = {
  narrative: [
    'I’m a software engineer in San Francisco. I’ve worked on cloud-cost tooling, developer tools, and checkout systems.',
    'I currently work at Coinbase, building tools for detecting and resolving cloud-cost anomalies. Before that, I worked on Shopify’s Checkout team, where I contributed to refactoring work, production bug fixes, and a split-checkout frontend experience. I also interned at Coinbase, working on tools for competitor intelligence.',
    'I graduated from UC Santa Barbara in June 2026 with a B.S. in Computer Science and a minor in Statistical Science. I like work that saves people time and makes their day-to-day less annoying.',
  ],
} as const
