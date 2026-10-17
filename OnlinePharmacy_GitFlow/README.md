# Online Pharmacy — Git Flow Demo

A small, runnable demo project for practicing Git Flow branches. It uses plain HTML, CSS, and JavaScript, so no package installation is required.

## Run the website
1. Extract the ZIP.
2. Open `index.html` in a browser, or open this folder in VS Code and use Live Server.
3. This is a front-end demo only. It does not process real prescriptions, payments, or orders.

## Practice Git Flow
Open a terminal in this folder and run:

```bash
git init
git branch -M main
git add .
git commit -m "Initial online pharmacy project"
git switch -c develop
git switch -c feature/medicine-search
```

Add or edit a feature, then commit it:

```bash
git add .
git commit -m "Add medicine search feature"
git switch develop
git merge feature/medicine-search
```

Prepare a release:

```bash
git switch -c release/v1.0
git switch main
git merge release/v1.0
git tag v1.0
```

To view the branches and history:

```bash
git branch
git log --oneline --graph --all
```

### Important
This starter folder contains the application files, not pre-created Git branches. Run the commands above inside the extracted folder to create the Git history locally. For a real pharmacy, prescription verification, privacy, security, and payment processing require proper backend implementation and compliance review.
