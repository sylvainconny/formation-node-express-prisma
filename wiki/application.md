# Développement d'une application web simple

## Lister les utilisateurs

Comme dans un exercice précédent on va faire des routes imbriquées, avec d'abord la route pour lister les utilisateurs:

```js
const prisma = new PrismaClient();
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    // Récupérer tous les utilisateurs depuis la base de données avec Prisma
    const users = await prisma.user.findMany();

    // Envoyer la liste des utilisateurs en tant que réponse JSON
    res.json(users);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des utilisateurs." });
  }
});

export default userRouter;
```

Ensuite la route pour créer un utilisateur:

```js
userRouter.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    // Récupérer tous les utilisateurs depuis la base de données avec Prisma
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    console.log(user);

    // Envoyer la liste des utilisateurs en tant que réponse JSON
    res.json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'utilisateur." });
  }
});
```

Puis la route pour sélectionner un utilisateur:

```js
userRouter.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // Récupérer tous les utilisateurs depuis la base de données avec Prisma
    const user = await prisma.user.findFirst({
      where: {
        id: parseInt(userId),
      },
    });

    // Envoyer la liste des utilisateurs en tant que réponse JSON
    res.json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des utilisateurs." });
  }
});
```

Et enfin l'application express:

```js
// Importer les modules nécessaires
const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");

// Créer une instance du routeur Express
const app = express();

app.use(bodyParser.json());

app.use("/users", userRouter);

// Démarrer le serveur Express
app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
```
