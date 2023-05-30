// Importation du module Express.js
import express from 'express';
import bodyParser from "body-parser";

// Création de l'instance de l'application Express
const app = express();

// Utiliser le middleware body-parser pour analyser le corps de la requête au format JSON
app.use(bodyParser.json());

// Définir la route POST '/users'
app.post("/users", (req, res) => {
  const { name, email } = req.body; // Supposons que le corps de la requête est au format JSON avec les champs 'name' et 'email'
  // Effectuer des opérations pour créer un nouvel utilisateur avec les données fournies
  res.send(`Utilisateur créé avec succès : ${name} (${email})`);
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
