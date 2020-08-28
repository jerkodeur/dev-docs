const myTable = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//TODO forEach()
//! La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
console.log(myTable)

tempTable = []
myTable.forEach(num => tempTable.push(num * 10))
console.log(tempTable);

//TODO map()
//! Créer un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
console.log(myTable)

console.log(myTable.map(num => num * 2))

//TODO filter()
//! Créer et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
console.log(myTable)

console.log(myTable.filter(num => num < 5));
console.log(myTable.filter(num => num > 5));


//TODO flat()
//! Créer un nouveau tableau contenant les éléments des sous-tableaux du tableau passé en argument, qui sont concaténés récursivement pour atteindre une profondeur donnée.
//? const nouveauTableau = monTableau.flat([profondeur])
const myDeepTable = [1,2,[3,4],5,[6,[7,8,[9]]], 10]

console.log(myDeepTable.flat())
console.log(myDeepTable.flat(2))
console.log(myDeepTable.flat(Infinity))
