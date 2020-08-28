const object = {
  un: 1,
  deux: 2,
  trois: 3,
  quatre: 4,
  cinq: 5
}

//TODO values()
//! Retourne les valeurs de l'objet dans un tableau

console.log(object)

console.log(Object.values(object))
console.log(Object.values(object)[3])

//TODO keys()
//! Retourne les clefs de l'objet dans un tableau

console.log(object)

console.log(Object.keys(object))
console.log(Object.keys(object)[0])

//TODO entries()
//! Renvoi un tableau des propriétés propres énumérables d'un objet dont la clé est une chaîne de caractères, sous la forme de paires [clé, valeur]
console.log(object)

console.log(Object.entries(object))
console.log(Object.entries(object)[0])
console.log(Object.entries(object)[0][0])

//TODO hasOwnProperty()
//! Vérifie si l'objet contient la propriété donnée
console.log(object)

console.log(object.hasOwnProperty('un'))
console.log(object.hasOwnProperty('six'))

