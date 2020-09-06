//TODO (6) Utilisation basique du contexte

import React from 'react'
//! Importation du context
import colorContext from './contexts/colorContext'

const Paragraph = ({ text }) => {
  return (
    //! On entoure notre contenu avec notre context grace à {context}.Consumer
    <colorContext.Consumer>
    {
      //! value représente tout l'objet contenu dans colorContext
      value => (
        <p style={ { color: value.color } }>{ text } { value.color}</p>
      )
    }
    </colorContext.Consumer>
  )
}

export default Paragraph