let string = 'Hello world'

//TODO startWith()
//* Renvoie un booléen indiquant si la chaine de caractères commence par la deuxième chaine de caractères fournie en argument.

console.log(string.startsWith('Hello'))
console.log(string.startsWith('world', 6))

//TODO endWith()
//* Renvoie un booléen indiquant si la chaine de caractères se termine par la chaine de caractères fournie en argument

console.log(string)

console.log(string.endsWith('world'))
console.log(string.endsWith('Hello', 5))


//TODO includes()
//* Détermine si une chaîne de caractères est contenue dans une autre et renvoie true ou false selon le cas de figure.

console.log(string)

console.log(string.includes('hello'))
console.log(string.includes('Hello'))

// A partir d'une position déterminée
console.log(string.includes('world', 6))
console.log(string.includes('world', 7))


//TODO indexOf()
//* renvoie l'indice de la première occurence de la valeur cherchée au sein de la chaîne courante (à partir de indexDébut)
//! Renvoie -1 si la valeur cherchée n'est pas trouvée.

console.log(string)

console.log(string.indexOf('world'))
console.log(string.indexOf('o'))
console.log(string.indexOf('my'))


//TODO lastIndexOf()
//* renvoie l'indice, dans la chaîne courante, de la dernière occurence de la valeur donnée en argument. La recherche s'effectue de la fin vers le début de la chaîne, à partir de indiceDébut.
//! Renvoie -1 si la sous-chaîne n'est pas trouvée.

console.log(string)

console.log(string.lastIndexOf('l'))
console.log(string.lastIndexOf('o'))

console.log(string.lastIndexOf('m'))


//TODO match()
//* Permet d'obtenir le tableau des correspondances entre la chaîne courante et une expression rationnelle.
//? https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match

string = 'Hello World'
console.log(string)

const regex1 = /[A-Z]/g
const regex2 = /[A-Z]/
const regex3 = /[a-z]/g

console.log(string.match(regex1))
console.log(string.match(regex2))
console.log(string.match(regex3))

//TODO matchAll()
//* Renvoie un itérateur contenant l'ensemble des correspondances entre une chaîne de caractères d'une part et une expression rationnelle d'autre part (y compris les groupes capturants).
//? https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/matchAll

console.log(string)
console.log(regex3)

// destructuration des résultats
const occurences = [...string.matchAll(regex3)]

// Afficher la longueur
console.log(occurences.length)

console.log(occurences[0][0])
console.log(occurences[5])

// with map()
const result = (occurence) => {
  const letterTable = []
  occurence.map(letter => letterTable.push(letter[0]))
  return letterTable
}
console.log(result(occurences).join(''))


//TODO search()
//* The search() method executes a search for a match between a regular expression and this String object.
//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g

console.log(paragraph.search(regex))

console.log(paragraph[paragraph.search(regex)])
