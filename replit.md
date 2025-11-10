# Photography Website

## Overview
A professional photography portfolio and booking website with a comprehensive admin panel for content management. The site showcases various photography services including baby shoots, maternity, newborn, model shoots, weddings, and birthdays. Built with React, Vite, Tailwind CSS, Express, and PostgreSQL.

## Project Architecture
- **Frontend**: React 18 with React Router for navigation
- **Backend**: Express server with RESTful API
- **Database**: PostgreSQL (Neon-backed) with Drizzle ORM
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS with shadcn/ui components
- **Languages**: TypeScript/TSX
- **Authentication**: Session-based with bcrypt password hashing

## Structure
```
src/
├── components/        # Reusable UI components (buttons, cards, badges)
├── pages/            # Page components including Admin Panel
│   ├── menu_pages/   # Service-specific menu pages
│   ├── AdminLogin.tsx       # Admin authentication
│   └── AdminDashboard.tsx   # Content management interface
├── screens/          # Main screen components
│   └── Desktop/      # Desktop layout components
├── hooks/            # Custom React hooks
│   └── useContent.tsx       # Content fetching hook
├── lib/              # Utility functions
├── App.tsx           # Main app with routing
└── index.tsx         # Entry point

server/
├── index.ts          # Express API server
├── db.ts             # Database connection
├── schema.ts         # Drizzle schema definitions
└── seed.ts           # Database seeding script
```

## Database Schema
- **admins**: Admin user accounts with hashed passwords
- **sections**: Website content sections (title, description, content)
- **images**: Image gallery with upload management

## API Endpoints
- **Authentication**:
  - POST `/api/auth/login` - Admin login
  - POST `/api/auth/logout` - Admin logout
  - GET `/api/auth/check` - Check authentication status

- **Content Management**:
  - GET `/api/sections` - Fetch all sections
  - GET `/api/sections/:id` - Fetch specific section
  - PUT `/api/sections/:id` - Update section (auth required)
  - POST `/api/sections` - Create section (auth required)

- **Image Management**:
  - GET `/api/images` - Fetch all images
  - POST `/api/images/upload` - Upload image (auth required)
  - PUT `/api/images/:id` - Update image (auth required)
  - DELETE `/api/images/:id` - Delete image (auth required)

## Recent Changes
- **2025-11-10**: Initial Replit setup
  - Set up Vite server to bind to 0.0.0.0:5000
  - Configured HMR for Replit's proxy environment
  - Installed all npm dependencies

- **2025-11-10**: Backend and Admin Panel Implementation
  - Created PostgreSQL database with Drizzle ORM
  - Built Express API server with session-based authentication
  - Implemented secure admin authentication with bcrypt
  - Created admin dashboard for content management
  - Added image upload functionality with multer
  - Integrated frontend with backend API for dynamic content
  - Implemented preview functionality before publishing
  - Seeded database with initial content

## Running the Project
### Development
Frontend runs on port 5000, backend on port 3001:
```bash
npm run server  # Start backend API
npm run dev     # Start frontend
```

Or run both concurrently:
```bash
npm start
```

### Database Management
```bash
npm run db:push   # Push schema changes to database
npm run db:seed   # Seed database with initial data
```

### Admin Access
- URL: `/admin/login`
- Default credentials:
  - Username: `admin`
  - Password: `admin123`

## Features
- Dynamic content management through admin panel
- Secure authentication and session management  
- Image upload and management
- Preview changes before publishing
- Live content updates across website
- Responsive design
- Professional photography showcase

## Deployment
- Static site build: `npm run build`
- Outputs to `dist/` directory
- Production-ready build optimized for performance
- Backend requires Node.js server environment
