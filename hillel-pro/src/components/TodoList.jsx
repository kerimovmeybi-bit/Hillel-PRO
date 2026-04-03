import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodos, clearTodos } from "../redux/todos/todos.actions";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(clearTodos())}>Clear All</button>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}