# Introduction à Node.js

## 1. Qu'est-ce que Node.js ?

- Node.js est un environnement d'exécution JavaScript côté serveur.
- Il utilise le moteur JavaScript V8 de Google Chrome pour exécuter du code JavaScript de manière efficace et rapide.
- Node.js est basé sur une architecture orientée événements, ce qui lui permet de gérer de manière asynchrone les opérations d'entrée/sortie.
- Il offre des performances élevées grâce à son modèle de traitement en boucle unique (event loop).
- Node.js utilise npm (Node Package Manager) pour la gestion des modules et des dépendances.
- Il est polyvalent et peut être utilisé pour développer une variété d'applications côté serveur.
- Node.js bénéficie d'un vaste écosystème de modules prêts à l'emploi via npm.

En résumé, Node.js est un environnement JavaScript côté serveur rapide, efficace et polyvalent, utilisé pour le développement d'applications web et autres applications côté serveur.

## 2. Installation de Node.js

Installation de Node.js sur Windows :

1.  Rendez-vous sur le site officiel de Node.js à l'adresse [https://nodejs.org](https://nodejs.org).
2.  Sur la page d'accueil, vous verrez le bouton "Download". Cliquez dessus.
3.  Vous serez redirigé vers la page des téléchargements. Choisissez la version recommandée de Node.js pour Windows.
4.  Téléchargez le fichier d'installation correspondant à votre système (32 bits ou 64 bits).
5.  Une fois le téléchargement terminé, exécutez le fichier d'installation.
6.  Suivez les instructions de l'assistant d'installation pour installer Node.js avec les paramètres par défaut.
7.  Une fois l'installation terminée, vous pouvez ouvrir une fenêtre de commande (invite de commandes ou PowerShell) et exécuter la commande "node -v" pour vérifier que Node.js est correctement installé.

Installation de Node.js sur Linux :

1.  Ouvrez un terminal.
2.  Vous pouvez utiliser le gestionnaire de paquets de votre distribution pour installer Node.js. Voici quelques exemples pour différentes distributions :

    - Ubuntu/Debian : Exécutez la commande suivante dans le terminal :

    ```bash
    sudo apt update
    sudo apt install nodejs
    ```

    - Fedora : Exécutez la commande suivante dans le terminal :

    ```bash
    sudo dnf install nodejs
    ```

    - CentOS : Exécutez la commande suivante dans le terminal :

    ```bash
    sudo yum install nodejs
    ```

3.  Une fois l'installation terminée, vous pouvez vérifier la version de Node.js en exécutant la commande `node -v` dans le terminal.

## 3. Exécution d'un script JavaScript avec Node.js

- Node.js permet d'exécuter des scripts JavaScript côté serveur.
- Pour exécuter un script JavaScript avec Node.js, vous pouvez utiliser la commande "node" suivie du nom du fichier contenant le script.
- Par exemple, pour exécuter un script nommé "script.js", vous pouvez utiliser la commande "node script.js" dans une fenêtre de commande ou un terminal.
- Node.js exécute le code JavaScript du script et affiche les résultats dans la sortie du terminal.
- Les scripts exécutés avec Node.js ont accès à un ensemble de modules et de fonctionnalités intégrées qui peuvent être utilisés pour diverses tâches, telles que la manipulation de fichiers, l'interrogation de bases de données, etc.
- L'exécution de scripts avec Node.js est utile pour automatiser des tâches, effectuer des traitements côté serveur ou créer des applications en ligne de commande.
