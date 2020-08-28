//TODO padStart()
//* permet de compléter la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixée. Pour atteindre cette longueur, la chaîne complémentaire peut être répétée. La chaîne courante est complétée depuis le début.
//? https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/padStart

const str1 = '5'

console.log(str1.padStart(5, '0'))

const cbNumber = '1234567890123456'
// Sélectionne les 4 derniers chiffres et ajoute des étoiles afin d'obtenir la taille totale avec des chiffres masqués
console.log(cbNumber.slice(-4).padStart(cbNumber.length, '*'))

//TODO padEnd()
//* Permet de compléter la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixée. Pour atteindre cette longueur, la chaîne complémentaire peut être répétée. La chaîne courante est complétée depuis la fin.
//? https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/padEnd

const menu = 'general'
const border = '-'

// Un soulignement en fonction de la taille du titre
console.log(border.padEnd(menu.length, border))
// Ajouter un caractèreds jusqu'à ce que la taille définie soit atteinte
console.log(menu.padEnd(10, '!'))
// Remplir jusqu'à la longueur définie
console.log('gen'.padEnd(menu.length,'-'))

//TODO repeat()
//* Renvoie une nouvelle chaine de caractères qui contient le nombre de copie demandée de la chaine de caractères sur laquelle la méthode a été appelée, concaténées les unes aux autres.
//? https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/repeat

console.log('yoga'.repeat(3))


//TODO replace()
//* renvoie une nouvelle chaîne de caractères dans laquelle tout ou partie des correspondances à un modèle sont remplacées par un remplacement.
//? https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/replace

const str3 = 'Hello world'

console.log(str3.replace('world', 'Jérôme'))

const regex = /e/g

// remplace le 'e' par un 'a'
console.log(str3.replace(regex, 'a'));


//TODO trim() trimEnd() trimStart()
//* Permet de retirer les blancs en début et fin de chaîne. Les blancs considérés sont les caractères d'espacement (espace, tabulation, espace insécable, etc.) ainsi que les caractères de fin de ligne (LF, CR, etc.).
//? https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/trim

console.log('    Hello world    '.trim())
console.log('   Hello Word'.trimStart())
console.log('Hello Word   '.trimEnd())