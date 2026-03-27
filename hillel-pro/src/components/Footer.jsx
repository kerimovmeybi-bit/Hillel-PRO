import { useSelector } from "react-redux";

export default function Footer() {
  const count = useSelector((state) => state.todos.todos.length);

  return <p className="footer">Всього: {count}</p>;
}