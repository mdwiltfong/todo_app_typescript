class ProjectInput {
  root: HTMLDivElement;
  constructor() {
    /* 
    We will need:
    - A couple input fields: Task Title, Task Description, To-do date. All of which can be text fields. 
    */

    this.root = document.getElementById("root") as HTMLDivElement;

    this.attach();
  }

  attach(): void {
    const div = document.createElement("div");
    div.setAttribute("id", "container");
    this.root.appendChild(div);
  }
}

new ProjectInput();
