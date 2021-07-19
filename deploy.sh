#!/bin/bash
# Before running this script, make sure you have:
# * run `npm run build` from the docs directory
# * committed your changes to the main branch

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
