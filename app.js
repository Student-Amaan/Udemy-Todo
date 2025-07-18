// document.addEventListener("DOMContentLoaded", () => {
//   let input = document.getElementById("input-task");
//   let unorderList = document.getElementById("unorder");
//   let button = document.getElementById("btn");

//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//   tasks.forEach((task) => renderTask(task));

//   button.addEventListener("click", () => {
//     const taskText = input.value.trim();
//     if (taskText === "") return;

//     const newTask = {
//       id: Date.now(),
//       text: taskText,
//       completed: false,
//     };
//     tasks.push(newTask);
//     saveTasks();
//     input.value = "";
//     console.log(tasks);
//   });

//   function renderTask(task) {
//     const li = document.createElement("li");
//     li.setAttribute("data-id", task.id);
//     li.innerHTML = `
//         <span>${task.text}</span>
//         <button>delete</button>`;
//         unorderList.appendChild(li);
//   }

//   function saveTasks() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }
// });

// Get references to DOM elements
const inputTask = document.getElementById("input-task");
const addBtn = document.getElementById("btn");
const taskList = document.getElementById("unorder");

// Function to add a task
addBtn.addEventListener("click", () => {
  const taskText = inputTask.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.backgroundColor = "red";
  deleteBtn.style.color = "white";
  deleteBtn.style.borderRadius = "5px";
  deleteBtn.style.border = "none";
  deleteBtn.style.cursor = "pointer";

  // Remove task when delete button is clicked
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Append the button to the list item
  li.appendChild(deleteBtn);

  // Add the list item to the task list
  taskList.appendChild(li);

  // Clear the input field
  inputTask.value = "";
});

