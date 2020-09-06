//TODO getters
//* Les Getters sont des méthodes qui récupèrent et retournent les propriétés internes d'un objet
//! Avantages des getters:
//? * Les Getters peuvent effectuer une action sur les données lors de l'obtention d'une propriété.
//? * Les Getters peuvent renvoyer différentes valeurs en utilisant des conditions.
//? * Dans un getter, nous pouvons accéder aux propriétés de l'objet appelant en utilisant this.
//? * La fonctionnalité de notre code est plus facile à comprendre pour les autres développeurs.
//! Les propriétés ne peuvent pas partager le même nom que la fonction getter. Une solution de contournement consiste à ajouter un trait de soulignement avant le nom de la propriété, comme nous l'avons fait dans l'exemple ci-dessous.

const person = {
  _firstName: 'Jérôme',
  _lastName: 'Potié',
  get fullName () {
    if (this._firstName && this._lastName) {
      return `${ this._firstName } ${ this._lastName }`
    } else {
      return 'Missing a first name or a last name.'
    }
  }
}

// To call the getter method:
console.log(person.fullName)