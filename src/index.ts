// import {v4 as uuidV4} from 'uuid'

// console.log(uuidV4());



class TodoApp {
    private addButton: HTMLButtonElement;
    private inputField: HTMLInputElement;
    private todoList: HTMLUListElement;

    constructor() {
        this.addButton = document.getElementById("add-btn") as HTMLButtonElement;
        this.inputField = document.getElementById("todo-input") as HTMLInputElement;
        this.todoList = document.getElementById("todo-list") as HTMLUListElement;

        this.addButton.onclick = () => this.addTodo();
        this.inputField.addEventListener("keypress", (event) => {
            if (event.key === "Enter") this.addTodo();
        });
    }

    private addTodo() {
        const task = this.inputField.value.trim();
        if (task) {
            const listItem = this.createTodoItem(task);
            this.todoList.appendChild(listItem);
            this.inputField.value = ""; // Clear input field
        } else {
            alert("Please enter a task!");
        }
    }

    private createTodoItem(task: string): HTMLLIElement {
        const listItem = document.createElement("li");
        listItem.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = () => this.todoList.removeChild(listItem);

        listItem.appendChild(deleteButton);
        return listItem;
    }
}

// Initialize the To-Do application
new TodoApp();
