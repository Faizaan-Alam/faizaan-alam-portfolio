import { useState } from "react"
import { projects } from "../data/projects"

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, "0")

  return (
    <article className="project-card flex h-full flex-col border border-base-300 bg-base-100">
      <div className="flex items-end justify-between border-b border-base-300 px-5 py-4">
        <p className="font-mono-ui text-xs tracking-[0.2em] uppercase opacity-50">{number}</p>
        <p className="font-mono-ui text-[11px] tracking-[0.16em] uppercase opacity-60">
          {project.tag}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-base-content/75">
          {project.description}
        </p>
        {project.highlights.length > 0 ? (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-base-content/65">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="badge badge-outline rounded-none">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.live ? (
            <a
              href={project.live}
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              className={`btn btn-sm ${project.live ? "btn-outline" : "btn-primary"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.filter((project) => project.featured)
  const extra = projects.filter((project) => !project.featured)
  const visible = showAll ? projects : featured

  return (
    <section id="projects" className="border-b border-base-300">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <header className="max-w-2xl">
          <p className="font-mono-ui text-xs tracking-[0.22em] uppercase opacity-60">
            04 · Projects
          </p>
          <h2 className="font-display mt-3 text-4xl tracking-tight">Things I have shipped.</h2>
          <p className="mt-3 text-base-content/70">
            Live demos are linked only when a public URL exists. Talksy is on the resume; its repository is not public.
          </p>
        </header>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {visible.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {extra.length > 0 ? (
          <div className="mt-8">
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
            >
              {showAll ? "Show featured only" : `Show ${extra.length} more on GitHub`}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
