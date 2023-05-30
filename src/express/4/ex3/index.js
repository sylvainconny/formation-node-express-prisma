// Importation du module Express.js
import express from 'express';
import adminRouter from './routes/admin.js';

// Création de l'instance de l'application Express
const app = express();

app.use("/admin", adminRouter);

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
