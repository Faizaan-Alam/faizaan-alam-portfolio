import { useState } from "react"
import { personal } from "../data/personal"

const links = [
  { label: "Email", href: `mailto:${personal.email}`, value: personal.email },
  { label: "Phone", href: personal.phoneHref, value: personal.phone },
  { label: "GitHub", href: personal.github, value: personal.githubHandle },
  { label: "LinkedIn", href: personal.linkedin, value: "faizaan-alam" },
]

const emptyForm = {
  name: "",
  email: "",
  message: "",
  company: "",
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState("")

  function update(field) {
    return (event) => {
      setForm((current) => ({ ...current, [field]: event.target.value }))
    }
  }

  async function onSubmit(event) {
    event.preventDefault()
    if (form.company) {
      setStatus("success")
      setForm(emptyForm)
      return
    }

    setStatus("sending")
    setError("")

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(personal.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
            _subject: personal.contactForm.subject,
            _template: "table",
            _captcha: "false",
          }),
        },
      )

      const data = await response.json().catch(() => ({}))
      const ok = response.ok && (data.success === true || data.success === "true")

      if (!ok) {
        throw new Error(data.message || "Could not send the message.")
      }

      setStatus("success")
      setForm(emptyForm)
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : personal.contactForm.error)
    }
  }

  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <header className="max-w-2xl">
          <p className="font-mono-ui text-xs tracking-[0.22em] uppercase opacity-60">
            08 · Contact
          </p>
          <h2 className="font-display mt-3 text-4xl tracking-tight">Write to me.</h2>
          <p className="mt-3 text-base-content/70">{personal.availability}</p>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            className="relative border border-base-300 p-6 sm:p-8"
            onSubmit={onSubmit}
            noValidate={false}
          >
            <p className="font-mono-ui text-[11px] tracking-[0.18em] uppercase opacity-50">
              Message
            </p>
            <p className="mt-2 text-sm text-base-content/70">
              Name, email, and a note. It arrives in my inbox, and I reply to the address you give.
            </p>

            <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.company}
                onChange={update("company")}
              />
            </div>

            <div className="mt-6 grid gap-5">
              <label className="block" htmlFor="contact-name">
                <span className="font-mono-ui text-[11px] tracking-[0.18em] uppercase opacity-50">
                  Name
                </span>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  className="input input-bordered mt-2 w-full rounded-none"
                />
              </label>

              <label className="block" htmlFor="contact-email">
                <span className="font-mono-ui text-[11px] tracking-[0.18em] uppercase opacity-50">
                  Email
                </span>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  className="input input-bordered mt-2 w-full rounded-none"
                />
              </label>

              <label className="block" htmlFor="contact-message">
                <span className="font-mono-ui text-[11px] tracking-[0.18em] uppercase opacity-50">
                  Message
                </span>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={update("message")}
                  className="textarea textarea-bordered mt-2 w-full rounded-none text-base leading-relaxed"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <a href={`mailto:${personal.email}`} className="link link-hover text-sm">
                Or email {personal.email}
              </a>
            </div>

            <div className="mt-4 min-h-6" aria-live="polite">
              {status === "success" ? (
                <p className="text-sm text-success">{personal.contactForm.success}</p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-error">
                  {error || personal.contactForm.error}{" "}
                  <a href={`mailto:${personal.email}`} className="link">
                    {personal.email}
                  </a>
                </p>
              ) : null}
            </div>
          </form>

          <ul className="grid content-start gap-4">
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
      </div>
    </section>
  )
}
