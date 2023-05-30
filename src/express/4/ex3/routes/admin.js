import express from 'express';

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.send("Page d'administration");
});

adminRouter.get("/users", (req, res) => {
  res.send("Liste des utilisateurs");
});

export default adminRouter;
