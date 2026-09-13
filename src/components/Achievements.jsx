import { achievements } from "../data/achievements"

export default function Achievements() {
  return (
    <section id="achievements" className="border-b border-base-300">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <header className="max-w-2xl">
          <p className="font-mono-ui text-xs tracking-[0.22em] uppercase opacity-60">
            07 · Achievements
          </p>
          <h2 className="font-display mt-3 text-4xl tracking-tight">A short record.</h2>
        </header>

        <ul className="mt-10 grid gap-4">
          {achievements.map((item) => (
            <li
              key={item.title}
              className="card-hover grid gap-2 border border-base-300 bg-base-100 px-5 py-5 sm:grid-cols-[140px_1fr_auto] sm:items-baseline"
            >
              <p className="font-mono-ui text-[11px] tracking-[0.16em] uppercase opacity-50">
                {item.kind}
              </p>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-base-content/70">{item.detail}</p>
              </div>
              <p className="font-mono-ui text-xs opacity-50">{item.year || ""}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
