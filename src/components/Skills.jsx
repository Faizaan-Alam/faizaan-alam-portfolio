import { skillGroups } from "../data/skills"

export default function Skills() {
  return (
    <section id="skills" className="border-b border-base-300">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <header className="max-w-2xl">
          <p className="font-mono-ui text-xs tracking-[0.22em] uppercase opacity-60">02 · Skills</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight">What I actually use.</h2>
          <p className="mt-3 text-base-content/70">
            Grouped by work, not by a percentage bar. Each tag is something on the resume or in a public repository.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <section key={group.id} className="card-hover border border-base-300 bg-base-100 p-6">
              <h3 className="font-display text-2xl">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span
                      className="badge badge-outline h-auto gap-0 rounded-none px-3 py-2 text-left font-normal"
                      title={item.evidence}
                    >
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-base-content/50">
                {group.items
                  .slice(0, 3)
                  .map((item) => `${item.name}: ${item.evidence}`)
                  .join(" · ")}
              </p>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
