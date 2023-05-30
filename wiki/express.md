# Introduction à Express.js

## 1. Qu'est-ce que Express.js ?

- Express.js est un framework web minimaliste et flexible pour Node.js.
- Il simplifie le développement d'applications web en fournissant des fonctionnalités et des outils prêts à l'emploi.
- Express.js facilite la création de serveurs web et la gestion des routes, des requêtes et des réponses.
- Il permet de créer des API RESTful, des applications web, des applications en temps réel et bien plus encore.
- Express.js est basé sur le modèle de conception MVC (Modèle-Vue-Contrôleur), qui facilite la séparation des préoccupations et l'organisation du code.
- Il offre une multitude de middleware, qui sont des fonctions intermédiaires qui permettent d'ajouter des fonctionnalités supplémentaires à l'application, tels que le traitement des sessions, l'authentification, la compression, etc.
- Express.js est extensible et offre une grande flexibilité pour intégrer d'autres bibliothèques ou modules à votre application.
- Il est populaire et largement adopté par la communauté Node.js, ce qui signifie qu'il dispose d'une documentation complète, de nombreux exemples et d'un écosystème de modules développés par la communauté.

En résumé, Express.js est un framework web minimaliste, flexible et populaire pour Node.js. Il facilite le développement d'applications web en fournissant des fonctionnalités prêtes à l'emploi, en utilisant le modèle MVC et en offrant une grande flexibilité grâce à sa vaste gamme de middleware.

## 2. Installation d'Express.js

- Express.js est un module npm (Node Package Manager), ce qui signifie que vous pouvez l'installer à l'aide de la commande `npm install express`.
- Dans le terminal, exécutez la commande `npm init` pour initialiser un nouveau projet Node.js et créer un fichier `package.json`.
- Ensuite, exécutez la commande `npm install express -S` pour installer Express.js dans votre projet. Cela téléchargera les fichiers nécessaires et les ajoutera comme dépendance dans votre fichier `package.json`.
- Une fois l'installation terminée, vous pouvez utiliser Express.js dans votre projet en important le module dans vos fichiers JavaScript à l'aide de `require('express')`..

## 3. Configuration d'une application Express.js de base

```js
// Importation du module Express.js
const express = require("express");

// Création de l'instance de l'application Express
const app = express();

// Définition d'une route GET '/'
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Envoie une réponse "Hello, World!" au client
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
```

Dans cet exemple, nous importons le module Express.js, créons une instance de l'application Express, et définissons une route GET pour l'URL `'/'`. Lorsque cette route est atteinte, la fonction de callback est exécutée et renvoie la réponse "Hello, World!" au client. Ensuite, nous démarrons le serveur Express en écoutant les requêtes sur le port 3000.

Pour exécuter ce code, vous devez avoir Express.js installé dans votre projet en utilisant la commande `npm install express`, puis vous pouvez exécuter le fichier JavaScript contenant ce code en utilisant la commande `node nom-du-fichier.js`. Assurez-vous d'accéder à votre application via l'URL `http://localhost:3000` une fois le serveur démarré.

Cet exemple constitue une base simple pour une application Express.js, et vous pouvez ajouter davantage de routes, de middleware et de fonctionnalités en fonction des besoins de votre application.

## 4. Routage avec Express.js
