import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";

export default function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length < 3) return;

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введіть задачу..."
      />
      <button className="button" type="submit">
        Добавить
      </button>
    </form>
  );
}