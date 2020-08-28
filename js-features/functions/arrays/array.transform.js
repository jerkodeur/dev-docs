const myTable = ['je', 'suis', 'en', 'apprentissage', 'à', 'la', 'Wild Code School']
const myStrangeTable = [1, ':', 'nous sommes le', new Date()]
const numTable = [1, 2, 3, 4, 10, 543, 10345, -23, 56]

//TODO join()
//! Créer et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau). La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.

console.log(myTable)

console.log(myTable.join(' '))
console.log(myTable.join('-'))

//TODO toString()
//! La méthode toString() renvoie une chaine de caractères représentant le tableau spécifié et ses éléments.
console.log(myStrangeTable)

console.log(myStrangeTable.toString())

//TODO sort()
//! La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.
console.log(myTable)
console.log(numTable)

//* Comportement par défaut (Trie par unités de code UTF-16 des caractères)
console.log(myTable.sort())
console.log(numTable.sort())

//* Trie personnalisé

// Par longueur de chaîne de caractère
const triParNbLettresAsc = (a, b) => a.length - b.length
const triParNbLettresDesc = (a, b) => b.length - a.length
// Par ordre alphabéthique
const triAlphaAsc = (a, b) => a.localeCompare(b)
const triAlphaDesc = (a, b) => b.localeCompare(a)
// Par ordre alphabéthique (bis
const triAlphaAscBis = (a, b) => {
  var x = a.toLowerCase()
  var y = b.toLowerCase()
  return x < y ? -1 : x > y ? 1 : 0
}
// Fonction de trie pour les nombres
const triNumAsc = (a, b) => a - b
const triNumDesc = (a, b) => b - a

console.log(myTable.sort((a, b) => triParNbLettresAsc(a, b)))
console.log(myTable.sort((a, b) => triParNbLettresDesc(a, b)))
console.log(myTable.sort((a, b) => triAlphaAsc(a, b)))
console.log(myTable.sort((a, b) => triAlphaDesc(a, b)))
console.log(myTable.sort((a, b) => triAlphaAscBis(a, b)))
console.log(numTable.sort((a, b) => triNumAsc(a, b)))
console.log(numTable.sort((a, b) => triNumDesc(a, b)))

//TODO reverse()
//! La méthode reverse() transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.

console.log(myTable)

console.log(myTable.reverse())
