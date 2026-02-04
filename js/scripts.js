//Home-work15.1 
const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todosWrapper = document.querySelector(".js--todos-wrapper");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// ---------- helpers ----------
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoItem(todo, index) {
  const li = document.createElement("li");
  li.classList.add("todo-item");

  if (todo.completed) {
    li.classList.add("todo-item--checked");
  }

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  checkbox.addEventListener("change", () => {
    todos[index].completed = checkbox.checked;
    li.classList.toggle("todo-item--checked", checkbox.checked);
    saveTodos();
  });

  // text
  const span = document.createElement("span");
  span.classList.add("todo-item__description");
  span.textContent = todo.text;

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("todo-item__delete");
  deleteBtn.textContent = "Видалити";

  deleteBtn.addEventListener("click", () => {
    todos.splice(index, 1);
    renderTodos();
    saveTodos();
  });

  // append
  li.append(checkbox, span, deleteBtn);

  return li;
}

// ---------- render ----------
function renderTodos() {
  todosWrapper.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoEl = createTodoItem(todo, index);
    todosWrapper.appendChild(todoEl);
  });
}

// ---------- add ----------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  todos.push({
    text,
    completed: false,
  });

  input.value = "";
  renderTodos();
  saveTodos();
});

// ---------- init ----------
renderTodos();
