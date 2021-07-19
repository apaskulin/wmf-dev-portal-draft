#!/bin/bash

# Re-create the gh-pages branch to deploy to GitHub Pages
git branch -D gh-pages
git checkout -b gh-pages

# Move the build files into the main directory
cp -r docs/src/.vuepress/dist/* .

# Remove the 404 page since it confuses GitHub Pages
rm 404.html

# Remove the extra files
rm -r docs/*

# Commit and push the changes
git add .
git commit -m ":shipit:"
git push origin gh-pages --force
