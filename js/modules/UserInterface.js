import LocalStorage from "./LocalStorage.js";
import DateCount from "./DateCount.js";
class UserInterface {
    static displayToDoList() {
        const tasksList = LocalStorage.getToDoLists();
        if(tasksList!= ''){
            tasksList.forEach(task=>{
                UserInterface.addTaskToPage(task);
            });
        }else{
            document.querySelector('.main-body').classList.add('empty');
        }
    }

    static deleteTask() {
        const taskDeleteBtn = document.querySelector('.main-body').querySelectorAll('.delete');
        taskDeleteBtn.forEach((task) => {
            const tasksList = LocalStorage.getToDoLists();
            task.addEventListener('click', (e)=>{
                const card = e.target.parentElement.parentElement.parentElement;
                card.remove();
                LocalStorage.deleteTask(card.id);
            });
        });
    }
    static deleteAll() {
        const DeleteAllBtn = document.querySelector('.delete-all');
        const list = document.querySelector('.main-body');
        const cards = document.querySelector('.main-body').querySelectorAll('.card');
        DeleteAllBtn.addEventListener('click', (e)=>{
            cards.forEach((card) => {
                card.remove();
            });
            LocalStorage.deleteAll();
        });
    }

    static updateTaskStatus() {
        const cards = document.querySelector('.main-body').querySelectorAll('.card');
        cards.forEach((card) => {
            const tasksList = LocalStorage.getToDoLists();
            card.addEventListener('click', (e)=>{
                //change status at local storage
                LocalStorage.compTask(card.id);                
                //add done class to card
                card.classList.toggle("done");
            });
        });
    }

    static addTaskToPage(task) {
        const list = document.querySelector('.main-body');
        const card = document.createElement('div');
        card.classList = 'card';
        //check task status and added to card class 
        task.completed == true? card.classList.add("done"):"";
        card.id = task.id;
        card.innerHTML = `
            <h4 class="title">
                ${task.title}
            </h4>
            <p class="priority ${task.priority}">${task.priority} Priority</p>
            <div class="card-footer">
            <p class="time">${DateCount.timeSince(task.time)}</p>
                <p class="delete"><i class="fa-solid fa-trash-can"></i></p>
            </div>
        `;
        list.appendChild(card);
    }

    static openPup(){
        let pup = document.querySelector('.pup');
        let openPup = document.querySelector('.add-task-btn');
        openPup.onclick = ()=>{
            pup.classList.add('open');
            document.body.classList.add('layer');
        }
    }

    static closePup(){
        let pup = document.querySelector('.pup');
        let closePup = document.querySelector('.close-pup');
        closePup.onclick = ()=>{
            pup.classList.remove('open');
            document.body.classList.remove('layer');
        }
    }
}

export default UserInterface;