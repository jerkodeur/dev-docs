import React, { useState } from 'react'

const TodoList = () => {

  const [todolist, setTodolist] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [inputError, setInputError] = useState(false)

  const handleChange = (e) => {
    setInputError(false)
    setNewTodo(e.target.value)
  }

  const addTodo = (e) => {
    if (newTodo.length === 0) {
      return setInputError(true)
    } else {
      e.preventDefault()
      let index = 0
      todolist.map(todo => {
        if (todo.id > index) { index = todo.id }
        return index
      })
      const thisTodo = { id: index + 1, value: newTodo }
      setTodolist([...todolist, thisTodo])
      setNewTodo('')
    }
  }

  const deleteTodo = (id) => {
    const ids = todolist.map(todo => todo.id)
    const thisIndex = ids.indexOf(parseInt(id))
    const tempArray = [...todolist]
    tempArray.splice(thisIndex, 1)
    setTodolist(tempArray)
  }

  const renderTodo = () => (
    <dl className="list-group list-group-flush">
      {
        todolist.map((todo => (
          <dt key={ todo.id } id={ todo.id } className="dtst-group-item">
            <button
              className='btn btn-sm btn-outline-secondary mr-2 p-1'
              onClick={ () => deleteTodo(todo.id) }>
              X
            </button>{ todo.value }
          </dt>
        )))
      }
    </dl>
  )

  return (
    <div>
      <h1 align='center'>Ma todo liste</h1>
      <form className="needs-validation" novalidate>
        <div className='form-group'>
          <div className='text-center text-md-left ml-md-2'>
          <label htmlFor='addTodo' className='text-muted mb-n3'>Ajouter une tâche</label>
          </div>
          <div>
            <input
              type="text"
              id='addTodo'
              onChange={ handleChange }
              value={ newTodo }
              className={ inputError ? 'form-control is-invalid shadow' : 'form-control shadow' }
              required
            />
            { inputError &&
              <div className="invalid-feedback">
                Remplissez-moi !
              </div>
            }
          </div>
          <div className='mt-3 text-md-right text-center'>
            <input
              type="submit"
              onClick={ addTodo }
              className='btn btn-secondary'
              value="Ajouter"
            />
          </div>
        </div>
      </form>
      <article className='mt-5 ml-5'>
        { renderTodo() }
      </article>
    </div>
  )
}

export default TodoList