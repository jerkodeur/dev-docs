
//TODO slice()
//* Extrait une section d'une chaine de caractères et la retourne comme une nouvelle chaine de caractères. La chaîne de caractères courante n'est pas modifiée.
//? https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/slice

const string = 'Hello World'

console.log(string.slice(6))
console.log(string.slice(-11, -5))
console.log(string.slice(-5))

//TODO substring()
//* Retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin.
//? https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/substring

console.log(string)

console.log(string.substring(6))
console.log(string.substring(11, 5))
console.log(string.substring(5, 2))


//TODO split()
//* Permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.
//? https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split

console.log(string.split(''))
console.log(string.split(' '))
console.log(string.split('', 5))