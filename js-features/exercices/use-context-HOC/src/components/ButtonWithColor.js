import React from 'react'

//! import de notre HOC (high order component)
import withColors from './hoc/WithColors'

//TODO Utilisation de notre HOC afin de coloriser notre bouton
const ButtonWithColor = ({ color, label }) => (
<button style={{ border: `3pt double ${color}`, padding: '1em'}}>{label}</button>
)

//! Export du composant entouré par notre HOC
export default withColors(ButtonWithColor)