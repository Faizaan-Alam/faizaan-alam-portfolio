import { personal } from "../data/personal"

export default function Footer() {
  return (
    <footer className="border-t border-base-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-base-content/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p className="font-mono-ui text-xs tracking-[0.14em] uppercase">
          Developer · Writer · Athlete
        </p>
      </div>
    </footer>
  )
}
