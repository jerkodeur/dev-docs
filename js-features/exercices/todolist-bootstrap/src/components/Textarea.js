import React from 'react'
import Proptypes from 'prop-types'

import { InputGroup, FormControl } from 'react-bootstrap'

const Textarea = (props) => {
  const { onchange, id, value, label } = props

  return (
    <InputGroup>
      <FormControl
        as='textarea'
        id={id}
        onChange={onchange}
        value={value}
        required={ props.required && true}
        className='textarea'
      />
      <InputGroup.Prepend>
        <InputGroup.Text>{ label }</InputGroup.Text>
      </InputGroup.Prepend>
    </InputGroup>
  )
}

Textarea.propTypes = {
  onchange: Proptypes.func.isRequired,
  id: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired
}

export default Textarea