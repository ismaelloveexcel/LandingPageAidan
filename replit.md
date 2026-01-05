# Aidan's Vault

## Overview

Aidan's Vault is a horror-themed gaming portal inspired by Stranger Things, Squid Game, and dark sci-fi aesthetics. The application serves as a mysterious vault-like experience where users can access different "experiments," "worlds," and "prototypes" through interactive tile cards. The design emphasizes atmospheric mystery with glass morphism effects, pulsing red glows, and decorative horror elements like a Demogorgon silhouette.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style variant)
- **Build Tool**: Vite with React plugin

The frontend follows a pages-based structure with components organized by type (UI primitives in `client/src/components/ui/`). Path aliases are configured for clean imports (`@/` for client source, `@shared/` for shared types).

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ES modules)
- **API Style**: RESTful JSON API under `/api` prefix
- **Development**: tsx for TypeScript execution, Vite dev server with HMR

The server uses a modular structure with routes registered in `server/routes.ts` and storage abstracted behind an interface in `server/storage.ts`. Currently uses in-memory storage with a PostgreSQL-ready schema.

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Storage Pattern**: Interface-based storage allowing swap between memory and database implementations

Key entities:
- `users`: Authentication with username/password
- `appTiles`: Portal tiles with title, category, and href

### Design System
The application uses a dark horror theme with:
- Dark navy-black background (#0b0e14) with radial gradients
- Deep crimson accent (#9b1c2b) for emphasis
- Glass morphism effects (white overlays at 5-8% opacity)
- CSS custom properties for consistent theming
- Mobile-first responsive design (breakpoint at 768px)

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migrations and schema push (`npm run db:push`)

### UI Framework
- **Radix UI**: Headless component primitives (dialogs, dropdowns, tooltips, etc.)
- **Tailwind CSS**: Utility-first styling with custom configuration
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Frontend build and dev server
- **esbuild**: Server bundling for production
- **TypeScript**: Type checking across the stack

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development environment indicator