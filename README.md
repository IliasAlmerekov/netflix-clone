# NetflixClone 🎬

A fully functional and production-ready Netflix clone built with modern tools and architecture — including React, TypeScript, Firebase, and Feature-Sliced Design.

---

## 🚀 Tech Stack

- ⚛️ React 18 + TypeScript
- ⚡ Vite
- 🔥 Firebase (Authentication, Firestore, Storage)
- 🎨 CSS Modules
- 🧠 Feature-Sliced Design
- 🧹 ESLint 9 FlatConfig + Prettier + Stylelint
- 🛡️ Commitlint + Husky + lint-staged
- 🛠 GitHub Actions (CI)
- 🐳 Docker (coming soon)

---

## 📦 Getting Started

```bash
git clone https://github.com/IliasAlmerekov/netflix-clone.git
cd netflix-clone
pnpm install
pnpm dev
```

Command | Description
pnpm dev | Start the development server
pnpm build | Build the project for production
pnpm preview | Preview the production build locally
pnpm lint | Run ESLint (code quality check)
pnpm stylelint | Run Stylelint (CSS quality check)
pnpm format | Format code with Prettier

## Project Structure

netflix-clone/
├── apps/
│ └── web/ # Main frontend app
├── packages/
│ ├── config/ # Shared config (ESLint, Prettier, etc.)
│ ├── firebase/ # Firebase logic (auth, db, etc.)
│ ├── ui/ # Shared UI components
│ └── utils/ # Utility functions
├── .github/workflows/ # CI/CD pipeline
├── .vscode/ # Editor settings
├── pnpm-workspace.yaml
├── README.md
└── ...

📌 Roadmap
Setup monorepo architecture

Configure ESLint, Prettier, Stylelint, Husky, Commitlint

Add CI pipeline (lint, stylelint)

Docker setup (dev & prod)

Firebase integration

Auth, profiles, favorites

Categories, search, responsive UI

Fully match Netflix UI/UX

## 🪪 License

### MIT – feel free to use, modify, and contribute.
