//TODO localeCompare()

//* renvoie un nombre indiquant si la chaîne de caractères courante se situe avant, après ou est la même que la chaîne passée en paramètre, selon l'ordre lexicographique.
//? 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare'

//! Attention à ne pas tester que les valeurs -1 et 1. Les valeurs entières utilisées peuvent varier en fonction des navigateurs et de leurs versions. En effet, la spécification indique uniquement le signe de la valeur à fournir. Par exemple, certains navigateurs pourront renvoyer -2 ou 2 (voire d'autres valeurs).

console.log('abc'.localeCompare('abc'))
console.log('abc'.localeCompare('abd'))
console.log('be'.localeCompare('ba'))

//TODO Sort a table with localeCompare()
//* localeCompare() permet de trier un tableau sans tenir compte de la casse :

const table = ['a', 'B', 'Ba', 'f', 'baD', 'Da', 'ae', 'Db', 'Aa', ',ai']
console.log(table.sort((a,b) => {
  return a.localeCompare(b, 'fr', {ignorePunctuation: true})
}))

//TODO toLocaleLowerCase()
//* Renvoie la chaîne de caractères qui appelle la méthode en une chaîne de caractères représentées en minuscules, en tenant compte des correspondances de caractères propres aux différentes locales.
//? https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toLocaleLowerCase

console.log('ABC'.toLocaleLowerCase('Abc', 'fr'))
console.log('aBc'.toLocaleLowerCase('aba'))


//TODO toLocaleUpperCase()
//* Renvoie la chaîne de caractères qui appelle la méthode en caractères majuscules, selon les correspondances de caractères propres aux différentes locales.
//? https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toLocaleUpperCase

console.log('ABC'.toLocaleUpperCase('Abc', 'fr'))
console.log('aBc'.toLocaleUpperCase('aba', 'us'))