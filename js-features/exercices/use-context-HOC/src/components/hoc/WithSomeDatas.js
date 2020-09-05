import React from 'react'

//TODO Définir un HOC basique
//* Prends un composant en entrée, retourne une fonction qui prends des props et affiche du JSX
//* Permet de renvoyer d'autres props au composant d'entrée

const WithSomeDatas = (Component) => {
  return props => (
    //! Ici nous ajoutons une nouvelle props au composant en entrée nommée 'data'
    <Component data='with some datas' {...props} />
  )
}

export default WithSomeDatas