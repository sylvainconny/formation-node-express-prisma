// Importer les modules nécessaires
import express from "express";
import userRouter from "./routes/user.js";
import bodyParser from "body-parser";

// Créer une instance du routeur Express
const app = express();

app.use(bodyParser.json());
app.use('/users', userRouter);

// Démarrer le serveur Express
app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
