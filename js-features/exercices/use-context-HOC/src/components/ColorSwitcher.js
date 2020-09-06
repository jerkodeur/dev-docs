import React, { useContext } from 'react'

import arrayOfColors from './ressources/arrayOfColors'

//! Importation du contexte
import colorContext from './contexts/colorContext'

//TODO (6) Récupérer le contexte directement dans des variables
const ColorSwitcher = () => {
  //! On destructure notre contexte pour en récupérer les valeurs
  const { color, setColor } = useContext(colorContext)

  return (
    <div>
      <p>Select a font color: </p>
      <select
        //TODO(7) on renvoit la nouvelle valeur à notre composant parent app()
        onChange={ (e) => setColor(e.target.value) }
        style={ { 'backgroundColor': color } }
        value={ color } >
        {
          arrayOfColors.map((color, id) => (
            <option value={ color.value } key={ id }>{ color.color }</option>
          ))
        }
      </select>
    </div>
  )
}


export default ColorSwitcher