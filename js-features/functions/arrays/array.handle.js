const myTable = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//TODO push()
//! Ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.
console.log(myTable);

const newTable = myTable.push('dix')

console.log(newTable) // Retourne la nouvelle taille du tableau
console.log(myTable)

console.log(myTable.push(11, 'douze'))
console.log(myTable)

//TODO pop()
//! Supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau.
console.log(myTable)

console.log(myTable.pop()) // Retourne la valeur supprimée
console.log(myTable)

//TODO splice()
//! modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau.On peut ainsi vider ou remplacer une partie d'un tableau.
//? Array.splice(indexDebut, nbElementToChange, newvalue[,newValue] )

console.log(myTable);

// Remplacement de la chaîne de caractères 'dix' par 10
console.log(myTable.splice(myTable.indexOf('dix'), 1, 10)) // retourne le (les) éléments modifiés (supprimés)
console.log(myTable)

// Remplacement de la dernière valeur du tableau
console.log(myTable.splice(-1, 1, 12)) // on démarre à partir de la fin avec -1
console.log(myTable)

// Ajout d'un élément dans le tableau
console.log(myTable.splice(-1, 0, 11)) // grâce à 0, l'on ajoute un élément au tableau
console.log(myTable)

// Modifier plusieurs éléments
console.log(myTable.splice(0, 4, 'zero'))
console.log(myTable)

// Supprimer un (ou plusieurs) élément(s)
console.log(myTable.splice(0, 1))
console.log(myTable)


//TODO shift()
//! La méthode shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément. Cette méthode modifie la longueur du tableau.

console.log(myTable)

console.log(myTable.shift()) // retourne la valeur supprimée
console.log(myTable)

//TODO unshift()
//! La méthode unshift() ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.
console.log(myTable)

console.log(myTable.unshift(0, 1, 2, 3, 4)) // retourne la longueur du tableau
console.log(myTable)

//TODO slice()
//! Renvoie un objet tableau, contenant une copie superficielle d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.
console.log(myTable)

const slicetable = myTable.slice(1, 6)

console.log(slicetable);
console.log(myTable)
