# React + Vite + Tailwind CSS

This project is built using:
- **React.js** (with TypeScript)
- **Vite** (for fast bundling and development)
- **Tailwind CSS** (for utility-first styling)
- **Zustand** (for global state management - theme toggling)

---

## Features
- **Dark / Light Theme Toggle** using Zustand for global state
- **Accordion Component** with dynamic icons based on theme
- **SVG Assets** for icons (plus, minus, arrows)
- **TypeScript Support**

---

## Folder Structure
```
src/
├── assets/ # SVG icons and static assets
│ ├── plus-icon.svg
│ ├── plus-icon-white.svg
│ ├── substract-icon.svg
│ ├── substract-icon-white.svg
│ ├── down-arrow.svg
│ ├── up-arrow.svg
│ └── react.svg
│
├── components/ # UI components
│ ├── accordion.tsx # Single accordion item
│ ├── accordions.tsx # Accordion list wrapper
│ └── dark-mode.tsx # Theme toggle button
│
├── store/
│ └── theme.ts # Zustand store for theme state
│
├── App.tsx # Main App component
├── index.css # Tailwind CSS imports
├── main.tsx # App entry point
└── vite-env.d.ts
```
