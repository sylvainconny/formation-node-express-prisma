import express from 'express';
import { PrismaClient } from "@prisma/client";
// Créer une instance du client Prisma
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

userRouter.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // Récupérer tous les utilisateurs depuis la base de données avec Prisma
    const user = await prisma.user.findFirst({
      where: {
        id: parseInt(userId),
      }
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

export default userRouter;
