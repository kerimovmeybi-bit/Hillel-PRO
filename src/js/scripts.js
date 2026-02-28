// Home-work22.1
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import $ from 'jquery';

$(document).ready(function () {

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

  $('#taskList').on('click', '.task-item', function () {
    const text = $(this).text();

    $('#modalTaskText').text(text);

    const modal = new bootstrap.Modal(document.getElementById('taskModal'));
    modal.show();
  });

});