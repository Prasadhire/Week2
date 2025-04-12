let todo = JSON.parse(localStorage.getItem("todoList")) || [];

function saveToLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(todo));
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  todo.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;
    li.appendChild(span);

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn editBtn";
    editBtn.onclick = () => updateTask(index);
    li.appendChild(editBtn);

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn deleteBtn";
    deleteBtn.onclick = () => deleteTask(index);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    todo.push(task);
    saveToLocalStorage();
    displayTasks();
    taskInput.value = "";
  }

  Swal.fire({
    icon: 'success',
    title: 'Task Added!',
    text: 'Your new task has been successfully added.',
    timer: 1500,
    showConfirmButton: false
  });

}

function deleteTask(index) {
  
  Swal.fire({
    title: 'Are you sure?',
    text: "This task will be deleted!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    
  }).then((result) => {

    if (result.isConfirmed) {
       
    todo.splice(index, 1);
    saveToLocalStorage();
    displayTasks();

    Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
    }
  });

}

function updateTask(index) {

  Swal.fire({
    title: 'Update Task',
    input: 'text',
    inputLabel: 'Edit your task',
    inputValue: todo[index],
    showCancelButton: true,
    confirmButtonText: 'Update',

  }).then((result) => {
    
    if (result.isConfirmed && result.value.trim() !== '') {
      todo[index] = result.value.trim();
      saveToLocalStorage();
      displayTasks();

      Swal.fire('Updated!', 'Your task has been updated.', 'success');
    }
  });
}


