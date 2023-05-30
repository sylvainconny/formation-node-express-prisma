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

- Le routage est un aspect essentiel de la création d'applications web avec Express.js.
- Express.js facilite la définition et la gestion des routes à l'aide de méthodes de routage.
- Les méthodes de routage couramment utilisées dans Express.js sont `get`, `post`, `put`, `delete`, etc.
- Chaque méthode de routage est associée à une URL spécifique (ou un chemin) et une fonction de rappel qui sera exécutée lorsque cette route est atteinte.
- Par exemple, `app.get('/users', callback)` définit une route GET pour l'URL `/users` et exécute le callback lorsque cette route est atteinte.
- Les routes peuvent également inclure des paramètres dynamiques définis en utilisant des variables dans l'URL, tels que `/users/:id`, où `:id` est un paramètre dynamique qui peut être extrait de la requête.
- Express.js prend en charge les modèles de routes plus complexes en utilisant des expressions régulières ou des chaînes de caractères avec des paramètres optionnels.
- Vous pouvez également définir des routes imbriquées en utilisant `app.use()` pour organiser et gérer des routes spécifiques à un groupe ou à une partie de l'application.
- L'ordre des routes est important, car Express.js évalue les routes de manière séquentielle et utilise la première route correspondante qu'il rencontre.
- Il est courant d'utiliser des middleware pour effectuer des opérations de traitement supplémentaires avant d'atteindre la route finale.

En résumé, le routage avec Express.js consiste à définir des routes qui correspondent à des URL spécifiques et à associer des fonctions de rappel à ces routes. Express.js offre une variété de méthodes de routage pour gérer les différentes actions HTTP. Vous pouvez également utiliser des paramètres dynamiques, des modèles de routes complexes et des routes imbriquées pour créer des applications web plus avancées. Le routage avec Express.js permet de définir la logique de votre application et de gérer les requêtes des clients de manière organisée et structurée.

**Exemple 1: Route simple**

```javascript
app.get("/", (req, res) => {
  res.send("Accueil");
});

app.get("/about", (req, res) => {
  res.send("À propos de nous");
});
```

Dans cet exemple, nous définissons deux routes GET. La première route correspond à l'URL `'/'` et renvoie la réponse "Accueil". La deuxième route correspond à l'URL `'/about'` et renvoie la réponse "À propos de nous".

**Exemple 2: Route avec paramètre dynamique**

```javascript
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Utilisateur avec l'ID ${userId}`);
});
```

Dans cet exemple, nous définissons une route GET avec un paramètre dynamique `:id`. Lorsque cette route est atteinte, nous extrayons la valeur de l'ID à partir de `req.params.id` et renvoyons une réponse avec l'ID correspondant.

**Exemple 3: Routes imbriquées**

```javascript
const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.send("Page d'administration");
});

adminRouter.get("/users", (req, res) => {
  res.send("Liste des utilisateurs");
});

app.use("/admin", adminRouter);
```

Dans cet exemple, nous définissons des routes imbriquées en créant un routeur (`express.Router()`) pour les routes d'administration. Le routeur `adminRouter` définit deux routes GET, une pour l'URL `'/admin'` et une pour l'URL `'/admin/users'`. Nous utilisons ensuite `app.use('/admin', adminRouter)` pour indiquer à Express d'utiliser ce routeur pour toutes les routes qui commencent par `'/admin'`.

Ces exemples illustrent différents cas de routage avec Express.js, allant des routes simples aux routes avec des paramètres dynamiques et des routes imbriquées. Vous pouvez les utiliser comme point de départ et les adapter en fonction des besoins de votre application.

**Exemple 4: Route POST**

```javascript
// Importer le middleware body-parser pour analyser le corps de la requête au format JSON
const bodyParser = require("body-parser");

// Utiliser le middleware body-parser pour analyser le corps de la requête au format JSON
app.use(bodyParser.json());

