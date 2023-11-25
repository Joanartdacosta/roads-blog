# Estradas

**This is a Web-App developed for a tourism blog called _Estrada fora, Paisagens adentro e outros lugares que tais_**.

> ![Estradas Fora, Paisagens adentro e outros lugares que tais](https://estradas-website.s3.amazonaws.com/Estradas/icons/logos/logo-estradas4.png)

The project applied **JavaScript, React and Next.js**.
In the website it will be possible to find information about several tours, viewpoints, media content around the world.

At the moment, it is under-construction.

[Website](https://roads-blog.vercel.app/)

## Github Workflow Steps

### Create a new feature

- `git checkout main`
- `git pull origin main`
- `git checkout -b "branch_name"`
- Code stuff
- `git add .`
- `git commit -m "description"`
- `git push origin "branch_name"`
- Merge feature branch to dev after PR is reviewed and approved
- Manually deploy dev branch using Vercel CLI
  - git checkout dev && git pull origin dev
  - cd app
  - npx vercel
- Ensure changes in dev are correct
- Merge feature branch to master after PR is reviewed and approved
- Manually deploy main branch using Vercel CLI
  - git checkout main && git pull origin main
  - cd app
  - npx vercel --prod

## Vercel

- Open Dashboard
- 'Add New Project'
- Import Git Repository

(if the repository is not available to import)

- Go to 'Adjust GitHub App Permissions →' and sign in
- On github - sidebar 'Integrations' - option 'Applications' - Vercel
- Section 'Repository access' - select 'Only select repositories' and choose the repository that you need to add
- Save options

- On vercel the repository will be available, then you import it
- On 'Configure project' check the root
- Deploy
