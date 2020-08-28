const date = new Date()
console.log(date)

//* Méthode get

//TODO getUTC dates
//! Affichage de dates en fonction de l'heure locale
//* GMT -1 heure
const date2 = new Date('December 31, 1975, 23:15:30 GMT-1:00')

console.log(date2.getUTCFullYear())
console.log(date2.getUTCMonth()) // mois de l'année (0-11)
console.log(date2.getUTCDate()) // Jour du mois
console.log(date2.getUTCDay()) // Numéro du jour de la semaine 0(dimanche)-6(samedi)
console.log(date2.getUTCHours())
console.log(date2.getUTCMinutes())
console.log(date2.getUTCSeconds())
console.log(date2.getUTCMilliseconds())

//* GMT + 1 heure
const date3 = new Date('December 31, 1975, 23:15:30 GMT+1:00')

console.log(date3.getUTCFullYear())
console.log(date3.getUTCMonth()) // mois de l'année (0-11)
console.log(date3.getUTCDate()) // Jour du mois
console.log(date3.getUTCDay()) // Numéro du jour de la semaine 0(dimanche)-6(samedi)
console.log(date3.getUTCHours())
console.log(date3.getUTCMinutes())
console.log(date3.getUTCSeconds())
console.log(date3.getUTCMilliseconds())

//TODO get dates
console.log(date)

console.log(date.getFullYear())
console.log(date.getMonth()) // mois de l'année (0-11)
console.log(date.getDate(date)) // Jour du mois
console.log(date.getDay()) // Numéro du jour de la semaine 0(dimanche)-6(samedi)
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())


//TODO getTime()
//! Nombre de millisecondes écoulées depuis le premier janvier 1970 à minuit UTC

console.log(date.getTime())

//TODO getTimezoneOffset()
//! Différence en minutes entre le fuseau horaire UTC, et celui de l'heure locale.

console.log(date.getTimezoneOffset())