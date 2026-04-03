import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "../redux/todos/todos.actions";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newText = prompt("Edit todo:", todo.text);
    if (newText && newText.trim().length >= 5) {
      dispatch(editTodo(todo.id, newText));
    }
  };

  return (
    <li className="todo-item">
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        className={todo.completed ? "completed" : ""}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
}