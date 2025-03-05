function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") return;
    
    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button class='remove' onclick='removeTask(this)'>X</button>`;
    taskList.appendChild(li);
    
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}