import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// Set VITE_BASE=/your-repo-name/ for GitHub Pages project sites.
// Leave unset (default "/") for Vercel, Netlify, or a custom domain.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE || "/",
})
