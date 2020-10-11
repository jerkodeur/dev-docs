import React from 'react'
import Proptypes from 'prop-types'

const RenderTodo = ({ todos, deleteTodo }) => {
  return (
    <dl className='list-group list-group-flush'>
      {todos.map((todo) => (
        <dt key={todo.id} id={todo.id} className='dtst-group-item'>
          <button
            type='button'
            className='btn btn-sm btn-outline-secondary mr-2 p-1'
            onClick={() => deleteTodo(todo.id)}
          >
            X
          </button>
          {todo.description}
        </dt>
      ))}
    </dl>
  )
}

RenderTodo.propTypes = {
  todos: Proptypes.arrayOf(Proptypes.object).isRequired,
  deleteTodo: Proptypes.func.isRequired,
}

export default RenderTodo
