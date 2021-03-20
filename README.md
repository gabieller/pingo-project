# https://www.theroutingcompany.com

## Deploy instructions

- Set the source of the Github Pages to the branch `gh-pages /(root)`
- Set the custom domain in the for the desired domain: `theroutingcompany.com`
- Make sure you have git installed in your computer.

You can deploy to production in two ways:

## Manual deployment

Just execute these 2 commands from your terminal.

```bash
npm install
npm run deploy
```

## Automatic deployment

This project has Github Actions. Make sure you enable it in your repository. After that, all changes pushed to master should be automatically deployed.
