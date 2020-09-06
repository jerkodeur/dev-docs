//TODO in
//* L'opérateur in renvoie true si la propriété indiquée fait partie de l'objet donné.

/// Objets prédéfinis
console.log('round' in Math)
console.log('log' in console)

// Objets définis par l'utilisateur
var maVoiture = { fabricant: "Honda", modèle: "Accord", year: 1998 }
console.log("fabricant" in maVoiture )

//TODO instanceof
//* Renvoie true si l'objet donné est du type spécifié

const today = new Date()
console.log(today instanceof Date)
console.log(today instanceof Array)