import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
  className?: string
  id?: string
  size?: 'wide' | 'standard' | 'reading'
}

export function PageContainer({
  children,
  className,
  id,
  size = 'wide',
}: PageContainerProps) {
  return (
    <div className={`page-${size}${className ? ` ${className}` : ''}`} id={id}>
      {children}
    </div>
  )
}

type SectionHeadingProps = {
  as?: 'h1' | 'h2'
  eyebrow?: string
  title: string
}

export function SectionHeading({
  as: Heading = 'h2',
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading className="section-heading__title">{title}</Heading>
    </div>
  )
}

export function EditorialRule() {
  return <hr className="editorial-rule" />
}

type TextLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode
  className?: string
}

export function TextLink({ children, className, ...props }: TextLinkProps) {
  return (
    <Link className={`text-link${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </Link>
  )
}

type MetadataRowProps = {
  items: string[]
}

export function MetadataRow({ items }: MetadataRowProps) {
  return (
    <ul className="metadata-row" aria-label="Project metadata">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

type ImpactHighlightProps = {
  eyebrow: string
  title: string
  children: ReactNode
  metadata?: string[]
}

export function ImpactHighlight({
  eyebrow,
  title,
  children,
  metadata,
}: ImpactHighlightProps) {
  return (
    <article className="impact-highlight">
      <p className="metadata">{eyebrow}</p>
      <h3 className="impact-highlight__title">{title}</h3>
      <div className="impact-highlight__content">{children}</div>
      {metadata ? <MetadataRow items={metadata} /> : null}
    </article>
  )
}
