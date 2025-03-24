// Load tasks from localStorage when the page loads 
document.addEventListener("DOMContentLoaded", function () {
    loadTasks(); // This function loads and displays the tasks saved in localStorage when the page is loaded
});

// Adding the text to the list and saving it (very first)
function add() {
    const input = document.getElementById('taskInput');
    const inputtrim = input.value.trim(); // Get the trimmed value from the input
    if (inputtrim !== "") {
        const task = { text: inputtrim, completed: false }; // Create an object to store the task text and its completion status
        saveTask(task); // Save the new task to localStorage
        renderTask(task); // Render the new task on the page
        input.value = ""; // Clear the input field after adding the task
    } else {
        alert("To add to the list, please write something in the box first."); // Alert if input is empty
    }
}
// Add task when pressing Enter inside the input field
document.getElementById('taskInput').addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        add(); // Call the add function when Enter is pressed
    }
});

// Save a task to localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get tasks from localStorage, or use an empty array if none exist
    tasks.push(task); // Add the new task to the tasks array
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the updated tasks array back to localStorage
}

// Render a task in the UI
function renderTask(task, index = null) {
    const listlocation = document.getElementById('List'); // the place where the whole list will appear

    const wholediv = document.createElement('div'); // Create a container for the task
    wholediv.classList.add("flex", "justify-between", "mt-2", "task");

    const leftdiv = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.classList.add('mx-2');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed; // Set checkbox checked status based on task completion
    checkbox.addEventListener("change", function () {
        updateTaskCompletion(index, checkbox.checked); // this whole is to detect whether the box is checked or not and save it to local storage
    });

    const listtext = document.createElement('span');
    listtext.textContent = task.text; // Set the task text
    if (task.completed){
        listtext.style.textDecoration = "line-through";
    }

    const rightdiv = document.createElement('div');
    const editbutton = document.createElement('button');
    editbutton.textContent = "Edit";
    editbutton.classList.add("bg-white-500", "text-black", "px-4", "me-1", "mb-1", "rounded-full", "border", "border-[#BFA590]", "hover:bg-[#BFA590]", "active:bg-white");
    editbutton.onclick = function () {
        const edit = prompt("Edit here: ", listtext.textContent); 
        if (edit !== null && edit.trim() !== "") { 
            listtext.textContent = edit;
            updateTask(index, edit);
        }
    };
    const deletebutton = document.createElement('button');
    deletebutton.textContent = "Delete";
    deletebutton.classList.add("bg-white-500", "text-black", "px-4", "me-1", "mb-1", "rounded-full", "border", "border-[#BFA590]", "hover:bg-[#BFA590]", "active:bg-white");
    deletebutton.onclick = function () {
        wholediv.remove(); 
        deleteTask(index); //save and load again.
    };

    leftdiv.appendChild(checkbox);
    leftdiv.appendChild(listtext);
    rightdiv.appendChild(editbutton);
    rightdiv.appendChild(deletebutton);
    wholediv.appendChild(leftdiv);
    wholediv.appendChild(rightdiv);

    listlocation.appendChild(wholediv); 
}

// Update a task in localStorage
function updateTask(index, newText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get tasks from localStorage
    tasks[index].text = newText; // Update the task text
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the updated task list back to localStorage
}

// Update task completion status in localStorage
function updateTaskCompletion(index, completed) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get tasks from localStorage
    tasks[index].completed = completed; // Update the completion status of the task
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the updated task list back to localStorage
}

// Delete a task from localStorage
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get tasks from localStorage
    tasks.splice(index, 1); // Remove the task at the specified index
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the updated task list back to localStorage
    loadTasks(); // Re-render the list to reflect the deletion
}

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    document.getElementById('List').innerHTML = ''; 
    tasks.forEach((task, index) => renderTask(task, index)); 
}


// -->code before the local storage
// -->adding the text to the list
// function add(){
//     const input = document.getElementById('taskInput');
//     const inputtrim = input.value.trim();
//     if(inputtrim!==""){
//         const wholediv = document.createElement('div');
//         wholediv.classList.add("flex", "justify-between", "mt-2","task");

//         const leftdiv = document.createElement('div');
//         const checkbox = document.createElement('input');
//         checkbox.classList.add('mx-2');
//         checkbox.type = 'checkbox';
//         const listtext = document.createElement('span');
//         listtext.textContent = inputtrim;

//         const rightdiv = document.createElement('div');
//         const editbutton = document.createElement('button');
//         editbutton.textContent = "Edit";
//         editbutton.classList.add("bg-white-500", "text-black", "px-4","me-1","mb-1", "rounded-full","border","border-[#BFA590]", "hover:bg-[#BFA590]", "active:bg-white");
//         editbutton.onclick=function(){
//             const edit = prompt("Edit here: ",listtext.textContent);
//             if(edit!==null && edit.trim()!==""){
//                 listtext.textContent = edit;
//             }
//         }
//         const deletebutton =document.createElement('button');
//         deletebutton.textContent = "Delete";
//         deletebutton.classList.add("bg-white-500", "text-black", "px-4","me-1","mb-1", "rounded-full","border","border-[#BFA590]", "hover:bg-[#BFA590]", "active:bg-white");
//         deletebutton.onclick=function(){
//             wholediv.remove();
//         }

//         leftdiv.appendChild(checkbox)
//         leftdiv.appendChild(listtext)
//         rightdiv.appendChild(editbutton)
//         rightdiv.appendChild(deletebutton)
//         wholediv.appendChild(leftdiv)
//         wholediv.appendChild(rightdiv)

//         const listlocation = document.getElementById('List');
//         listlocation.appendChild(wholediv)
//         const hr = document.createElement('hr');
//         listlocation.appendChild(hr);

//         input.value="";
//     }
//     else{
//         alert("Please write something in the text box.")
//     }
// }

// -->add the list using keyboard.
// document.getElementById('taskInput').addEventListener("keydown",function(event){
//     if(event.key === 'Enter'){
//         add();
//     }
// })
