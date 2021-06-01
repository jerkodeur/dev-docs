//TODO reduce()
//! La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.

const myTable = [1, 2, 3, 4, 5, 6]
const stringTable = ['un', 'deux', 'trois', 'quatre', 'cinq']
const objectTable = [{un: 1}, {deux: 2}, {trois: 3}, {quatre: 4}, {cinq: 5}]

//! --------------------
//* Parcourir le tableau
//! --------------------
console.log(myTable);

myTable.reduce((a, b) => {
  console.log(b)
}, 0) // le 0 va correspondre à la variable a

//! -----------------------------------
//* Additionner les éléments du tableau
//! -----------------------------------
console.log(myTable);

const total = myTable.reduce((a, b) => {
  return a + b
}, 0)

console.log(total)

//! -----------------------------------------------------
//* Déterminer le nombre total de caractères d'un tableau
//! -----------------------------------------------------
console.log(stringTable);

let totalLetter = 0
const stringReduce = stringTable.reduce((a, b) => {
  return totalLetter += b.length
}, '')

console.log(stringReduce);

//! ------------------------------
//* Parcourir un tableau d'objects
//! ------------------------------
console.log(objectTable);

let totNumber = 0

const reduce = objectTable.reduce((a, b) => {
  totNumber += parseInt(Object.values(b)) // On additionne la valeur des objects
  return a.concat(Object.keys(b), ' ') // Concaténation des clefs d'object
}, '')

console.log(reduce.trim())
console.log(totNumber);

//TODO reduceRight()
//! La méthode reduceRight() applique une fonction sur un accumulateur et chaque valeur d'un tableau (de la droite vers la gauche) de sorte à réduire le tableau en une seule valeur.

console.log(myTable)

const multiTable = myTable.reduceRight((a, b) => {
  console.log(b);
  return a * b
}, 1)

console.log(multiTable)