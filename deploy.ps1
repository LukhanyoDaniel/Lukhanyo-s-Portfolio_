# Deployment Script for GitHub Pages
Write-Host "Starting deployment process..." -ForegroundColor Green

# Step 1: Check if git is initialized
if (Test-Path .git) {
    Write-Host "Git repository already exists. Cleaning up..." -ForegroundColor Yellow
    Remove-Item -Path .git -Recurse -Force
}

# Step 2: Initialize git
Write-Host "Initializing git repository..." -ForegroundColor Green
git init
git branch -M main

# Step 3: Add all files
Write-Host "Adding files to git..." -ForegroundColor Green
git add .

# Step 4: Commit
Write-Host "Creating initial commit..." -ForegroundColor Green
git commit -m "Initial commit - Portfolio deployment"

# Step 5: Add remote
Write-Host "Adding remote repository..." -ForegroundColor Green
git remote add origin https://github.com/LukhanyoDaniel/Lukhanyo-s-Portfolio_.git

# Step 6: Check if remote already exists and update if needed
$remoteCheck = git remote -v
if ($remoteCheck -match "origin") {
    Write-Host "Remote already exists. Updating..." -ForegroundColor Yellow
    git remote set-url origin https://github.com/LukhanyoDaniel/Lukhanyo-s-Portfolio_.git
}

# Step 7: Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Green
npm install

# Step 8: Deploy to GitHub Pages
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Green
npm run deploy

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Your portfolio will be available at: https://LukhanyoDaniel.github.io/Lukhanyo-s-Portfolio_/" -ForegroundColor Cyan
Write-Host "Don't forget to enable GitHub Pages in repository settings:" -ForegroundColor Yellow
Write-Host "https://github.com/LukhanyoDaniel/Lukhanyo-s-Portfolio_/settings/pages" -ForegroundColor Yellow

