#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

echo "Preparing for deployment..."

echo "- Running tests..."
npx jest

echo "- Building site..."
npm run build

echo "- Commit any build artifacts..."
git add .
git commit -m "chore: build artifacts"



echo "Finished preparing for deployment."