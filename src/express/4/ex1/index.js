// Importation du module Express.js
import express from 'express';

// Création de l'instance de l'application Express
const app = express();

app.get("/", (req, res) => {
  res.send("Accueil");
});

app.get("/about", (req, res) => {
  res.send("À propos de nous");
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
