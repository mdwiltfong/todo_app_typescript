class ProjectInput {
  root: HTMLDivElement;
  constructor() {
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
