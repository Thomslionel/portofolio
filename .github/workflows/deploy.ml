name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches:
      - main # Change en 'master' si ta branche principale s'appelle master

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20 # S'aligne sur la version Node d'Angular

      - name: Install Dependencies
        run: npm ci

      # ÉTAPE CLÉ : Remplacement des placeholders par tes clés secrètes GitHub
      - name: Inject EmailJS Secrets
        run: |
          sed -i "s|EMAILJS_SERVICE_ID_PLACEHOLDER|${{ secrets.EMAILJS_SERVICE_ID }}|g" src/environments/environment.ts
          sed -i "s|EMAILJS_TEMPLATE_ID_PLACEHOLDER|${{ secrets.EMAILJS_TEMPLATE_ID }}|g" src/environments/environment.ts
          sed -i "s|EMAILJS_PUBLIC_KEY_PLACEHOLDER|${{ secrets.EMAILJS_PUBLIC_KEY }}|g" src/environments/environment.ts

      # Remplacer [NOM_DE_TON_REPO] par le nom exact de ton dépôt GitHub (ex: portfolio)
      - name: Build Angular Application
        run: npx ng build --configuration production --base-href /[NOM_DE_TON_REPO]/

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist/[NOM_DE_TON_PROJET]/browser # Ajuste le chemin selon la structure générée dans ton dossier dist/
          branch: gh-pages