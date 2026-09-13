import { useEffect, useState } from "react"
import { nav, personal } from "../data/personal"
import ThemeSwitcher from "./ThemeSwitcher"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`navbar sticky top-0 z-40 border-b border-base-300 bg-base-100 px-4 sm:px-8 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="navbar-start gap-2">
        <button
          type="button"
          className="btn btn-ghost btn-square lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
        <a href="#top" className="font-display text-lg tracking-tight">
          {personal.firstName}
          <span className="opacity-50"> {personal.lastName}</span>
        </a>
      </div>

      <nav className="navbar-center hidden lg:flex" aria-label="Primary">
        <ul className="menu menu-horizontal gap-0 px-1 text-sm">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="rounded-none">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar-end gap-2">
        <ThemeSwitcher />
        <a
          href={personal.resumePath}
          className="btn btn-primary btn-sm hidden sm:inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute top-full right-0 left-0 border-b border-base-300 bg-base-100 lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="menu w-full p-4">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={close}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={personal.resumePath} target="_blank" rel="noopener noreferrer" onClick={close}>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
