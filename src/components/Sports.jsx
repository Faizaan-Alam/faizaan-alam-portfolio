import { sports } from "../data/sports"

export default function Sports() {
  return (
    <section id="sports" className="bg-neutral text-neutral-content">
      <div className="lane-lines">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
          <header className="max-w-2xl">
            <p className="font-mono-ui text-xs tracking-[0.22em] uppercase opacity-60">
              06 · Sports
            </p>
            <h2 className="font-display mt-3 text-4xl tracking-tight">{sports.title}</h2>
            <p className="mt-3 text-neutral-content/75">{sports.intro}</p>
            <p className="mt-4 text-sm">
              {sports.role} · {sports.events.join(" · ")}
            </p>
          </header>

          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {sports.medals.map((medal) => (
              <li
                key={`${medal.place}-${medal.event}`}
                className="card-hover border border-neutral-content/20 p-6"
              >
                <p className="font-display text-5xl tracking-tight">{medal.place}</p>
                <p className="font-mono-ui mt-3 text-xs tracking-[0.18em] uppercase opacity-70">
                  {medal.event}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
