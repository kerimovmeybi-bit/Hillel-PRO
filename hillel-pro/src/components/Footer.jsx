import { useDispatch } from "react-redux";
import { clearTodos } from "../redux/todos/todosSlice";

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <footer>
      <button onClick={() => dispatch(clearTodos())}>
         Очистити TODO
      </button>
    </footer>
  );
}