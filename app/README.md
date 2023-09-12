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

## Getting Started

`create-next-app`

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
