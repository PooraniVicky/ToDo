var tasks = [];
//todo list function
function listTask() {
  const taskList = document.getElementById("taskList")
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    var col = document.createElement("div");
    col.classList.add("col-xl-3", "col-lg-4", "col-sm-12", "col-md-6")
    col.innerHTML = `<div class="card">
 <h3 class="card-title">${task.title}</h3>
  <div class="card-body">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
     <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
    </svg>
  <button onclick="editTask(${task.id})">Edit</button>  
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
     <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
   </svg>
  <button onclick="deleteTask(${task.id})">Delete</button>
   </div>
</div>`
    taskList.appendChild(col);
  })
}
// function to add a newtask
function addTask() {
  const input = document.getElementById("taskInput")
  const title = input.value.trim();

  const newTask = {
    id: tasks.length + 1,
    title: title,
  };

  tasks.push(newTask);
  input.value = "";
  listTask();
}
// function to edit a task
function editTask(id) {
  const newTitle = prompt("Enter new one");
  if (newTitle !== null) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.title = newTitle;
      listTask();
    }
  }
}
//func to delete a task
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  listTask();
}
//initial task list
listTask();









