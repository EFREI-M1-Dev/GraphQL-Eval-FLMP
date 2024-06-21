# Voyant

Voyant est une version alternative au blog Medium, offrant une plateforme de publication et de lecture d'articles de blog.

## Description

Voyant permet aux utilisateurs de créer, lire et commenter des articles de blog, tout comme sur Medium. Ce projet utilise une architecture moderne basée sur GraphQL pour la communication entre le frontend et le backend.

## Technologies utilisées

- **GraphQL** : Pour la gestion des requêtes et des mutations.
- **React** : Pour le frontend.
- **TypeScript** : Pour un typage statique et une meilleure maintenabilité du code.
- **NestJS** : Pour le backend.
- **Docker** : Pour containeriser les services et simplifier le déploiement.

## Installation

Pour installer et lancer le projet, suivez ces étapes :

1. Clonez le dépôt du projet :
```bash
  git clone https://github.com/votre-utilisateur/voyant.git
  cd voyant
```

2. Installez les dépendances pour le serveur et le client :
```bash
  cd server
  npm ci
  cd ../client
  npm ci
  cd ..
```

3. Lancez les services Docker :
```bash
  docker compose up -d
```

## Utilisation
Des comptes sont déjà créés pour vous permettre de tester l'application. Utilisez les identifiants suivants pour vous connecter :

- **Identifiants** : Alice, Bob, Diana ou Charlie
- **Mot de passe** : password

## Auteurs
Ce projet a été réalisé par :

- Mattéo
- Louis
- Pierre
- Florent
