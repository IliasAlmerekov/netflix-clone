# 🎬 NetflixClone

A fully functional, production-ready clone of [Netflix](https://www.netflix.com/) built with modern technologies and best practices in 2025.

## 🚀 Stack

- **Frontend:** React 19, TypeScript, Vite
- **State Management:** React Context, custom hooks (later Redux/RTK if needed)
- **Routing:** React Router DOM 7
- **Styling:** CSS Modules + Stylelint
- **Code Quality:** ESLint, Prettier, Commitlint, Husky, Lint-Staged
- **CI/CD:** GitHub Actions
- **Package Manager:** pnpm
- **Containerization:** Docker

## 📦 Installation

```bash
pnpm install


💻 Development

pnpm run dev

🧪 Linting & Formatting

pnpm run eslint       # ESLint check
pnpm run stylelint    # Stylelint check
pnpm run format       # Prettier formatting

📦 Build

pnpm run build

🐳 Docker

docker build -t netflix-clone .
docker run -p 4173:4173 netflix-clone

🔐 Git Hooks (Husky)
Hooks are automatically installed after pnpm install.

pnpm run prepare

📄 Project Structure

src/
├── app/              # Root App component and providers
├── pages/            # Route-level components
├── components/       # Reusable UI components
├── assets/           # Images, icons, fonts
├── styles/           # Global styles and variables
├── shared/           # Shared utils, types, lib
├── index.css
└── main.tsx

✅ CI/CD
Pull Requests and pushes to main or staging trigger:

Lint check (eslint, stylelint)

Docker build verification

📝 Commit Conventions
We follow Conventional Commits:

Examples:

git commit -m "feat: add hero section"
git commit -m "fix: responsive layout for footer"

📌 Versioning
We use Keep a Changelog
Current version: 0.0.1

👨‍💻 Author
Ilias Almerekov
GitHub: @IliasAlmerekov
```
