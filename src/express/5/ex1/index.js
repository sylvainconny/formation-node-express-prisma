// Importation du module Express.js
import express from 'express';

// Création de l'instance de l'application Express
const app = express();


const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Ajout du middleware requestLogger
app.use(requestLogger);

// Définition d'une route GET '/'
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Envoie une réponse "Hello, World!" au client
});


app.get("/about", (req, res) => {
  res.send("À propos de nous");
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
