//TODO Création d'un objet vide
const Person = new Object
console.log(Person)

//TODO Ajouter des propriétés aux objects
Person.firstname = 'Jérôme'
Person.lastname = 'Potié'

console.log(Person)

//TODO Objet avec les mêmes propriétés qu'un autre objet
const Person2 = Object.create(Person)
console.log(Person2.firstname)

//TODO constructor()
//* Ici nous utilisons constructor() pour initialiser un nouvel objet
const sebastien = new Person.constructor()
console.log(sebastien)
sebastien.firstname= 'Sébastien'
console.log(sebastien.firstname)