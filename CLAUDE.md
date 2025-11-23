# CLAUDE.md - AI Assistant Guide for Champions Hub

## Project Overview

Champions Hub is a modern React application showcasing a League of Legends champion browser with a visionOS-inspired UI design. Built with Vite and the Base44 SDK, it features a comprehensive UI component library using shadcn/ui and Radix UI primitives.

**Purpose**: A demo/showcase application displaying game characters with filtering and search capabilities, featuring glassmorphism UI effects and smooth animations.

## Tech Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Vite 6.1.0
- **Styling**: Tailwind CSS 3.4.17, tailwindcss-animate
- **UI Components**: shadcn/ui, Radix UI primitives
- **Routing**: React Router DOM 7.2.0
- **Forms**: React Hook Form 7.54.2, Zod validation
- **Backend SDK**: @base44/sdk 0.1.2
- **Charts**: Recharts 2.15.1
- **Animations**: Framer Motion 12.4.7
- **Testing**: Vitest 3.2.4, React Testing Library
- **Linting**: ESLint 9.19.0 with React plugins

## Project Structure

```
champions-hub/
├── src/
│   ├── api/                    # API client and integrations
│   │   ├── base44Client.js     # Base44 SDK client setup
│   │   ├── entities.js         # Entity exports
│   │   └── integrations.js     # SDK integration exports (LLM, Email, etc.)
│   ├── components/
│   │   └── ui/                 # shadcn/ui components (40+ components)
│   ├── hooks/                  # Custom React hooks
│   │   └── use-mobile.jsx      # Mobile detection hook
│   ├── lib/                    # Utility functions
│   │   ├── utils.js            # Class name utilities (cn)
│   │   └── utils.test.js       # Utils tests
│   ├── pages/                  # Page components
│   │   ├── index.jsx           # Router setup and page registry
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   └── Champions.jsx       # Main champions browser page
│   ├── App.jsx                 # Root application component
│   ├── App.test.jsx            # App component tests
│   ├── main.jsx                # Application entry point
│   ├── index.css               # Global styles and Tailwind directives
│   └── setupTests.js           # Test setup configuration
├── .github/
│   ├── workflows/ci.yml        # CI/CD pipeline
│   ├── dependabot.yml          # Dependency updates
│   └── PULL_REQUEST_TEMPLATE.md
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── vitest.config.js            # Vitest configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── eslint.config.js            # ESLint flat config
├── postcss.config.js           # PostCSS configuration
├── components.json             # shadcn/ui configuration
└── package.json                # Dependencies and scripts
```

## Key Files

| File | Purpose |
|------|---------|
| `src/main.jsx` | Application entry point, renders App to DOM |
| `src/App.jsx` | Root component with router and toaster |
| `src/pages/index.jsx` | React Router setup and page definitions |
| `src/pages/Champions.jsx` | Main page with visionOS-style UI |
| `src/api/base44Client.js` | Base44 SDK client configuration |
| `src/lib/utils.js` | Utility functions including `cn()` for class merging |
| `vite.config.js` | Build configuration with @ alias |
| `tailwind.config.js` | Tailwind theme and plugin configuration |
| `.github/workflows/ci.yml` | GitHub Actions CI/CD pipeline |

## Development Setup

### Prerequisites
- Node.js 18.x or 20.x
- npm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/mikeschlottig/champions-hub.git
cd champions-hub

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Run tests once (CI mode)
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run linting
npm run lint
```

## Testing

- **Framework**: Vitest with React Testing Library
- **Config**: `vitest.config.js`
- **Setup**: `src/setupTests.js`

### Test Files
- `src/App.test.jsx` - App component tests
- `src/lib/utils.test.js` - Utility function tests

### Running Tests
```bash
npm test              # Watch mode
npm run test:run      # Single run
npm run test:coverage # With coverage report
```

## Code Conventions

### Component Pattern
- Functional components with hooks
- Default exports for page components
- Named exports for UI components

### Styling Pattern
- Tailwind CSS utility classes
- `cn()` utility for conditional class merging
- CSS-in-JS for complex animations (inline styles)

### Import Aliases
- `@/` maps to `./src/` (configured in vite.config.js and jsconfig.json)

### File Naming
- React components: PascalCase (e.g., `Champions.jsx`)
- Utilities: kebab-case (e.g., `use-mobile.jsx`)
- Config files: kebab-case with .config.js suffix

### ESLint Rules
- React hooks rules enforced
- Prop-types disabled
- Unused vars as warnings (not errors)
- More lenient rules for UI components

## API Integration

### Base44 SDK
The app uses the Base44 SDK for backend services:

```javascript
import { base44 } from '@/api/base44Client';

