# Michael Haroon - Personal Portfolio

A beautiful, modern personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Vite
- 🎯 SEO optimized
- 📱 Mobile-first approach
- 🔒 Security-aware development

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://michaelharoon.github.io`

### Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# The dist/ folder contains your built site
# You can deploy this to any static hosting service
```

## Configuration

- **Base URL**: Configured for GitHub Pages with relative paths
- **Routing**: Client-side routing with proper 404 handling
- **Build Output**: `dist/` directory

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
- React Router DOM

## Security

This project follows security best practices:
- No sensitive data exposed in frontend
- Proper environment variable handling
- Secure dependency management
