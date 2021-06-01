//TODO in
//* L'opérateur in renvoie true si la propriété indiquée fait partie de l'objet donné.
const myArray = ["pommes", "poire", "orange", "kiwi"]

console.log(0 in myArray)
console.log(4 in myArray)

//? length, map sont des propriétés d'un objet Array
console.log('length' in myArray)
console.log('map' in myArray)

//! l'opérateur se base sur l'indice et pas sur la valeur
console.log('pommes' in myArray)

for(keys in myArray){
  console.log(keys)
}

//TODO instanceof
//* Renvoie true si l'objet donné est du type spécifié
console.log(myArray)

console.log(myArray instanceof Array)
console.log(new Date() instanceof Array)

