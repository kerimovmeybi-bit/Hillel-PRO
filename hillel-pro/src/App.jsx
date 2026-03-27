import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <h1>TODO</h1>
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
}