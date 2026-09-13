import { experience, leadership } from "../data/experience"

export default function Experience() {
  return (
    <section id="experience" className="border-b border-base-300">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <header className="max-w-2xl">
          <p className="font-mono-ui text-xs tracking-[0.22em] uppercase opacity-60">
            03 · Experience
          </p>
          <h2 className="font-display mt-3 text-4xl tracking-tight">Internships and the campus.</h2>
        </header>

        <ol className="mt-12 space-y-0">
          {experience.map((job) => (
            <li
              key={`${job.org}-${job.role}`}
              className="grid gap-4 border-t border-base-300 py-8 md:grid-cols-[200px_1fr]"
            >
              <div>
                <p className="font-mono-ui text-xs tracking-[0.16em] uppercase opacity-60">
                  {job.duration}
                </p>
                <p className="mt-1 text-sm text-base-content/60">{job.type}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl">{job.role}</h3>
                <p className="text-base-content/70">{job.org}</p>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-base-content/80">
                  {job.summary}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-base-content/70">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {job.technologies.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <li key={tech} className="badge badge-ghost rounded-none">
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <h3 className="font-display mt-8 text-3xl tracking-tight">Positions of responsibility</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {leadership.map((item) => (
            <article key={`${item.org}-${item.role}`} className="border border-base-300 p-5">
              <p className="font-mono-ui text-[11px] tracking-[0.16em] uppercase opacity-50">
                {item.duration || "Campus"}
              </p>
              <h4 className="font-display mt-1 text-xl">{item.role}</h4>
              <p className="text-sm text-base-content/70">{item.org}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-base-content/70">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
