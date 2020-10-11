import React, { useState } from 'react'
import { Form, Container } from 'react-bootstrap'

import BtpInput from '../components/Input'
import RenderTodo from './RenderTodos'
import Textarea from '../components/Textarea'

const TodoList = () => {
  const [todolist, setTodolist] = useState([])
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
  })
  const [validate, setValidate] = useState({
    title: true,
    description: true,
  })

  const handleChange = (e) => {
    setValidate({ ...validate, [e.target.id]: true })
    setNewTodo({ ...newTodo, [e.target.id]: e.target.value })
  }

  const addTodo = (e) => {
    if (newTodo.title.length === 0) {
      return setValidate({ ...validate, title: false })
    }
    if (newTodo.description.length === 0) {
      return setValidate({ ...validate, description: false })
    }
    e.preventDefault()
    let index = 0
    todolist.map((todo) => {
      if (todo.id > index) {
        index = todo.id
      }
      return index
    })
    const thisTodo = { id: index + 1, ...newTodo }
    setTodolist([...todolist, thisTodo])
    return setNewTodo({
      title: '',
      description: '',
    })
  }

  const deleteTodo = (id) => {
    const ids = todolist.map((todo) => todo.id)
    const thisIndex = ids.indexOf(parseInt(id))
    const tempArray = [...todolist]
    tempArray.splice(thisIndex, 1)
    setTodolist(tempArray)
  }

  return (
    <Container>
      <h1 align='center'>Ma todo liste</h1>
      <Form noValidate>
        <div className='form-group'>
          <div>
            <BtpInput
              id='title'
              label='Nouvelle tâche'
              onchange={handleChange}
              value={newTodo.title}
              required
            />
            <Textarea
              id='description'
              label='Description'
              onchange={handleChange}
              value={newTodo.description}
              required
            />
          </div>
          <div className='mt-3 text-md-right text-center'>
            <input
              type='submit'
              onClick={addTodo}
              className='btn btn-secondary'
              value='Ajouter'
            />
          </div>
        </div>
      </Form>
      <article className='mt-5 ml-5'>
        <RenderTodo todos={todolist} deleteTodo={deleteTodo} />
      </article>
    </Container>
  )
}

export default TodoList
