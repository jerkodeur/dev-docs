//TODO fromCharCode()
//* La méthode statique String.fromCharCode() renvoie une chaîne de caractères créée à partir de points de code UTF-16
//? Utile pour comparer les lettres

const capLetters = (start,end) => {
  const letters = []
  for(i=start; i < end; i++) {
    letters.push([i, String.fromCharCode(i)])
  }
  return letters
}

//! Digits
console.table(capLetters(48,57))
//! Uppercase
console.table(capLetters(65, 90))
//! Lowercase
console.table(capLetters(97, 122))

//! play with fromCharCode
console.log(String.fromCharCode(66 - 1))
console.log(String.fromCharCode(66))
console.log(String.fromCharCode(66 + 1))


//TODO chartAt()
//* La méthode charAt() renvoie une nouvelle chaîne contenant le caractère (ou, plus précisément, le point de code UTF-16)  à la position indiquée en argument

let string = 'Hello world'
console.log(string.charAt(0))


//TODO chatCodeAt()
//* La méthode charCodeAt() retourne un entier compris entre 0 et 65535 qui correspond au code UTF-16 d'un caractère de la chaîne situé à une position donnée.

console.log(string.charCodeAt(2));


//TODO concat()
//* La méthode concat() combine le texte de plusieurs chaînes avec la chaîne appelante et renvoie la nouvelle chaîne ainsi formée.

const string1 = 'Hello'
const string2 = 'World'
const string3 = "!"
console.log(string1.concat(' ', string2,' ', string3))


