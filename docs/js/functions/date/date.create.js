//TODO Date()
//! Renvoi une date en format string
const stringDate = Date()
console.log(stringDate)
//! stringDate.getTime() renverra une erreur !!!

//TODO new Date()
//! Renvoi la date et l'heure actuelle
const date = new Date()
console.log(date)
console.log(date.toLocaleString())
console.log(date.toUTCString())
console.log(date.toISOString())
console.log(date.toJSON())
// Juste la date
console.log(date.toDateString())
console.log(date.toLocaleDateString())
// Juste l'heure
console.log(date.toTimeString())
console.log(date.toLocaleTimeString())

//TODO Date.now()
//! Nombre de millisecondes écoulées depuis le 1er Janvier 1970 00:00:00 UTC.
console.log(Date.now())

//TODO Date.UTC()
//! Accepte des paramètres similaires à ceux du constructeur Date et renvoie le nombre de millièmes de seconde depuis le 1er janvier 1970, 00:00:00, temps universel. Autrement dit, elle renvoie la date en UTC.
//? Format: [YYYY, MM(0 à 11), {DD}, {HH}, {MM}, {SS}, {MS}]

const newDate = new Date(Date.UTC(1977, 11, 16, 12, 15, 30))
console.log(newDate.toUTCString())
console.log(newDate.toLocaleString())