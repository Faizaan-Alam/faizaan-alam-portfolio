import { education, personal } from "../data/personal"

export default function About() {
  return (
    <section id="about" className="border-b border-base-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <header>
          <p className="font-mono-ui text-xs tracking-[0.22em] uppercase opacity-60">01 · About</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight">Not only the editor.</h2>
        </header>

        <div>
          {personal.about.map((paragraph) => (
            <p key={paragraph} className="mb-4 max-w-prose text-[1.05rem] leading-relaxed text-base-content/80">
              {paragraph}
            </p>
          ))}

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {personal.facts.map((fact) => (
              <div key={fact.label} className="border border-base-300 p-4">
                <dt className="font-mono-ui text-[11px] tracking-[0.18em] uppercase opacity-50">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <h3 className="font-display text-2xl">Education</h3>
            <ul className="mt-4 space-y-4">
              {education.map((item) => (
                <li key={item.title} className="border-l border-base-300 pl-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-base-content/70">{item.org}</p>
                  {item.detail ? <p className="text-sm text-base-content/60">{item.detail}</p> : null}
                  <p className="font-mono-ui mt-1 text-xs opacity-60">{item.meta}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
