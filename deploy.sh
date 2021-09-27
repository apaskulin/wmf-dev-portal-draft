#!/bin/bash
# This script deploys the latest version of the main branch
# to GitHub pages via the gh-pages branch.

# Before running this script, make sure you have committed
# your changes to the main branch.

# Make sure the main branch is checked out
git checkout main

# Build the site
cd docs
npm run build

# Commit the build files to keep things simple in the main branch
git add .
git commit -m :shipit:
git push origin main
cd ..

# Recreate the gh-pages branch to deploy to GitHub Pages
git branch -D gh-pages
git checkout -b gh-pages

# Copy the build files into the root so GitHub Pages can find them
cp -r docs/src/.vuepress/dist/* .

# Commit and push changes
git add .
git commit -m :shipit:
git push origin gh-pages --force

# Checkout the main branch again to avoid confusion
git checkout main
