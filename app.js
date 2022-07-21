var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.root = document.getElementById("root");
        this.attach();
    }
    ProjectInput.prototype.attach = function () {
        var div = document.createElement("div");
        div.setAttribute("id", "container");
        this.root.appendChild(div);
    };
    return ProjectInput;
}());
new ProjectInput();
