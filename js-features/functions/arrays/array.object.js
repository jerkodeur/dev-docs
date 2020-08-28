const myTable = ['un', 'deux', 'trois', 'quatre', 'cinq']

//TODO entries()
//! Renvoie un nouvel objet de type  Array Iterator qui contient le couple clef/valeur pour chaque éléments du tableau.

const entries = myTable.entries()

for (let entrie of entries) {
  console.log(entrie)
}

const nextEntries = myTable.entries()

console.log(nextEntries.next().value)
console.log(nextEntries.next().value)
console.log(nextEntries.next().value)
console.log(nextEntries.next().value)
console.log(nextEntries.next().value)

//TODO keys()
//! Renvoie un nouvel objet Array Iterator qui contient les clefs pour chaque indice du tableau.

console.log(myTable)

const keys = myTable.keys()

console.log(keys.next().value)
console.log(keys.next().value)
console.log(keys.next().value)
console.log(keys.next().value)
console.log(keys.next().value)

const nextKeys = myTable.keys()

for (let key of nextKeys) {
  console.log(key)
}

//TODO values()
//! Renvoie un nouvel objet Array Iterator qui contient les valeurs pour chaque indice du tableau.

console.log(myTable)

const values = myTable.values()

console.log(values.next().value)
console.log(values.next().value)
console.log(values.next().value)
console.log(values.next().value)
console.log(values.next().value)

const nextValues = myTable.values()

for (let value of nextValues) {
  console.log(value)
}