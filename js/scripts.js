// Home-work21.1
//Оптимизированный код (ES6 + Babel)
$(document).ready(() => {
  const taskInput = $('#taskInput');
  const taskList = $('#taskList');

  // Добавление задачи
  $('#addTask').on('click', () => {
    const taskText = taskInput.val().trim();

    if (!taskText) return;

    taskList.append(createTask(taskText));
    taskInput.val('');
  });

  // Открытие модалки
  taskList.on('click', '.task-item', function () {
    const text = $(this).text();
    showModal(text);
  });
});

// Создание задачи
const createTask = (text) => `
  <li class="list-group-item task-item">
    ${text}
  </li>
`;

// Показ модального окна
const showModal = (text) => {
  $('#modalTaskText').text(text);
  const modal = new bootstrap.Modal(document.getElementById('taskModal'));
  modal.show();
};