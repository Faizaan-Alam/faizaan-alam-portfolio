import { hobbies, hobbiesIntro } from "../data/hobbies"

export default function Hobbies() {
  return (
    <section id="hobbies" className="border-b border-base-300">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <header className="max-w-2xl">
          <p className="font-mono-ui text-xs tracking-[0.22em] uppercase opacity-60">
            05 — Hobbies
          </p>
          <h2 className="font-display mt-3 text-4xl tracking-tight">The other desk.</h2>
          <p className="mt-3 text-base-content/70">{hobbiesIntro}</p>
        </header>

        <div className="mt-12 grid gap-0 sm:grid-cols-2">
          {hobbies.map((hobby, index) => (
            <article
              key={hobby.id}
              className={`border-base-300 p-6 ${index % 2 === 0 ? "sm:border-r" : ""} border-t`}
            >
              <p className="font-mono-ui text-[11px] tracking-[0.18em] uppercase opacity-50">
                {hobby.kicker}
              </p>
              <h3 className="font-display mt-2 text-2xl italic">{hobby.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-base-content/75">{hobby.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
