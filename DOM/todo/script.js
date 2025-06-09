

const InputBox = document.getElementById("input-box");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

const OutputBox = document.getElementById("output-box")

let todo = []

function DisplayTodo() {

    OutputBox.innerHTML = " ";


    todo.forEach((todos, index) => {
        const div = document.createElement("div");
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const button = document.createElement("button");

        button.innerHTML = "✖"
        li.textContent = todos;




        div.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(button);

        OutputBox.appendChild(div);




    });

}

btn.addEventListener("click", () => {

    var value = input.value
    todo.push(value);
    DisplayTodo();


});
DisplayTodo();




