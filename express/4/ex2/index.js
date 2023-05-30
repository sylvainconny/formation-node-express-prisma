// Importation du module Express.js
import express from 'express';

// Création de l'instance de l'application Express
const app = express();

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Utilisateur avec l'ID ${userId}`);
});
// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
