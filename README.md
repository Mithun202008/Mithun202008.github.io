# MITHUN // SYSTEM — Personal Portfolio & Technical Command Center

A high-performance personal portfolio website built with a **Dark Cyberpunk + Hacker Terminal + Modern Cloud Engineering** aesthetic.

Designed specifically for **Mithun Anbazhagan** (Computer Science & Engineering student at Chennai Institute of Technology), highlighting open-source systems engineering, network security tools, data-intensive web platforms, and cloud infrastructure.

---

## ⚡ Tech Stack & Architecture

- **Core**: React 18+ (Hooks, Context, Modular Architecture)
- **Tooling & Bundler**: Vite (Ultra-fast build, optimized static asset output)
- **Styling**: Tailwind CSS (Custom cyber design tokens, glowing borders, neon palettes, scanlines)
- **Typography**: Inter (Body) & JetBrains Mono (Technical telemetry & terminal)
- **Icons**: Lucide React
- **Deployment**: 100% Static HTML/CSS/JS (Ready for GitHub Pages, Vercel, or Netlify)

---

## 🚀 Quick Start (Local Development)

To run the portfolio locally on your machine:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 🛠️ Production Build

To test the production build:

```bash
npm run build
```

This compiles optimized static assets into the `dist/` directory with zero runtime server dependencies.

---

## 🌐 Deploying to GitHub Pages (`https://<username>.github.io`)

### Method 1: Automated Deployment via GitHub Actions (Recommended)

1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initialize MITHUN // SYSTEM portfolio"
   git branch -M main
   git remote add origin https://github.com/Mithun202008/<your-repo-name>.git
   git push -u origin main
   ```
2. On your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push any commit to `main` — the automated workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

### Method 2: Manual gh-pages deployment

```bash
npm run build
# You can push the contents of the `dist/` directory directly to a `gh-pages` branch.
```

---

## 📂 Content Customization

All portfolio content is centralized in **`src/data/portfolioData.js`**. You can easily modify:
- **Personal Details & Links**: Name, CGPA, social links, resume link
- **Projects**: Add or update mission files, repository links, tech chips
- **Skills**: Add or update categorized capabilities
- **Missions & Achievements**: Add hackathons, CTFs, and milestones
- **Certifications**: Add new verified credentials
