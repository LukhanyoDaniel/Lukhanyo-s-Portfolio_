# Deployment Guide

## Steps to Deploy to GitHub Pages

1. **Clean up any existing git state:**
   ```powershell
   cd Portfolio-main
   Remove-Item -Path .git -Recurse -Force -ErrorAction SilentlyContinue
   ```

2. **Initialize git repository:**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit - Portfolio deployment"
   ```

3. **Add remote repository:**
   ```powershell
   git remote add origin https://github.com/LukhanyoDaniel/Lukhanyo-s-Portfolio_.git
   git branch -M main
   ```

4. **Push to GitHub:**
   ```powershell
   git push -u origin main
   ```

5. **Install dependencies (if not already installed):**
   ```powershell
   npm install
   ```

6. **Deploy to GitHub Pages:**
   ```powershell
   npm run deploy
   ```

7. **Enable GitHub Pages in repository settings:**
   - Go to: https://github.com/LukhanyoDaniel/Lukhanyo-s-Portfolio_/settings/pages
   - Source: Select "gh-pages" branch
   - Folder: Select "/ (root)"
   - Click Save

Your portfolio will be live at: https://LukhanyoDaniel.github.io/Lukhanyo-s-Portfolio_/

