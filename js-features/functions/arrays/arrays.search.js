const myTable = ['un', 'deux', 'trois', 'un']


//TODO indexOf()
//! Renvoi l'index de la première / dernière occurence trouvée
console.log(myTable)

console.log(myTable.indexOf('un'))


//TODO lastIndexOf()
//! Renvoi l'index de la dernière occurence trouvée
console.log(myTable)

console.log(myTable.lastIndexOf('un'))


//TODO find()
//! Renvoi le premier élément correspondant à la recherche
console.log(myTable)

console.log(myTable.find(search => search.includes('de')))


//TODO findIndex()
//! Renvoi l'index du premier élément correspondant à la recherche
console.log(myTable)

console.log(myTable.findIndex(search => search === 'trois'))


//TODO some()
//! Teste si au moins un élément du tableau passe le test implémenté par la fonction fournie.
console.log(myTable)

console.log(myTable.some(item => item.length > 5))
console.log(myTable.some(item => item.length < 4))


//TODO every()
//! Teste si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument.
console.log(myTable)

console.log(myTable.every(item => item.length > 5))
console.log(myTable.every(item => item.length >= 1))


//TODO includes()
//! Détermine si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.
console.log(myTable)

console.log(myTable.includes('deux'))
console.log(myTable.includes('quatre'))
