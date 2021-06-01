const date = new Date()
console.log(date)

//* Méthode set

//TODO setUTC dates
//! Permet de mofidier une date UTC
const date2 = new Date('December 31, 1975, 23:15:30 GMT-1:00')

date2.setUTCFullYear(1978)
date2.setUTCMonth(2) // mois de l'année (0-11)
date2.setUTCDate(25)
date2.setUTCHours(10)
date2.setUTCMinutes(15)
date2.setUTCSeconds(30)
date2.setUTCMilliseconds(89)
//* Résultat
console.log(date2.toUTCString())

//TODO set dates
//! Permet de modifier une date d'après l'heure locale
console.log(date)

date.setFullYear(1978)
date.setMonth(2) // mois de l'année (0-11)
date.setDate(25)
date.setHours(10)
date.setMinutes(15)
date.setSeconds(30)
date.setMilliseconds(89)
//* Résultat
console.log(date.toLocaleString())

//TODO setTime()
//! La méthode setTime() met l'objet Date à jour par rapport au nombre de millisecondes depuis le 1 janvier 1970, 00:00:00 UTC
console.log(date)

// On définit le nombre de millisecondes depuis le 1 janvier 1970
const dateStamp = date.setTime(date)
console.log(dateStamp)
// On définit une nouvelle date avec le timeStamp
const setTime = new Date(dateStamp)
console.log(setTime)
