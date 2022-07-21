"use strict";
class ProjectInput {
    constructor() {
        this.root = document.getElementById("root");
        this.attach();
    }
    attach() {
        const div = document.createElement("div");
        div.setAttribute("id", "container");
        this.root.appendChild(div);
    }
}
new ProjectInput();
//# sourceMappingURL=app.js.map