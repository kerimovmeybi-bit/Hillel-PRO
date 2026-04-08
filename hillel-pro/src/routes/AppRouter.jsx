import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Todo from "../pages/Todo/Todo";
import Swapi from "../pages/Swapi/Swapi";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/swapi" element={<Swapi />} />
    </Routes>
  );
}