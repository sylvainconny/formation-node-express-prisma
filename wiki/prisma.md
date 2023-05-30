# Gestion des données avec Prisma

## 1. Qu'est-ce que Prisma et pourquoi l'utiliser ?

- Prisma est un outil de mapping objet-relationnel (ORM) et de gestion de base de données pour Node.js et TypeScript.
- Il facilite l'interaction avec la base de données en fournissant une couche d'abstraction qui permet de travailler avec les données de manière plus simple et plus productive.
- Prisma offre une approche déclarative pour la modélisation des données en utilisant le langage de modélisation de données Prisma.
- Il prend en charge plusieurs types de bases de données populaires, notamment PostgreSQL, MySQL et SQLite.
- Prisma génère du code TypeScript prêt à l'emploi qui facilite l'écriture de requêtes et de mutations pour interagir avec la base de données.
- Il offre des fonctionnalités avancées telles que la validation des données, le suivi des modifications, les migrations de schéma et la gestion des relations entre les tables.
- Prisma permet d'améliorer les performances et la sécurité en utilisant des requêtes SQL générées automatiquement, des requêtes pré-compilées et une protection contre les failles de sécurité courantes comme les injections SQL.
- Il favorise le développement rapide en simplifiant les opérations de CRUD (Create, Read, Update, Delete) et en facilitant l'organisation et la maintenance du code lié à la base de données.
- Prisma est hautement extensible et offre des fonctionnalités avancées telles que les webhooks, les événements en temps réel et les plugins pour répondre à des besoins spécifiques.
- Il est largement adopté par la communauté des développeurs et bénéficie d'une documentation complète et d'une grande communauté de support.

En utilisant Prisma, les développeurs peuvent bénéficier d'une expérience de développement plus fluide et efficace, d'une meilleure gestion des données, d'une amélioration des performances et d'une sécurité renforcée lorsqu'ils travaillent avec des bases de données dans leurs applications Node.js.

## 2. Installation de Prisma et configuration d'une base de données

Installez Prisma CLI comme dépendance dans le projet:

```bash
npm install prisma -S
```

Configurez Prisma avec la commande init du CLI Prisma:

```bash
npx prisma init --datasource-provider sqlite
```

Cela crée un nouveau répertoire prisma avec votre fichier de schéma Prisma et configure SQLite comme base de données. Vous êtes maintenant prêt à modéliser vos données et à créer votre base de données avec quelques tables. Un fichier .env a été créé avec une entrée.

| SQLite et MySQL sont tous deux des systèmes de gestion de base de données relationnelles, mais SQLite est un moteur de base de données intégré qui fonctionne localement et ne nécessite pas de serveur distinct.

## 3. Création de modèles de données avec Prisma

Le schéma Prisma offre un moyen intuitif de modéliser les données. Ajoutez les modèles suivants à votre fichier `schema.prisma`:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

Les modèles du schéma Prisma ont deux objectifs principaux:

- représenter les tables de la base de données sous-jacente
- servir de base à l'API client Prisma générée.

À ce stade, il y a un schéma Prisma mais pas encore de base de données. Il faut exécuter la commande suivante dans le terminal pour créer la base de données SQLite et les tables User et Post représentées par les modèles:

```bash
npx prisma migrate dev --name init
```

Cette commande a fait deux choses:

- Elle crée un nouveau fichier de migration SQL pour cette migration dans le répertoire prisma/migrations.
- Elle exécute le fichier de migration SQL contre la base de données.

Comme le fichier de base de données SQLite n'existait pas auparavant, la commande l'a également créé dans le répertoire prisma avec le nom dev.db tel que défini par la variable d'environnement dans le fichier .env.

## 4. Requêtes CRUD avec Prisma

Installer Prisma Client:

```bash
npm i -S @prisma/client
```

**Exemple 1: Création d'un utilisateur**

```js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

**Exemple 2: Liste des utilisateurs**

```js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```
