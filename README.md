# Kotluri Vasanth Kumar - Portfolio Website

Personal portfolio site for **Kotluri Vasanth Kumar** - AI/ML Engineer, Full Stack Developer & Cybersecurity Enthusiast, B.Tech in Artificial Intelligence at Mahindra University, Hyderabad.

- LinkedIn: https://linkedin.com/in/kotluri-vasanth
- GitHub: https://github.com/VASANTH777999
- LeetCode: https://leetcode.com/u/Kotluri-Vasanth

## Description

Showcases education, technical skills, work experience/internships, hackathon achievements, and projects through an animated, 3D-accented single-page portfolio.

## Tech Stack

- React 18 + `react-router-dom`
- `styled-components` for theming (dark/light)
- `framer-motion`, GSAP, and a custom particle-text loader for animation
- `@react-three/fiber` / `three.js` for the 3D Earth model
- `swiper` for mobile carousels
- `@emailjs/browser` for the contact form (no backend needed)

## Running Locally

### Option A - one-click `run.bat` (Windows)

Double-click [`run.bat`](run.bat) in this folder, or run it from `cmd`:

```cmd
run.bat
```

It will:
1. Check that Node.js is installed.
2. Run `npm install` automatically the first time (skipped on later runs).
3. Copy `.env.example` to `.env` if you don't have one yet.
4. Run `npm start` and open **http://localhost:3000** in your browser.

Press `Ctrl+C` in that window to stop the server.

### Option B - manual

```bash
npm install
npm start
```

Then open http://localhost:3000.

## EmailJS Setup (Contact Form)

The contact form sends mail via [EmailJS](https://www.emailjs.com/) - no server required. Configuration lives in environment variables (see `.env.example`), already filled in and connected to `kotlurivasanth@gmail.com`:

| Variable | Value |
|---|---|
| `REACT_APP_EMAILJS_SERVICE_ID` | `service_17iz094` |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | `template_bgriyg8` |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | `g5lM7VSKmXd5SduH9` |

The email template in the EmailJS dashboard must accept these fields sent by the form: `user_email`, `user_name`, `subject`, `message`.

`run.bat` copies `.env.example` to `.env` automatically on first run. If you ever rotate these keys, update `.env` (local) and the same three variables in Vercel's Project Settings -> Environment Variables (production), then restart `npm start` / redeploy - Create React App only reads env vars at build/startup time.

## Deploying to Vercel

This project is Vercel-ready out of the box via [`vercel.json`](vercel.json) (build command, output directory, and SPA rewrites for `react-router-dom`).

1. Push this repo to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. Framework preset: **Create React App** (auto-detected).
4. Add the three `REACT_APP_EMAILJS_*` environment variables from the table above in Project Settings -> Environment Variables.
5. Deploy. Every push to the connected branch redeploys automatically.

Or via CLI:

```bash
npm install -g vercel
vercel
```

## Notes

- All images (skill icons, project screenshots, hero/education/experience images) are currently reused placeholders from the previous version of this site and will be swapped out for real assets later.
- `npm run deploy` (GitHub Pages via `gh-pages`) still works as an alternate deployment path alongside Vercel.
