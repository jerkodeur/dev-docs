const objet1 = { a: 1, b: 2, c: 3 }
const objet2 = { d: 4, e: 5, f: 6 }
const objet3 = { g: 7, h: 8, i: 9 }

//* Assignation dans un nouvel objet
console.log(Object.assign({}, objet1, objet2, objet3))
// Les objets originaux ne sont pas modifiés
console.log(objet1)
console.log(objet2)
console.log(objet3)

//* Assignation de l'objet2 dans l'objet1
const assignObjet = Object.assign(objet1, objet2, objet3)
console.log(assignObjet)
// L'objet 1 hérite aussi de l'assignation
console.log(objet1)
console.log(objet2)
console.log(objet3)

//* Assignation de même clef/valeurs
console.log(Object.assign(assignObjet, objet3))
// Les doublons ne sont pas copiés
console.log(assignObjet)
console.log(objet3)

//* Assignation de même clefs avec des valeurs différentes
const objet4 = { a: 2, b: 3, c: 4 }
// Seules les valeurs changent si les clefs existent déjà
console.log(Object.assign(assignObjet, objet4))
