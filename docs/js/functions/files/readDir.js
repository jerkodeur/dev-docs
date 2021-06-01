const fs = require('fs')

//TODO readdir
//* Lire un répertoire de façon asynchrone

const readdir = fs.readdir('./', (err,res) =>{
  err && console.log(err)
  console.log(res)
})

//TODO readdirSync
//* Lire un répertoire de façon synchrone
//! Sera exécuté avant readdir !

const reddirSync = fs.readdirSync('./files')
console.log(reddirSync)