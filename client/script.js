const API = "http://localhost:5000/api/todos";

async function getTodos() {
  const res = await fetch(API);
  const todos = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${todo.text}
      <button onclick="deleteTodo('${todo._id}')">❌</button>
    `;

    list.appendChild(li);
  });
}

async function addTodo() {
  const input = document.getElementById("taskInput");

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: input.value })
  });

  input.value = "";
  getTodos();
}

async function deleteTodo(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  getTodos();
}

getTodos();