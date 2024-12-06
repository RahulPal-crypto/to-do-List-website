// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
const addTask = () => {
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task item
  const taskItem = document.createElement("li");

  // Task text
  const taskText = document.createElement("span");
  taskText.textContent = taskValue;

  // Action buttons
  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  // Complete button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  // Append buttons
  taskActions.appendChild(completeButton);
  taskActions.appendChild(deleteButton);

  // Append task and actions
  taskItem.appendChild(taskText);
  taskItem.appendChild(taskActions);

  // Add task to the list
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = "";
};

// Add task on button click
addTaskButton.addEventListener("click", addTask);

// Add task on pressing Enter key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
