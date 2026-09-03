type LinkedInIconProps = {
  className?: string
}

export function LinkedInIcon({ className }: LinkedInIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55a.55.55 0 0 0-.55-.55ZM8.34 18.34H5.67V9.76h2.67v8.58ZM7 8.59a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.75h-2.66v-4.18c0-1 0-2.28-1.39-2.28-1.4 0-1.61 1.09-1.61 2.21v4.25h-2.67V9.76h2.56v1.17h.04c.36-.68 1.23-1.39 2.53-1.39 2.7 0 3.2 1.78 3.2 4.09v4.71Z" />
    </svg>
  )
}
