//TODO Décaler des lettres de l'alphabet
//? L’idée est de décaler chacune des lettres de l’alphabet de 13 places.Autrement dit, le H devient le U, le E devient le R, etc...

const transformToRot13 = (string) => {
  return string
    .split('')
    .map(char => {
      // Code représentant le caractère UTF8
      const code = char.charCodeAt()
      //! Les caractères [A-Z] ont un code ASCII allant de 65 à 90
      if(code < 65 || code > 90){
        return String.fromCharCode(code)
      //! Moyenne pour les caractères en majuscule
      } else if(code < 78){
        return String.fromCharCode(code + 13)
      } else {
        return String.fromCharCode(code - 13)
      }
    })
    .join('')
}

console.log(transformToRot13('URYYB JBEYQ')) // HELLO WORLD
console.log(transformToRot13('BCRAPYNFFEBBZF')) // HELLO WORLD
console.log(transformToRot13('PRPV RFG ZBA PBQR FRPERG')) // HELLO WORLD