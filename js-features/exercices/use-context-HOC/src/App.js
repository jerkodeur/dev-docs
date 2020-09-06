import React, { useState } from 'react'
import './App.css'

//TODO (2) Importation de notre contexte
import colorContext from './components/contexts/colorContext'
import ButtonWithColors from './components/ButtonWithColor'
import ColorSwitcher from './components/ColorSwitcher'
import Paragraph from './components/Paragraph'
import WithDisplay from './components/hoc/WithDisplay'
import WithSomeDatas from './components/hoc/WithSomeDatas'

const ParagraphWithSomeDatas = WithSomeDatas(Paragraph)

function App () {

  //TODO (3) Définition de la valeur par défaut de notre contexte
  const [color, setColor] = useState('blue')

  //TODO (4) Faire passer le contexte à travers les composants
  return (
    //TODO (5) Attribution des valeurs à faire passer dans les composants enfants
    <colorContext.Provider value={ { color, setColor } }>
        <div className="App">
          <ColorSwitcher />
          <Paragraph text='This some text' />
          {
            //TODO HOC --> Déclaration des composants <--
          }
          <ParagraphWithSomeDatas text='Here is another text' />
          <ButtonWithColors label='Thanks HOC!' />
        </div>
    </colorContext.Provider>
  )
}

//! App modifié avec avec un HOC
export default WithDisplay(App)
