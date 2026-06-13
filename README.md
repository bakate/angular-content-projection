# Démo de Projection de Contenu Angular

Ce projet démontre les techniques modernes de projection de contenu dans Angular 22, en utilisant PrimeNG pour le style.

## Fonctionnalités

La démo couvre les concepts clés suivants :

1. **ng-content basique** : Projection de contenu simple avec contenu de secours
2. **Slots nommés** : Projection de contenu avec slots sélectionnables par attributs ou classes CSS
3. **ng-container** : Utilisation de l'élément conteneur pour éviter les nœuds DOM supplémentaires
4. **NgTemplateOutlet** : Rendu dynamique de modèles avec contexte
5. **Syntaxe moderne Angular 22** : Utilisation de @if, @for, @switch au lieu des directives structurelles

## Pour commencer

### Prérequis

- Node.js (LTS)
- npm ou pnpm

### Installation

```bash
pnpm install
```

### Serveur de développement

Pour lancer un serveur de développement local, exécutez :

```bash
pnpm start
# ou
ng serve
```

Une fois le serveur en cours d'exécution, ouvrez votre navigateur et accédez à http://localhost:4200/. L'application se rechargera automatiquement chaque fois que vous modifierez l'un des fichiers source.

### Construction

Pour construire le projet :

```bash
pnpm build
# ou
ng build
```

Cela compilera votre projet et stockera les artefacts de construction dans le répertoire dist/. Par défaut, la build de production optimise votre application pour la performance et la vitesse.

## Déployer sur Vercel

### Étape 1 : Préparer votre dépôt
- Poussez votre code sur GitHub (public ou privé)
- Assurez-vous que votre dépôt est correctement commit (c'est déjà fait !)

### Étape 2 : Configurer Vercel
1. Allez sur vercel.com et connectez votre compte GitHub
2. Cliquez sur "New Project" et sélectionnez votre dépôt
3. Vercel devrait détecter automatiquement votre projet Angular !
4. Aucune configuration supplémentaire nécessaire - Vercel va :
   - Installer les dépendances
   - Construire le projet avec ng build
   - Déployer les ressources statiques depuis dist/

### Étape 3 : Déployer !
- Cliquez sur "Deploy" et Vercel s'occupe du reste !

## Ressources supplémentaires

- [Guide de Projection de Contenu Angular](https://angular.dev/guide/components/content-projection)
- [Syntaxe des Modèles Angular](https://angular.dev/guide/templates)
- [Documentation PrimeNG](https://primeng.org/)
- [Guide de Déploiement Vercel Angular](https://vercel.com/docs/frameworks/angular)
