class ToDoList{
    constructor(title,priority){
        this.id =  "id" + Math.random().toString(16).slice(2),
        this.title =  title,
        this.priority = priority,
        this.completed = false
        this.time = Date.now();
    }
}

export default ToDoList;