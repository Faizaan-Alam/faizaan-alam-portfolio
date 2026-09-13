import { personal } from "../data/personal"

export default function Hero() {
  return (
    <section id="top" className="border-b border-base-300">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
        <div>
          <p className="font-mono-ui mb-4 text-xs tracking-[0.22em] uppercase text-base-content/60">
            {personal.kicker} · {personal.location}
          </p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-base-content sm:text-6xl lg:text-7xl">
            {personal.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-base-content/80">{personal.headline}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-base-content/70">
            {personal.shortIntro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a
              href={personal.resumePath}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume
            </a>
            <a
              href={personal.github}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact
            </a>
          </div>
          <p className="mt-6 max-w-xl text-sm text-base-content/60">{personal.availability}</p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <figure className="w-56 sm:w-64">
            <img
              src={personal.photo}
              alt={personal.photoAlt}
              width="300"
              height="300"
              className="aspect-square w-full rounded-full border border-base-300 object-cover"
            />
            <figcaption className="font-mono-ui mt-3 text-center text-[11px] tracking-[0.18em] uppercase opacity-50">
              {personal.name}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
