import ToDoList from './modules/toDoList.js';
import LocalStorage from './modules/LocalStorage.js';
import UserInterface from './modules/UserInterface.js';
//open pup
UserInterface.openPup();
//close pup 
UserInterface.closePup();
//display to do list 
UserInterface.displayToDoList();
// add task
let submitTask = document.querySelector('.create-task');
submitTask.onclick = function (event) {
    event.preventDefault();
    let inputTask = document.querySelector('.task-input');
    let priority = document.querySelector('.priority-level');
    if (inputTask.value !== "" && priority.value !== "") {
        //create task
        let task = new ToDoList(inputTask.value, priority.value);
        //add task to userInterface
        UserInterface.addTaskToPage(task);
        //add task to localStorage
        LocalStorage.addTaskToList(task);
        //clear filed
        inputTask.value = ""
        window.location.reload();
    }
};

//delete task from page and local storage
UserInterface.deleteTask();

//delete all task
UserInterface.deleteAll();

//update task status (completed or not )
UserInterface.updateTaskStatus();



