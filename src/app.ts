type Todo = {
  title: string;
  description: string;
  date: string;
};
class ProjectInput {
  inputTitle: HTMLInputElement;
  taskDescription: HTMLTextAreaElement;
  taskDate: HTMLInputElement;
  todoForm: HTMLFormElement;
  todoList: Todo[];
  constructor() {
    this.inputTitle = document.getElementById("title") as HTMLInputElement;

    this.taskDescription = document.getElementById(
      "description"
    ) as HTMLTextAreaElement;
    this.taskDate = document.getElementById("date") as HTMLInputElement;
    this.todoForm = document.getElementById("todo-form") as HTMLFormElement;
    this.todoForm.addEventListener("submit", this.submitHandler);
    this.todoList = [];
    this.attach();
    this.submitHandler = this.submitHandler.bind(this);
  }
  private gatherInputs() {
    const title = this.inputTitle.value;
    const description = this.taskDescription.value;
    const date = this.taskDate.value;
    return {
      title,
      description,
      date,
    };
  }
  private render = () => {
    this.todoList.forEach((todo) => {});
  };
  //TODO: make a formatTodo function to convert todo objects into HTML node
  private formatTodo(todo: Todo) {}
  private submitHandler = (e: Event) => {
    e.preventDefault();
    const task = this.gatherInputs();
    this.todoList.push(task);
  };

  attach(): void {}
}

new ProjectInput();
