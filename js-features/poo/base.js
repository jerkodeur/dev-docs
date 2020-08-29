//TODO Création d'une classe d'objet
class Person {
  //TODO Instanciation de l'objet
  constructor(identity) {
    this.firstname = identity.firstname
    this.lastname = identity.lastname
    this.birthday = identity.birthday
    this.language = identity.language
    this.country = identity.country
    this.interest = identity.interest
    this.genre = identity.genre
    this.salutation = () => {
      return `Coucou, je me présente, je m'appelle ${this.firstname}`
    }
    this.bio = () => {
      return `${this.lastname} ${this.firstname} est ${this.genre === 'homme' ? 'né' : 'née'} le ${this.birthday} et ${this.genre === 'homme' ? 'il' : 'elle'} aime les activités suivantes: ${this.interest.map(item => item)} `
    }
  }
}

//TODO définition d'une nouvelle instance
const jerome = new Person({
  firstname: 'Jérôme',
  lastname: 'Potié',
  genre: 'homme',
  birthday: '16/12/1977',
  language: 'Français',
  country: 'France',
  interest: ['randonnée', 'raquettes', 'tarot']
})
const clemence = new Person({
  firstname: 'Clémence',
  lastname: 'Ryckebush',
  genre: 'femme',
  birthday: '28/08/1988',
  language: 'Français',
  country: 'France',
  interest: ['tarot', 'boulot', 'cuisine']
})
console.log(jerome)
console.log(jerome.salutation())

//TODO Modifier la propriété d'un objet
clemence.birthday = '28/08/1987'
console.log(clemence.birthday)
//TODO Destructurer un tableau afin d'y ajouter une donnée
jerome.interest = [...jerome.interest, 'guitare']
console.log(jerome.interest)
console.log(jerome.bio())
console.log(clemence.bio())
