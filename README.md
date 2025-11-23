# Champions Hub

![CI/CD Pipeline](https://github.com/mikeschlottig/champions-hub/workflows/CI/CD%20Pipeline/badge.svg)

Champions Hub is a modern React application built with Vite and the Base44 SDK. This application provides a comprehensive UI library with shadcn/ui components and robust CI/CD pipeline.

## 🚀 Features

- **Modern React 18** with Vite for fast development
- **Comprehensive UI Library** with shadcn/ui and Radix UI components
- **Base44 SDK Integration** for backend communication
- **TypeScript Support** for type safety
- **Tailwind CSS** for styling
- **Testing Framework** with Vitest and Testing Library
- **Automated CI/CD** with GitHub Actions
- **Automated Deployments** to GitHub Pages

## 🛠️ Development

### Prerequisites

- Node.js 18.x or 20.x
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mikeschlottig/champions-hub.git
cd champions-hub

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your actual Base44 App ID
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_BASE44_APP_ID` | Your Base44 application ID (required) |

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Run tests in CI mode
npm run test:run

# Run tests with UI
npm run test:ui

# Run linting
npm run lint
```

## 🧪 Testing

This project uses Vitest as the testing framework with React Testing Library for component testing.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:run

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the main branch. The CI/CD pipeline includes:

- **Automated Testing** on Node.js 18.x and 20.x
- **Linting** to ensure code quality
- **Build Verification** to catch build issues
- **Automated Deployment** to GitHub Pages on successful builds

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── api/                # API integration
└── utils/              # Helper utilities
```

## 🔧 Built With

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Base44 SDK** - Backend integration
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Radix UI** - Primitive components
- **Vitest** - Testing framework
- **ESLint** - Code linting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project was created using Base44. For more information and support, please contact Base44 support at app@base44.com.

## 📊 CI/CD Status

- **Build Status**: Automated builds on push to main and develop branches
- **Testing**: Comprehensive test suite with Vitest
- **Deployment**: Automatic deployment to GitHub Pages
- **Dependencies**: Automated updates with Dependabot