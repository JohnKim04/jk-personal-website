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
    graduation: 'Expected June 2026',
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
