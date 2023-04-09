let tasksList = [];

class LocalStorage{
    static getToDoLists(){
        if(localStorage.getItem('tasks')){
            tasksList = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasksList;
    }

    static deleteTask(taskID){
        tasksList = LocalStorage.getToDoLists();
        tasksList = tasksList.filter(e => e.id != taskID);
        localStorage.setItem('tasks',JSON.stringify(tasksList));
    }

    static updateAllTasks(tasksList){
        window.localStorage.setItem("tasks", JSON.stringify(tasksList));
    }

    static updateAllTasks(tasksList){
        window.localStorage.setItem("tasks", JSON.stringify(tasksList));
    }

    static addTaskToList(task){
        tasksList = LocalStorage.getToDoLists();
        tasksList.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasksList));
    }

    static compTask(taskID){
        tasksList = LocalStorage.getToDoLists();
        for(let i =0;i<tasksList.length ;i++){
            if(tasksList[i].id == taskID){
                tasksList[i].completed == false ? tasksList[i].completed = true : tasksList[i].completed = false;
            }
        }
        LocalStorage.updateAllTasks(tasksList);
    }

    static deleteAll(){
        window.localStorage.removeItem("tasks");
    }
}

export default LocalStorage;