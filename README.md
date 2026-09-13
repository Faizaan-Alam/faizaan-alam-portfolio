# Faizaan Alam — personal site

Resume and portfolio site for **Faizaan Alam**.

React + Vite + JavaScript, styled with **Tailwind CSS** and **DaisyUI**. Twenty DaisyUI themes ship with the site. Personal information lives in `src/data/` so you can edit copy without digging through components.

## Run locally

You need Node.js 20+.

```bash
cd faizaan-portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

`npm run preview` serves the production build locally.

## How to edit

| What you want to change | File |
| --- | --- |
| Name, bio, email, phone, GitHub, LinkedIn, photo path | `src/data/personal.js` |
| Skills | `src/data/skills.js` |
| Internships and campus roles | `src/data/experience.js` |
| Projects (add / remove / live URL) | `src/data/projects.js` |
| Hobbies | `src/data/hobbies.js` |
| Sports medals | `src/data/sports.js` |
| Achievements | `src/data/achievements.js` |
| Theme list | `src/data/themes.js` **and** `src/index.css` |
| Page title / meta description | `index.html` and `src/data/personal.js` (`seo`) |

Uncertain facts from research are listed in `src/data/needsConfirmation.js`. That file is **not** shown on the site.

### Add a project

Open `src/data/projects.js` and copy an existing object:

```js
{
  id: "new-project",
  title: "New project",
  tag: "Web",
  featured: true,
  description: "One or two sentences.",
  highlights: ["Optional bullet"],
  technologies: ["React"],
  github: "https://github.com/Faizaan-Alam/repo",
  live: "https://example.com",   // use "" if there is no live demo
  image: "/images/projects/new-project.svg",
}
```

Leave `github` or `live` as `""` to hide that button. Do not invent URLs.

### Replace photos

Keep the filename. Refresh the page (hard refresh if the old image sticks).

```text
public/images/profile/faizaan.webp     your portrait (already taken from the resume)
public/images/profile/faizaan.png      PNG copy of the same portrait
public/images/hobbies/poetry.svg       swap for poetry.webp if you prefer
public/images/sports/sprint.svg
public/images/projects/pratibimb.svg
public/resume/Faizaan_Alam_Resume.pdf
```

Hobby and project files in `public/images/` are labelled placeholders. They are not photographs of you.

### Change or add a DaisyUI theme

1. Add the theme id to the list in `src/data/themes.js`.
2. Add the same id inside the `@plugin "daisyui" { themes: ... }` block in `src/index.css`.

The site currently enables **20** built-in DaisyUI themes. The chosen theme is stored in `localStorage` under `faizaan-theme`.

Do not use DaisyUI's `glass` class. This site is intentionally not glassmorphism.

## Deploy

### Vercel (simplest, matches your other sites)

1. Push this folder to GitHub.
2. Import the repo in [Vercel](https://vercel.com).
3. Framework: Vite. Build command: `npm run build`. Output: `dist`.
4. Leave `VITE_BASE` unset so the site is served from `/`.

### GitHub Pages

1. Push to GitHub.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds with `VITE_BASE=/<repo-name>/`.
4. If this repo is a user site (`Faizaan-Alam.github.io`) or you attach a custom domain, set `VITE_BASE` to `/` in that workflow.

### Custom domain

After Vercel or GitHub Pages is live:

1. Buy or point a domain (Namecheap, Cloudflare, Google Domains, etc.).
2. **Vercel:** Project → Settings → Domains → add `yourdomain.com` and follow the DNS records.
3. **GitHub Pages:** Settings → Pages → Custom domain. Add a `CNAME` file in `public/` containing your domain, or set it in the GitHub UI. At your DNS host, add:

   ```text
   CNAME  www  <username>.github.io
   A      @    185.199.108.153
   A      @    185.199.109.153
   A      @    185.199.110.153
   A      @    185.199.111.153
   ```

4. Do not hardcode a temporary `*.vercel.app` URL inside `src/data/`. Keep links relative (`/resume/...`) except for GitHub, LinkedIn, and live project demos.

## Push to GitHub

```bash
cd faizaan-portfolio
git init
git add .
git commit -m "Add personal resume and portfolio site"
git branch -M main
git remote add origin https://github.com/Faizaan-Alam/YOUR-REPO.git
git push -u origin main
```

## Stack

- React 19 and Vite (JavaScript)
- Tailwind CSS 4
- DaisyUI 5 (20 themes)
- No backend, no environment variables required

The site is a static build. You can host it on GitHub Pages, Vercel, Netlify, or a phone/server that can serve the `dist/` folder.
