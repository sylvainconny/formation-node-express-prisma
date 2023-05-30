import inquirer from 'inquirer';
import { exec } from 'child_process';

// Définition des options
const options = [
  { name: `E3. Application de base`, value: 'express/3' },
  { name: 'E4. Route simple', value: 'express/4/ex1' },
  { name: 'E4. Route avec paramètre dynamique', value: 'express/4/ex2' },
  { name: 'E4. Routes imbriquées', value: 'express/4/ex3' },
  { name: 'E4. Route POST', value: 'express/4/ex4' },
  { name: 'E5. Journalisation des requêtes', value: 'express/5/ex1' },
  { name: 'E5. Authentification avec JWT', value: 'express/5/ex2' },
  { name: `P4. Création d'un utilisateur`, value: 'prisma/4/ex1' },
  { name: `P4. Liste des utilisateurs`, value: 'prisma/4/ex2' },
];

// Configuration du sélecteur
const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'Sélectionnez une option :',
    choices: options
  }
];

// Affichage du sélecteur
inquirer.prompt(questions).then((answers) => {

  // Exécute la commande "node --version"
  const childProcess = exec(`node src/${answers.option}`);

  // Redirige le stdout vers le terminal
  childProcess.stdout.pipe(process.stdout);

  // Affiche les erreurs éventuelles
  childProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  // Affiche le code de sortie
  childProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});
