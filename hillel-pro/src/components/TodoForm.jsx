import { useState } from 'react'

export default function TodoForm({ onAdd, error }) {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    onAdd(value)
    setValue('')
  }

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={handleSubmit}>Додати</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}