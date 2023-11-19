# Estradas

**This is a Web-App developed for a tourism blog called _Estrada fora, Paisagens adentro e outros lugares que tais_**.

> ![Estradas Fora, Paisagens adentro e outros lugares que tais](https://estradas-website.s3.amazonaws.com/Estradas/roads-logo.png)

The project applied **JavaScript, React and Next.js**.
In the website it will be possible to find information about several tours, viewpoints, media content around the world.

At the moment, it is under-construction.

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

# Vercel deployment

- Open https://vercel.com/dashboard
- Add new project
- Import repository

Note: If the repository does not exist yet in vercel repositories list

- Open Github ('Adjust GitHub App Permissions →')
- Integrations -> Applications -> Vercel -> Repository access -> Only select repositories -> Select repositories -> Search for the repository

- In configure repository, go to 'Deploy'
