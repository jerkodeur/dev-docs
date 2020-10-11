import React from 'react'
import Proptypes from 'prop-types'

import { InputGroup, FormControl } from 'react-bootstrap'

const Input = (props) => {
  const { onchange, id, value, label } = props

  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>{ label }</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        id={id}
        onChange={onchange}
        value={value}
        required={ props.required && true}
      />
    </InputGroup>
  )
}

Input.propTypes = {
  onchange: Proptypes.func.isRequired,
  id: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired
}

export default Input