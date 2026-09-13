import { personal } from "../data/personal"

const links = [
  { label: "Email", href: `mailto:${personal.email}`, value: personal.email },
  { label: "Phone", href: personal.phoneHref, value: personal.phone },
  { label: "GitHub", href: personal.github, value: personal.githubHandle },
  { label: "LinkedIn", href: personal.linkedin, value: "faizaan-alam" },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <header className="max-w-2xl">
          <p className="font-mono-ui text-xs tracking-[0.22em] uppercase opacity-60">
            08 — Contact
          </p>
          <h2 className="font-display mt-3 text-4xl tracking-tight">Write to me.</h2>
          <p className="mt-3 text-base-content/70">{personal.availability}</p>
        </header>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {links.map((item) => (
            <li key={item.label} className="border border-base-300 p-5">
              <p className="font-mono-ui text-[11px] tracking-[0.18em] uppercase opacity-50">
                {item.label}
              </p>
              <a
                href={item.href}
                className="mt-2 inline-block text-lg underline-offset-4 hover:underline"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
