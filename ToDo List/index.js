const input = document.getElementById("floatingInputGroup1");
const addButton = document.getElementById("floatingAddButton");
const taskList = document.getElementById("taskList");
const date = new Date();
const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
const todos = []

class TaskEvents {
    item
    itemContent
    taskObject
    event
    
    constructor(item, itemContent, taskObject, event) {
        this.item = item;
        this.itemContent = itemContent;
        this.taskObject = taskObject;
        this.event = event;
    }
    
    toggleTaskStatus() {
        this.item.classList.toggle("list-group-item-success");
        this.itemContent.classList.toggle("text-decoration-line-through");

        this.taskObject.completed = !this.taskObject.completed;

        if (this.taskObject.completed) {
            this.taskObject.status = 'done';
            this.taskObject.endDate = currentDate;
        } else {
            this.taskObject.status = 'todo';
            this.taskObject.endDate = null;
        }
    }
    deleteTask(event) {
        event.stopPropagation();
        this.item.remove();
    }
}

class TaskAPI extends TaskEvents {
    constructor(taskObject) {
        super(null, null, taskObject);
    }
    
    createTask() {
        const item = document.createElement("li");
        item.className = "list-group-item d-flex justify-content-between align-items-center"
        this.item = item
        
        this.item.addEventListener("click", () => this.toggleTaskStatus());
        
        taskList.appendChild(item)
        
        return item;
    }
    createContent() {
        const itemContent = document.createElement("span");
        itemContent.className = "flex-grow-1 text-muted";
        itemContent.innerText = this.taskObject.title;
        this.item.appendChild(itemContent);
        this.itemContent = itemContent;
        
        return itemContent;
    }
    createDeleteButton() {
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-sm btn-outline-danger ms-2";
        deleteButton.innerText = "Del";
        deleteButton.addEventListener("click", (event) => this.deleteTask(event));
        this.item.appendChild(deleteButton);
        
        return deleteButton;
    }

    build() {
        this.createTask();
        this.createContent();
        this.createDeleteButton();
        return this.item;
    }
}

addButton.addEventListener("click", (e) => {
    const todoItem = {
        title: input.value,
        status: 'todo',
        completed: false,
        startDate: currentDate,
        endDate: null,
    }
    
    todos.push(todoItem);
    
    const Task = new TaskAPI(todoItem);

    Task.build()
});
