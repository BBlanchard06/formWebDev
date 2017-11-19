
# Conditions 

## Opérateurs conditionnel & logique
- un test avec ces opérateurs renvoie un booléen

opérateur OU renvoie aussi la 1ère vraie valeur

# Fonctions
- les fonctions renvoient une seul valeur via le return
- le return met fin à la fonction
-- il est possible de déclarer des fonctions anonymes qui s'exécutent qu’une seule foies : (funtion )() => IIFE

# Tableau & Objet
- un objet est composé : 
-- d’un constructeur => important lors de  la déclaration de l’objet
-- de propriétés => ex .lenght
-- de méthodes => ex .touppercase() 

## Tableau
- le premier élément d’un tableau est à l’indice 0
- Les objets littéraux se parcourent avec la boucle for in.

## Test d'existence d'une variable
Avec la fonction Typeof()
  - la fonction typeof s'utilise pour tester le type d'une variable
  - si non existante => elle renvoie  : undefined

Avec le fonction Boolean()
Elle renvoie, 
  - false pour : ‘’,undefined, null, 0
  - true pour : []

# DOM
Le DOM est une API qui permet d’accéder au HTML via le JS

## Accéder aux éléments
Via des fonctions type getElementById(‘#ID’) ou querySelector(‘.class’). 

## Editer les éléments HTML
- soit via le coupe getAttribute() & setAttribute(). 
- soit directement via certains attributs directement accessibles : 
-- value
-- href
-- classNAME (attention renvoie une chaîne de caractère si plusieurs classes)

- innerHTML permet d’ajouter ou récupérer du contenu (et des balises) sous la forme d’une chaîne de caractère. 

## Naviguer entre les noeuds
A l’aide des méthodes getElementsById() et getElementsByTagName() il est possible d’accéder à un élément HTML. Une fois atteint, il est possible de se déplacer.

Il y a par exemple les propriété : 
.parentNode
.firstChild
.lastChild
.nextSibling (noeud suivant)
.previousSibling (noeud précédent)

La propriété .nodeValue permet d'afficher le contenu d’un élément text. 

Attention au noeuds vides : les espaces et les sauts à la ligne compte comme des noeuds textuels. Les propriétés firstElementChild, lastElementChild, nextSibling et previousSibling ne les prennent pas en compte.

### Ajouter des éléments dans le DOM : Workflow
- créer l'élément : var newLink = document.createElement (‘a’)
- affecter des attributs : newLink.href=”http://www.co-bble.com”
- positionner l’élément : document.getElementById(‘myP’).appendChild(newLink)

Pour insérer un noeud textuel il faut procéder de la même manière : 
.createTextNode(“hello”)
.appendChild()

Le DOM fonctionne à l’aide de références qui sont toujours accessibles. Il n’est pas possible de dupliquer un objet du DOM. Il faut le clôner. 

## Les évènements
### déclencher une fonction en fonction d'un évènenemnt
Les EVENEMENTS s’utilisent pour appeler une fonction à partir d’une action produite par l’utilisateur. Il existe plusieurs événements pour détecter différentes actions : clic, survol, frappe.

Les événements se "captent" par des listeners. 

Ex : 
document.addEventListener(‘click’, function() {
bla bla
}); 

Il est possible de bloquer l’action par défaut d’un événement avec la méthode preventDefault()

#### L'Objet EVENT
L’objet EVENT permet de récolter des informations se rapportant à l'événement déclenché : son type, l'élément source du déclenchement. 

On le fait passer en argument de la fonction de listener : 
document.addEventListener(‘click’, function(e) {
alert(e.type);
}); 

La propriété TARGET permet comme le THIS de récupérer une référence vers l'élément qui à déclenché l'évènement. CURRENTTARGET permet de récupérer l'élément qui est à l'écoute (attaché au "listener" qui à été déclenché).
Ex. 
 <div><button></button></div>
 f = function(e) {
        alert('Target : '+e.target.id+' | CurrentTarget : '+e.currentTarget.id);
    };
 div.onclick 

 => Target : button / CurrentTarget : div

 
### Suite
https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/les-formulaires-1



 






