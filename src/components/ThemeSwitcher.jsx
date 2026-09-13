import { useEffect, useState } from "react"
import { defaultTheme, THEME_STORAGE_KEY, themes } from "../data/themes"

function readTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) || defaultTheme
  } catch {
    return defaultTheme
  }
}

export default function ThemeSwitcher({ compact = false }) {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      /* ignore private-mode write failures */
    }
  }, [theme])

  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        tabIndex={0}
        className={`btn btn-sm ${compact ? "btn-ghost" : "btn-outline"}`}
        aria-haspopup="listbox"
        aria-label={`Colour theme, currently ${theme}`}
      >
        Theme
      </button>
      <div
        tabIndex={0}
        role="listbox"
        aria-label="Colour themes"
        className="dropdown-content bg-base-100 border border-base-300 z-50 mt-2 w-64 p-3 shadow-sm"
      >
        <p className="font-mono-ui mb-2 text-[11px] tracking-[0.18em] uppercase opacity-60">
          20 themes
        </p>
        <div className="grid grid-cols-2 gap-1">
          {themes.map((item) => (
            <button
              key={item.id}
              type="button"
              role="option"
              aria-selected={theme === item.id}
              onClick={() => setTheme(item.id)}
              className={`btn btn-sm btn-ghost justify-start font-normal ${
                theme === item.id ? "btn-active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
