//TODO setters
//* En plus des méthodes getter, nous pouvons également créer des méthodes setter qui réaffectent les valeurs des propriétés existantes dans un objet

const person = {
  _age: 37,
  set age (newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge
    } else {
      console.log('You must assign a number to age')
    }
  }
};

person.age = 38
console.log(person._age)
