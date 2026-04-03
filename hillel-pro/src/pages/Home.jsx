import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="app-container">
      <h1>TODO APP (Redux Saga)</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}