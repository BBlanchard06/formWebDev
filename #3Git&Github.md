## PROCESS GITHUB STANDARD

### Récupérer le branch master de Github à jour 
git checkout master
git pull origin master

#### Créer une branche par ticket 
git branch nameBranch
git checkout nameBranch

ou git checkout -b nameBra,ch

#### Faire les modifs dans le code avec des commits réguliers
git status : voir ce qui a changé
git add -p : ajouter des modifs au commit
git add -A : ajouter des nouveaux fichiers au commit
git commit -m "message"

#### Partager son travail à la fin du ticket
git push origin nameBranche
Puis se rendre sur Github pour demander une pull request

## AUTRES COMMANDES 

git stash / git stash pop : permet de stocker ses modifications sans faire de commit pour switcher sur une autre branche avant de revenir travailler sur la branche initiale

## RESOUDRE UN CONFLIT ?

- Ouvrir le fichier en conflit et choisir la partie du code à garder
- Effectuer un commit qui indique la résolution du conflit