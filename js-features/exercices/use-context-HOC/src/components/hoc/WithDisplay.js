import React from 'react'

//TODO Ajouter des éléments à un composant grâce aux HOC
const WithDisplay = (Component) => {
  return props => (
    <div style={ { backgroundColor: 'lightGrey', border: '3pt double black', padding: '1em' } }>
      <Component { ...props } />
    </div>
  )
}

export default WithDisplay