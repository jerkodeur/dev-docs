import React, { useContext } from 'react'
//! Importation du contexte
import colorContext from '../contexts/colorContext'

//TODO hoc which returns a component with nested colorContext
const withColor = (Component) => {
  return props => {
    //! Récupération de la couleur contenue dans le contexte
    const { color } = useContext(colorContext)
    //! On renvoi le composant avec la couleur du contexte en props
    return <Component color={color} {...props} />
  }
}

export default withColor