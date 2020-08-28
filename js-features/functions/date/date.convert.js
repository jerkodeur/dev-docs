const date = new Date()
console.log(date)

//TODO Date.parse()
//! Analyse la représentation textuelle d'une date, et renvoie le nombre de millisecondes depuis le 1er janvier 1970, 00:00:00 UTC jusqu'à cette date
console.log(Date.parse('16 Dec 1977 00:12:00 GMT+2'))

//TODO toUTCString()
//! Convertit une date en une chaîne de caractères, selon le fuseau horaire UTC
const toUTCString = date.toUTCString()

console.log(toUTCString)

//TODO toLocaleString()
//! Renvoie une chaine de caractères représentant la date selon une locale
console.log(date)

console.log(date.toLocaleString()) // si exécuté dans une locale fr et le fuseau horaire CEST
console.log(date.toLocaleString("en-GB")) // l'anglais britannique utilise l'ordre jour-mois-année

//! Ajout d'options (voir mdn pour plus d'infos)
const options1 = { weekday: "long", year: "numeric", month: "long", day: "numeric", timeZoneName: "long" }
const options2 = { hour: "numeric", minute: "numeric", second: '2-digit', timeZoneName: "short"}
console.log(date.toLocaleString("en-GB", options1))
console.log(date.toLocaleString("en-GB", options2))

//TODO toISOString()
//! La méthode toISOString() renvoie une chaîne de caractères au format ISO (ISO 8601 Extended Format)
//? Format: YYYY-MM-DDTHH:mm:ss.sssZ (toujours longue de 24 caractères) ou de cette façon
//?      ±YYYYYY-MM-DDTHH:mm:ss.sssZ (27 caractères).
//* Le fuseau horaire est toujours UTC, comme l'indique le suffixe « Z » (pour zéro décalage avec UTC)

console.log(date.toISOString())

//TODO toJSON()
//! La méthode toJSON() renvoie une chaîne représentant l'objet Date sous forme JSON

console.log(date.toJSON())