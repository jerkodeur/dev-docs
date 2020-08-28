const chats = [
  {
    'type': 'folder',
    'name': 'cats',
    'children': [
      {
        'type': 'image',
        'name': 'Buffy'
      },
      {
        'type': 'image',
        'name': 'Gizmo'
      },
      {
        'type': 'folder',
        'name': 'small-cat',
        'children': [
          {
            'type': 'image',
            'name': 'Fluffy'
          },
          {
            'type': 'image',
            'name': 'Harry'
          },
          {
            'type': 'folder',
            'name': 'black-cat',
            'children': [
              {
                'type': 'image',
                'name': 'Daisy'
              },
              {
                'type': 'image',
                'name': 'Toby'
              }
            ]
          },
          {
            'type': 'folder',
            'name': 'white-cat',
            'children': [
              {
                'type': 'image',
                'name': 'Minnie'
              },
              {
                'type': 'image',
                'name': 'Lucy'
              }
            ]
          }
        ]
      },
      {
        'type': 'folder',
        'name': 'future-cat',
        'children': []
      }
    ]
  }
]

//TODO Dans un fichier Json avec plusieurs enfants et petits enfants
//? Ecrivez une fonction qui permet de récupérer tous les noms de chat dans un tableau.

const catList = []
const exploreCats = (folder) => {
  for (const object of folder) {
    if (object.type === 'image') {
      catList.push(object.name)
    } else {
      exploreCats(object.children)
    }
  }
  return catList
}

console.log(exploreCats(chats))

//TODO Calculer la factorielle d'un nombre
//*La factorielle n! est le produit de tous les nombres entiers positifs non nuls inférieurs ou égaux à n, elle est symbolisée par un point d'exclamation juxtaposé après le nombre.
//? !10 = 1*2*3*4*5*6*7*8*9*10
//? !0 && !1 = 1

const factorielle = (number) => {
  //! Ne pas oublier de spécifier une condition de sortie !
  if(number < 2) return 1
  return number * factorielle(number - 1)
}

console.log(factorielle(10))

//TODO Calculer le modulo d'un nombre
let result = 0
const modulo = (number, quotient) => {
  number = number - quotient
  if(number > 0){
    result += 1
    modulo(number, quotient)
  }
  return result
}

console.log(modulo(50,3))