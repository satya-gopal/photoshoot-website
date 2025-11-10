# Photography Website

## Overview
A professional photography portfolio and booking website showcasing various photography services including baby shoots, maternity, newborn, model shoots, weddings, and birthdays. Built with React, Vite, and Tailwind CSS.

## Project Architecture
- **Frontend**: React 18 with React Router for navigation
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS with shadcn/ui components
- **Languages**: TypeScript/TSX

## Structure
```
src/
├── components/        # Reusable UI components (buttons, cards, badges)
├── pages/            # Page components for different routes
│   └── menu_pages/   # Service-specific menu pages
├── screens/          # Main screen components
│   └── Desktop/      # Desktop layout components
├── lib/              # Utility functions
├── App.tsx           # Main app with routing
└── index.tsx         # Entry point
```

## Recent Changes
- **2025-11-10**: Configured for Replit environment
  - Set up Vite server to bind to 0.0.0.0:5000
  - Configured HMR for Replit's proxy environment
  - Installed all npm dependencies
  - Verified website loads and runs correctly

## Running the Project
- Development server runs on port 5000
- Uses `npm run dev` command
- Vite handles hot module replacement

## Deployment
- Static site build: `npm run build`
- Outputs to `dist/` directory
- Production-ready build optimized for performance
