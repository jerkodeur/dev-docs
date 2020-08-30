//TODO Création d'une classe d'objet
class Person {
  //TODO Instanciation de l'objet
  constructor (identity) {
    this.firstname = identity.firstname
    this.birthday = identity.birthday
    this.interest = identity.interest
    this.genre = identity.genre
    //TODO _privacy proprety
    //! Indique aux autres devs que cette valeur ne doit pas être modifié
    this._doNoTModify = 'Not modify me !!!'
  }
  salutation () {
    // This fait appel a firstname qui est preésent dans le constructeur
    return `Coucou, je me présente, je m'appelle ${ this.firstname }`
  }
  bio () {
    return `${ this.firstname } est ${ this.genre === 'homme' ? 'né' : 'née' } le ${ this.birthday } et ${ this.genre === 'homme' ? 'il' : 'elle' } aime les activités suivantes: ${ this.interest.map(item => item) } `
  }
}

//TODO définition d'une nouvelle instance
const jerome = new Person({
  firstname: 'Jérôme',
  genre: 'homme',
  birthday: '16/12/1977',
  interest: ['randonnée', 'raquettes', 'tarot']
})
const clemence = new Person({
  firstname: 'Clémence',
  genre: 'femme',
  birthday: '28/08/1988',
  interest: ['tarot', 'boulot', 'cuisine']
})
console.log(jerome)
console.log(jerome.salutation())

//TODO Lire la propriété d'un objet
console.log(clemence['genre'])

//TODO Modifier la propriété d'un objet
clemence.birthday = '28/08/1987'
console.log(clemence.birthday)

//TODO Destructurer un tableau afin d'y ajouter une donnée
jerome.interest = [...jerome.interest, 'guitare']
console.log(jerome.interest)

console.log(jerome.bio())
console.log(clemence.bio())

//TODO Héritage avec nouvelles propriétés
class Teacher extends Person {
  constructor (identity) {
    super(identity)
    this.matter = identity.matter
  }
}

const thomas = new Teacher({
  firstname: 'Thomas',
  genre: 'Homme',
  birthday: '12/06/75',
  interest: ['Informatique', 'Jeux Vidéos'],
  matter: 'ReactJS'
})

console.log(thomas.salutation())