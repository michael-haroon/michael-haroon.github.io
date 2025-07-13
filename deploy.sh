#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Copy .nojekyll to dist
echo "Copying .nojekyll file..."
cp public/.nojekyll dist/

# Copy _redirects to dist
echo "Copying _redirects file..."
cp public/_redirects dist/

echo "Build complete! Files are in the dist/ directory"
echo "You can now deploy to GitHub Pages using:"
echo "npm run deploy" 