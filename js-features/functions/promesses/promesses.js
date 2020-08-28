//TODO Avant les promesses
const faireQqcALAncienne = (successCallback, failureCallback) => {
  // réussir une fois sur deux
  if (Math.random() > .5) {
    successCallback("Réussite")
  } else {
    failureCallback("Échec")
  }
}

const successCallback = (résultat) => {
  console.log("L'opération a réussi avec le message : " + résultat)
}
const failureCallback = (erreur) => {
  console.log("L'opération a échoué avec le message : " + erreur)
}

faireQqcALAncienne(successCallback, failureCallback)

//TODO Ce qui signifie
const faireQqc = () => {
  return new Promise((successCallback, failureCallback) => {
    // réussir une fois sur deux
    if (Math.random() > .5) {
      successCallback("Réussite")
    } else {
      failureCallback("Échec")
    }
  })
}

const promise = faireQqc()
promise.then(successCallback, failureCallback)