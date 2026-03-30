import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import Swapi from "./components/Swapi";

export default function App() {
  return (
    <div>
      <h1>TODO + SWAPI (Vite + Redux)</h1>

      <AddTodo />
      <TodoList />
      <Swapi />
      <Footer />
    </div>
  );
}