// Available integrations
import { InvokeLLM, SendEmail, UploadFile, GenerateImage } from '@/api/integrations';

// Auth
import { User } from '@/api/entities';
```

## CI/CD

### GitHub Actions Pipeline
- **Triggers**: Push to main/develop, PRs to main
- **Matrix Testing**: Node.js 18.x and 20.x
- **Steps**: Install, Lint, Test, Build
- **Deployment**: Automatic to GitHub Pages on main branch

### Dependabot
- Automated dependency updates configured

## When Making Changes

1. **Follow existing patterns** - Use shadcn/ui components when possible
2. **Use import alias** - Always use `@/` for src imports
3. **Add tests** - Create tests for new functionality
4. **Run linter** - Use `npm run lint` before committing
5. **Test build** - Ensure `npm run build` succeeds
6. **Use cn()** - Merge Tailwind classes with the cn utility

## Issues & Recommendations

### Security Issues

1. **Hardcoded App ID** (HIGH)
   - File: `/home/user/repos/champions-hub/src/api/base44Client.js`
   - The Base44 appId is hardcoded. Should use environment variable.
   - Fix: Use `import.meta.env.VITE_BASE44_APP_ID`

2. **Vite allowedHosts: true** (MEDIUM)
   - File: `/home/user/repos/champions-hub/vite.config.js`
   - Setting `allowedHosts: true` can expose the dev server to unauthorized hosts.
   - Fix: Specify explicit allowed hosts or remove for production

### Code Quality Issues

3. **Direct DOM Manipulation** (MEDIUM)
   - File: `/home/user/repos/champions-hub/src/pages/Champions.jsx`
   - Uses `document.getElementById()` instead of React refs
   - Fix: Use `useRef` hooks for DOM element access

4. **Missing React.StrictMode** (LOW)
   - File: `/home/user/repos/champions-hub/src/main.jsx`
   - App not wrapped in StrictMode for development checks
   - Fix: Wrap App in `<React.StrictMode>`

5. **Large Inline CSS** (MEDIUM)
   - File: `/home/user/repos/champions-hub/src/pages/Champions.jsx`
   - ~100 lines of CSS animations in inline `<style>` tag
   - Fix: Move to separate CSS file or Tailwind config

6. **Package Name Mismatch** (LOW)
   - File: `/home/user/repos/champions-hub/package.json`
   - Package named "base44-app" but repo is "champions-hub"
   - Fix: Update to "champions-hub"

### Missing Features

7. **No Environment Configuration** (HIGH)
   - Missing `.env.example` file
   - No documentation of required environment variables
   - Fix: Create `.env.example` with VITE_BASE44_APP_ID

8. **Limited Test Coverage** (MEDIUM)
   - Only 2 test files with basic smoke tests
   - No tests for Champions page or API integrations
   - Fix: Add component tests, integration tests

9. **No Error Boundaries** (MEDIUM)
   - No error handling for component failures
   - Fix: Add React Error Boundary components

10. **Missing TypeScript** (LOW)
    - README claims TypeScript support but no .ts/.tsx files
    - Fix: Either add TypeScript or update README

11. **No License File** (LOW)
    - Missing LICENSE file in repository
    - Fix: Add appropriate license file

### Performance Issues

12. **External Image Dependencies** (MEDIUM)
    - Images loaded from external URLs (ddragon, supabase)
    - No fallback images or error handling for failed loads
    - Fix: Add onError handlers and placeholder images

13. **No Image Optimization** (LOW)
    - Large splash images loaded without optimization
    - Fix: Use srcset or lazy loading with intersection observer

### Recommended Improvements

- Add environment variable configuration with `.env.example`
- Implement error boundaries for graceful error handling
- Convert direct DOM manipulation to React refs
- Move inline styles to CSS modules or Tailwind config
- Increase test coverage to at least 60%
- Add PropTypes or migrate to TypeScript
- Implement image lazy loading and fallbacks
- Add a proper LICENSE file

## External Resources

- **Repository**: https://github.com/mikeschlottig/champions-hub
- **shadcn/ui docs**: https://ui.shadcn.com/
- **Vite docs**: https://vite.dev/
- **Tailwind CSS**: https://tailwindcss.com/
