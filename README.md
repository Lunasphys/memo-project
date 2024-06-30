
### README Mis à Jour
# Memo App

Memo App est une application de mémorisation basée sur la technique de la répétition espacée. Elle permet aux utilisateurs de créer des cartes de révision personnalisées, de les organiser en thèmes et catégories, et de réviser efficacement pour améliorer l'apprentissage et la rétention à long terme.

## Fonctionnalités

- **Gestion des thèmes et catégories :**
    - Les utilisateurs peuvent créer leurs propres catégories.
    - Au sein de chaque catégorie, les utilisateurs peuvent ajouter des thèmes.
    - Chaque thème contient un ensemble de cartes de révision.

- **Personnalisation des sessions de révision :**
    - Les utilisateurs choisissent le nombre de niveaux (boîtes) pour la révision.
    - Ils définissent le nombre de nouvelles cartes vues chaque jour.
    - Les cartes progressent à travers les boîtes basées sur la fréquence de révision.

- **Réponses et progression des cartes :**
    - Réponses incorrectes : Les cartes répondues incorrectement sont immédiatement renvoyées à la première boîte.
    - Réponses correctes : Les cartes correctes progressent à la boîte suivante jusqu'à être considérées comme apprises.

- **Options de contenu prédéfini et personnalisé :**
    - Les utilisateurs peuvent choisir des lots de cartes prédéfinis ou créer leurs propres cartes pour une personnalisation complète du contenu d'apprentissage.

- **Fonctionnement hors-ligne :**
    - Un service worker et un fichier MANIFEST permettent l'utilisation de l'application sans connexion internet.

## Technologies utilisées

- **Frontend :**
    - [Vite](https://vitejs.dev/) : Un build tool rapide et moderne.
    - [React](https://reactjs.org/) : Une bibliothèque JavaScript pour construire des interfaces utilisateur.
    - [TypeScript](https://www.typescriptlang.org/) : Un sur-ensemble typé de JavaScript.

- **Electron :**
    - Pour permettre le fonctionnement hors-ligne de l'application.

- **Gestion d'état :**
    - [Zustand](https://github.com/pmndrs/zustand) : Une bibliothèque de gestion d'état pour React.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)

## Installation

1. Clonez le dépôt :

   ```sh
   git clone git clone https://github.com/Lunasphys/memo-project.git
   cd memo-app
   ```

2. Installez les dépendances :

   ```sh
   npm install
   ```

## Développement

Pour lancer l'application en mode développement :

```sh
npm run dev
```

L'application sera ouverte dans votre navigateur.

## Utilisation en Mode Hors-Ligne

Pour utiliser l'application en mode hors-ligne, suivez ces étapes :

1. Construisez l'application pour la production :

   ```sh
   npm run build
   ```

2. Installez `serve` globalement si ce n'est pas déjà fait :

   ```sh
   npm install -g serve
   ```

3. Lancez l'application construite avec `serve` :

   ```sh
   serve -s dist
   ```

4. Une fois l'application ouverte dans votre navigateur, vous pouvez l'utiliser sans connexion Internet. Toutes les données seront sauvegardées localement.

## Scripts npm

- `dev`: Lance Vite en mode développement.
- `build`: Construit l'application pour la production.
- `serve`: Prévisualise l'application construite.
- `lint`: Exécute ESLint pour vérifier le code.

## Structure du projet

```
my-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── AddCardForm.tsx
│   │   ├── BoxVisualization.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── CategoryPage.tsx
│   │   ├── ThemePage.tsx
│   │   ├── ReviewPage.tsx
│   │   └── ...
│   ├── stores/
│   │   └── useStore.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── global.css
│
├── main.js
├── preload.js
├── package.json
├── tsconfig.json
└── vite.config.ts
```


---

