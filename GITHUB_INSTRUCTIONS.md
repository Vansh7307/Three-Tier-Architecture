# GitHub Repository Setup Instructions

Follow these steps to create a GitHub repository and push your code:

## 1. Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and log in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Enter a name for your repository (e.g., "three-tier-architecture-aws")
4. Add a description: "Implementation of a three-tier architecture on AWS"
5. Choose whether to make the repository public or private
6. Click "Create repository"

## 2. Push Your Local Repository to GitHub

After creating the repository on GitHub, you'll see instructions to push an existing repository. Run the following commands in your terminal:

```bash
# Add the remote repository URL (replace USERNAME with your GitHub username and REPO_NAME with your repository name)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push your code to GitHub
git push -u origin master
```

You'll be prompted to enter your GitHub username and password. If you have two-factor authentication enabled, you'll need to use a personal access token instead of your password.

## 3. Verify Your Repository

1. Refresh your GitHub repository page
2. You should see all your files including:
   - index.html
   - script.js
   - style.css
   - Lambda.mjs
   - README.md
   - images/architecture-diagram.png

## 4. Share Your Repository

Once your repository is set up, you can share it with others by providing the repository URL:

```
https://github.com/USERNAME/REPO_NAME
```

This repository now contains your complete three-tier architecture implementation with detailed documentation in the README.md file. 