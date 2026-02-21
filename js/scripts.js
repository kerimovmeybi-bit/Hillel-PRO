// Home-work20.1
$(document).ready(function () {

  // Додавання задачі
  $('#addTask').click(function () {
    const taskText = $('#taskInput').val().trim();

    if (taskText !== '') {
      $('#taskList').append(`
        <li class="list-group-item task-item">
          ${taskText}
        </li>
      `);

      $('#taskInput').val('');
    }
  });

  // Клік по задачі (відкриває модалку)
  $('#taskList').on('click', '.task-item', function () {
    const text = $(this).text();

    $('#modalTaskText').text(text);

    const modal = new bootstrap.Modal(document.getElementById('taskModal'));
    modal.show();
  });

});
