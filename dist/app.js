"use strict";
class ProjectInput {
    constructor() {
        this.submitHandler = (e) => {
            e.preventDefault();
            const task = this.gatherInputs();
            this.todoList.push(task);
            console.log(this.todoList);
        };
        this.inputTitle = document.getElementById("title");
        this.taskDescription = document.getElementById("description");
        this.taskDate = document.getElementById("date");
        this.todoForm = document.getElementById("todo-form");
        this.todoForm.addEventListener("submit", this.submitHandler);
        this.todoList = [];
        this.attach();
        this.submitHandler = this.submitHandler.bind(this);
    }
    gatherInputs() {
        const title = this.inputTitle.value;
        const description = this.taskDescription.value;
        const date = this.taskDate.value;
        return {
            title,
            description,
            date,
        };
    }
    attach() { }
}
new ProjectInput();
//# sourceMappingURL=app.js.map