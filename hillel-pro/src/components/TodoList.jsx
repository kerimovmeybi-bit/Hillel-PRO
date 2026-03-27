import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="list">
      <h2>TODOS</h2>

      {todos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          {todo.text}
        </div>
      ))}
    </div>
  );
}