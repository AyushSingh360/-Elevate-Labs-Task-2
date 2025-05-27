document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  addTaskBtn.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'task';

    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    const btnGroup = document.createElement('div');
    btnGroup.className = 'task-buttons';

    const doneBtn = document.createElement('button');
    doneBtn.innerHTML = '✔️';
    doneBtn.title = 'Mark as done';
    doneBtn.onclick = () => {
      li.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.title = 'Delete task';
    deleteBtn.onclick = () => {
      taskList.removeChild(li);
    };

    btnGroup.appendChild(doneBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(btnGroup);

    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
  }
});
