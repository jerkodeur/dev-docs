
//!:::::::::::::::::::::::::::!//
//TODO UNE CONSOLE EN COULEUR
//!:::::::::::::::::::::::::::!//

const testCouleur = 'La couleur est rouge'

console.log(`%c ${testCouleur}`, 'color: red')

console.log('%c MESSAGE DE CONSOLE EN BLEU', "color:blue")
console.log('%c UN console.log EN VERT ET EN GRAS', "color:green; font-weight: bold")
console.log('%c UNE CONSOLE EN COULEUR, EN GRAS ET DE GRANDE TAILLE', "color:orange; font-weight: bold; font-size: 2em")

// console.log(`%c ${testCouleur}`, 'color: red')


// //!::::::::::::::::::!//
// //TODO CONSOLE.DEBUG
// //!::::::::::::::::::!//

//? Explications
//* Affiche un message dans la console web, avec le niveau de log "debug" (Verbose sur Chrome).
  // Le message est affiché uniquement si la console est configurée pour afficher les messages de type debug.
  // Moins visible que le console.log car pas visible par défaut dans la console du navigateur

console.debug('DEBUG:', 'Ceci est un message de debug !')

// //!:::::::::::::::::!//
// //TODO CONSOLE.WARN
// //!:::::::::::::::::!//

//? Explications
  //* affiche un message d’avertissement dans la console web;

console.warn('WARNING:', 'Avertissement: Mauvaise syntaxe utilisée');

// //!::::::::::::::::::!//
// //TODO CONSOLE.ERROR
// //!::::::::::::::::::!//

// //? Explications
//* Affiche un message d'erreur dans la console du navigateur.
  // Le message est envoyé dans la console JavaScript du navigateur avec un formatage d'erreur (Icone + couleur rouge)
  // Est utile pendant la période de développement.

console.error('ERROR:', 'Une erreur est survenue !');

//!:::::::::::::::::::!//
//TODO CONSOLE.ASSERT
//!:::::::::::::::::::!//

//? Explications
//* Affiche un message d'erreur dans la console si l'assertion est fausse. Si l'assertion est vraie, rien ne se produit.

console.assert(1 === 1, 'Rien ne devrait s\'afficher')
console.assert(2 === 1, 'ERREUR! 2 n\'est pas égal à 1 !!!')

//!::::::::::::::::::!//
//TODO CONSOLE.TABLE
//!::::::::::::::::::!//

//? Explications
//* Permet de visualiser les structures dans une table où nous pouvons nommer les colonnes et les passer comme paramètres.

const got = {
  Lannister: {
    Devise: 'un Lannister paye toujours ses dettes.',
    Blason: 'Lion d\'or',
    Lieu: 'Casterly Rock',
    Famille: ['Tywin', 'Jaime', 'Cersei', 'Tyrion', 'Kevan', 'Lancel']
  },
  Stark: {
    Devise: 'Winter is coming',
    Blason: 'Loup géant d\'acier',
    Lieu: 'Winterfell',
    Famille: ['Ned', 'Catelyn', 'Robb', 'Sansa', 'Bran', 'Arya', 'Rickon']
  },
  Barathéon: {
    Devise: 'Ours is fury',
    Blason: 'Cerf de sable',
    Lieu: 'Terres de l’Orage',
    Famille: ['Robert', 'Stannis', 'Renly', 'Gendry', 'Selyse', 'shireen']
  }
}

console.log(got)
console.table(got)

//!::::::::::::::::!//
//TODO CONSOLE.DIR
//!::::::::::::::::!//

//? Explications
//* Permet de voir toutes les propriétés de l’objet JavaScript spécifié dans la console, par lequel le développeur peut facilement obtenir les propriétés de l’objet.

console.dir(got)

//!:::::::::::::::::!//
//TODO CONSOLE.TIME
//!:::::::::::::::::!//

//? Explications
//* Chronomètre une opération.
// Chaque "timer" doit avoir un nom unique.
// Il peut y avoir jusqu'à 10000 "timers" sur une même page.
// Le navigateur affichera le temps d'execution en millisecondes dans la console.

//!::::::::::::::::::!//
//TODO CONSOLE.GROUP
//!::::::::::::::::::!//

//? Explications
//* Cette méthode vous permet de regrouper une série de console.log(mais aussi des informations à propos d’erreur, etc.) sous un groupe pouvant être réduit.

console.group('Test console.time')

// Déclaration des variables
const monTableauDeNombre = []
const tableauFinal = []

//! On définit notre chronomètre global
console.time('temps_total')

//? On remplit notre tableau avec 2.500.000 nombres
for (let i = 0; i < 2500000; i++) {
  monTableauDeNombre.push(i)
}

console.group('boucle for')
//TODO   Parcours du tableau avec FOR
console.time('temps_for')
for (let i = 0; i < monTableauDeNombre.length; i++) {
  tableauFinal.push(i)
}
console.timeEnd('temps_for')
console.groupEnd('boucle for')

console.group('boucle forEach')
//TODO   Parcours du tableau avec FOREACH
console.time('temps_forEach')
monTableauDeNombre.forEach(nombre => tableauFinal.push(nombre))
console.timeEnd('temps_forEach')
console.groupEnd('boucle forEach')

console.group('boucle while')
//TODO   Parcours du tableau avec WHILE
console.time('temps_while') //*\\
let i = 0
while (i < monTableauDeNombre.length) {
  tableauFinal.push(i)
  i++
}
console.timeEnd('temps_while') //*\\
console.groupEnd('boucle while')

//TODO   Parcours du tableau avec MAP
console.group('boucle map')
console.time('temps_map')
monTableauDeNombre.map(nombre => tableauFinal.push(nombre))
console.timeEnd('temps_map')
console.groupEnd('boucle map')

//! Récupération du temps total écoulé
console.timeEnd('temps_total')
//! Affichage du tableau final
console.dir(tableauFinal)

console.groupEnd('Test console.time')

//!::::::::::::::::::!//
//TODO CONSOLE.COUNT
//!::::::::::::::::::!//

//? Explications
//* Affiche dans la console le nombre de fois où la fonction count() a été appelée.
// Cette fonction accepte l'argument optionnel label.

//!::::::::::::::::::::::::!//
//TODO AUTRES TYPES DE LOG
//!::::::::::::::::::::::::!//

//? console.clear()
//* Tous les messages de la console seront supprimés et remplacés par un message de confirmation ("Console was cleared").

//? console.trace()
//* Affiche la stack trace dans la Web Console.

//? console.countReset([label])
//* Remet le compteur à zero. Cette fonction prend un argument optionnel label

//? Console.timeLog()
//* Affiche dans la console la valeur actuelle d'un timer précédemment appelé par console.time()