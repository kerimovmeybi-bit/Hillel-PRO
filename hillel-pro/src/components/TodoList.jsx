export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  )
}