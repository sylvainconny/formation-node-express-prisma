// Importation du module Express.js
import express from 'express';
import jwt from "jsonwebtoken";

// Création de l'instance de l'application Express
const app = express();

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

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