// Définir la route POST '/users'
app.post("/users", (req, res) => {
  const { name, email } = req.body; // Supposons que le corps de la requête est au format JSON avec les champs 'name' et 'email'
  // Effectuer des opérations pour créer un nouvel utilisateur avec les données fournies
  res.send("Utilisateur créé avec succès");
});
```

Dans cet exemple, nous utilisons le middleware `body-parser` pour analyser le corps de la requête au format JSON. Nous l'importons et l'utilisons en tant que middleware dans notre application Express avec `app.use(bodyParser.json())`.

Ensuite, nous définissons une route POST `/users`. Lorsque cette route est atteinte, la fonction de rappel est exécutée. Nous supposons que le corps de la requête est au format JSON avec les champs `name` et `email`, que nous extrayons à l'aide de `req.body`.

Vous pouvez adapter ce code en fonction de la structure de votre corps de requête JSON et des opérations que vous souhaitez effectuer avec les données. Assurez-vous d'importer et d'utiliser correctement le middleware `body-parser` pour analyser le corps de la requête au format JSON.

## 5. Middlewares dans Express.js

Les middlewares jouent un rôle central dans Express.js en permettant d'effectuer des opérations de traitement supplémentaires entre la réception d'une requête et la réponse envoyée au client. Les middlewares agissent comme des fonctions intermédiaires qui peuvent modifier la requête, effectuer des validations, ajouter des fonctionnalités et bien plus encore. Voici quelques points importants à retenir :

- Un middleware est une fonction qui reçoit trois arguments : `req` (pour la requête), `res` (pour la réponse) et `next` (pour passer au middleware suivant).
- Vous pouvez utiliser la méthode `app.use()` pour appliquer un middleware à toutes les routes, ou `app.use(path, middleware)` pour l'appliquer à des routes spécifiques.
- L'ordre des middlewares est important car ils sont exécutés dans l'ordre où ils sont définis. Il est recommandé de définir les middlewares avant les routes pour qu'ils soient exécutés avant le traitement des routes.
- Les middlewares peuvent être utilisés pour effectuer diverses tâches, telles que l'analyse du corps de la requête, la gestion des erreurs, l'authentification, l'autorisation, la journalisation, la compression, etc.
- Vous pouvez créer vos propres middlewares en définissant une fonction qui effectue une tâche spécifique, puis l'utiliser avec `app.use()` ou `app.METHOD()` pour l'appliquer à des routes spécifiques.
- Les middlewares peuvent également être chaînés en utilisant `next()` pour passer au middleware suivant dans la pile.
- Si un middleware ne renvoie pas de réponse ou ne passe pas au middleware suivant avec `next()`, la requête sera bloquée et la réponse ne sera jamais envoyée au client.

L'utilisation de middlewares dans Express.js offre une grande flexibilité pour ajouter des fonctionnalités supplémentaires, gérer des tâches communes et personnaliser le flux de traitement des requêtes. Ils permettent une séparation claire des préoccupations et une meilleure organisation du code.

**Exemple 1: Journalisation des requêtes**

```js
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Ajout du middleware requestLogger
app.use(requestLogger);
```

**Exemple 2: Authentification avec JWT (JSON Web Tokens)**

```javascript
// Importer le module jsonwebtoken pour gérer les jetons JWT
const jwt = require("jsonwebtoken");

// Middleware d'authentification
const authenticate = (req, res, next) => {
  try {
    // Récupérer le jeton JWT du header Authorization
    const token = req.headers.authorization.split(" ")[1];
    // Vérifier et décoder le jeton JWT
    const decodedToken = jwt.verify(token, "secret_key");
    // Ajouter les informations utilisateur au corps de la requête
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentification échouée" });
  }
};

// Utiliser le middleware d'authentification sur une route spécifique
app.get("/protected-route", authenticate, (req, res) => {
  // Utiliser les informations utilisateur pour des opérations protégées
  res.send("Route protégée");
});
```

Dans cet exemple, nous utilisons un middleware d'authentification pour protéger une route spécifique (`/protected-route`). Le middleware `authenticate` est une fonction qui reçoit la requête (`req`), la réponse (`res`), et la fonction `next` pour passer au middleware suivant.

Dans le middleware `authenticate`, nous récupérons le jeton JWT du header `Authorization` de la requête. Nous vérifions ensuite la validité et décodons le jeton à l'aide de la clé secrète (`secret_key` dans cet exemple). Si la vérification est réussie, nous ajoutons les informations utilisateur (dans cet exemple, `userId`) au corps de la requête avec `req.userData`. Ensuite, nous appelons `next()` pour passer au middleware suivant dans la pile.

Si la vérification échoue ou si le jeton n'est pas fourni, nous renvoyons une réponse d'erreur avec un code 401 (non autorisé).

En utilisant ce middleware d'authentification avec `app.get('/protected-route', authenticate, ...)`, nous pouvons protéger la route `/protected-route` pour n'autoriser que les requêtes avec un jeton JWT valide. Les informations utilisateur peuvent ensuite être utilisées pour effectuer des opérations protégées dans la fonction de rappel associée à cette route.

Assurez-vous d'adapter cet exemple en fonction de votre méthode d'authentification, de la structure du jeton JWT et des opérations spécifiques que vous souhaitez effectuer lors de l'authentification.
