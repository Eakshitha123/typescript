// import {v4 as uuidV4} from 'uuid'

// console.log(uuidV4());



const addButton = document.getElementById("add-btn") as HTMLButtonElement;
const inputField = document.getElementById("todo-input") as HTMLInputElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;


function createTodoItem(task: string): void {
    const listItem = document.createElement("li");
    listItem.textContent = task;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = () => {
        todoList.removeChild(listItem);
    };

 
    listItem.appendChild(deleteButton);
    
    todoList.appendChild(listItem);
}

addButton.onclick = () => {
    const task = inputField.value.trim();
    if (task) {
        createTodoItem(task);
        inputField.value = ""; 
    } else {
        alert("Please enter a task!");
    }
};



inputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addButton.click();
    }
});
