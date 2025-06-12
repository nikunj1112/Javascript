

const InputBox = document.getElementById("input-box");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

const OutputBox = document.getElementById("output-box")

let todo = []

function DisplayTodo() {

    OutputBox.innerHTML = "  ";

    todo.forEach((todos, index) => {
        const div = document.createElement("div");
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const btndiv = document.createElement("div")
        const editButton = document.createElement("button");
        const delButton = document.createElement("button");


        delButton.innerHTML = "✖"
        delButton.style.fontSize = "24px"
        editButton.innerHTML = "✏️"
        editButton.style.fontSize = "20px"
        li.textContent = todos;

        delButton.addEventListener('click', () => {
            deleteTodo(index);
        });

        editButton.addEventListener('click', () => {
            editTodo(index);
        });

        btndiv.appendChild(editButton);
        btndiv.appendChild(delButton);

        div.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(btndiv);

        OutputBox.appendChild(div);

    });
}

function deleteTodo(index) {
    todo.splice(index, 1);
    DisplayTodo();

}

function editTodo(index) {
    input.value = todo[index];
    todo.splice(index, 1);

}

btn.addEventListener("click", () => {
    var value = input.value
    todo.push(value);
    input.value = ""; 
    DisplayTodo();
    
});


DisplayTodo();




