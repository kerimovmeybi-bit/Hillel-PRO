import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState('')

  const addTodo = (text) => {
    if (!text.trim()) {
      setError('Поле не может быть пустым')
      return
    }

    setTodos([...todos, text])
    setError('')
  }

  return (
    <div>
      <h1>TODO</h1>

      <TodoForm onAdd={addTodo} error={error} />
      <TodoList todos={todos} />
    </div>
  )
}