//TODO Destructuration d'objects
const myObject = {
  nom: 'Potié',
  prénom: 'Jérôme',
  age: 42
}

console.log({...myObject})
const {nom, ...others} = myObject

console.log(nom)
console.log(others)
console.log(others.prénom)

