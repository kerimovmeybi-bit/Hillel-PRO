import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/todos/todosSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}