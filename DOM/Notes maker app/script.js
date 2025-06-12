const title = document.getElementById("title");
const note = document.getElementById("note");
const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("delete");
const outputBox = document.getElementById("outputBox");

let noteList = [];
let titleList = [];

function display() {
    outputBox.innerHTML = " ";

    noteList.forEach((noteText, index) => {
        const card = document.createElement("div");
        const noteTitle = document.createElement("h5");
        const noteBody = document.createElement("p");
        const btnGroup = document.createElement("div");
        const editBtn = document.createElement("button");
        const delBtn = document.createElement("button");



        card.className = "note-card";

        noteTitle.className = "note-title";
        noteTitle.textContent = titleList[index];

        noteBody.textContent = noteText;

        btnGroup.className = "d-flex justify-content-between mt-3";

        editBtn.className = "btn btn-sm btn-warning";
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            edit(index);
        })

        delBtn.className = "btn btn-sm btn-danger";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => {
            cancel(index);
        })


        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(delBtn);
        card.appendChild(noteTitle);
        card.appendChild(noteBody);
        card.appendChild(btnGroup);

        outputBox.appendChild(card);
    });
}

function edit(index) {
    note.value = noteList[index];
    title.value = titleList[index];
    noteList.splice(index, 1);
    titleList.splice(index, 1);
    display();
}

function cancel(index) {
    noteList.splice(index, 1);
    titleList.splice(index, 1);
    display();
}

addBtn.addEventListener("click", () => {
    const noteText = note.value;
    const titleText = title.value;
    if (noteText && titleText) {
        noteList.push(noteText);
        titleList.push(titleText);
        display();
        note.value = " ";
        title.value = " ";
    } else {
        alert("Please fill both title and note.");
    }
});

clearBtn.addEventListener("click", () => {
    noteList = [];
    titleList = [];
    display();

});

