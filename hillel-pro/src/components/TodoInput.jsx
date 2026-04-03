import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todos.actions";

export default function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim().length < 5) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="todo-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}