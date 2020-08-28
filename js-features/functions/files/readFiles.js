// Include fs module
const fs = require('fs')

//TODO readFile
//* (chemin, format, (erreur,resultat))
let readFile = fs.readFile('files/text1.txt', 'utf8', (err, res) => {
  err && console.log(err)
  console.log(res);
})

//TODO readFileSync
//* Lit le fichier de manière synchrone (bloque les autres requêtes)
//! Va être lu avant la requête asynchrone readFile
const readFileSync = fs.readFileSync('files/text2.txt', 'utf8')
console.log(readFileSync)

