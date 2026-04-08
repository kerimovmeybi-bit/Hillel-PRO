import { useDispatch, useSelector } from "react-redux";
import { addTodoRequest, removeTodo } from "../../redux/slices/todoSlice";
import { useState } from "react";

export default function Todo() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.todo);
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(addTodoRequest(text))}>
        Add
      </button>

      {list.map((t, i) => (
        <div key={i}>
          {t}
          <button onClick={() => dispatch(removeTodo(i))}>X</button>
        </div>
      ))}
    </div>
  );
}