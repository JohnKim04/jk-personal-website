import { MetadataRow } from '@/components/editorial'
import type { Project } from '@/content/projects'

export function ProjectShowcase({ project }: { project: Project }) {
  return (
    <article className="project">
      <div className="project__copy">
        <p className="metadata">
          {project.platform} / {project.status}
        </p>
        <h3 className="project__title">
          {project.href ? (
            <a href={project.href} target="_blank" rel="noreferrer">
              {project.name}
              <span aria-hidden="true"> ↗</span>
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="project__description">{project.description}</p>
        <MetadataRow items={project.metadata} />
      </div>

      <ul className="project__screens" aria-label={`${project.name} screens`}>
        {project.screenshots.map((screenshot) => (
          <li key={screenshot.src} className="phone-frame">
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              width={screenshot.width}
              height={screenshot.height}
              loading="lazy"
              decoding="async"
              className={
                screenshot.pixelArt ? 'phone-frame__pixel-art' : undefined
              }
            />
          </li>
        ))}
        {project.screenshots.length === 0 && project.placeholder ? (
          <li className="phone-frame phone-frame--placeholder">
            <img
              src={project.placeholder.iconSrc}
              alt=""
              width={256}
              height={256}
              loading="lazy"
              decoding="async"
            />
            <p className="metadata">{project.placeholder.note}</p>
          </li>
        ) : null}
      </ul>
    </article>
  )
}
