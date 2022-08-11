"use strict";
class ProjectInput {
    constructor() {
        this.submitHandler = (e) => {
            e.preventDefault();
            console.log(this.gatherInputs());
        };
        this.inputTitle = document.getElementById("title");
        console.log(this.inputTitle);
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
        console.log("test");
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