# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.0.2] - 2025-05-03

## Added

- Installed `react-router-dom` with TypeScript support
- Created `LandingPage.tsx` and CSS module
- Implemented routing with path `/`
- Hooked up `AppRouter` into `App.tsx`
- Created base production-ready `src/` structure with many folders
- Added full ESLint configuration using Flat Config with TS, React, React Hooks and a11ly rules
- Integrated Prettier with custom formatting rules
- Added Stylelint with standard config
- Setup Husky with pre-commit hooks running esling, stylelint, prettier and lint-staged
- Configured Commitlint with conventional commits
- Created Dockerfile for preview builds
  -Configured GitHub Actions CI (Lint, Build, Docker)
  -Created `staging` and `main` branches with protection rules
- Improved `README.md` with setup and usage instructions

## Changed

- Switched project structure to Classic Flat (removed FSD)
- Cleaned up reset old project state

## [0.0.1] — 2025-05-02

### Added

- Initial project setup with:
  - React + TypeScript + Vite
  - ESLint, Prettier, Stylelint with Git Hooks (Husky + Lint-staged)
  - GitHub Actions CI (lint, stylelint, docker build)
  - Classic Flat Structure project organization
  - Base routing and providers
