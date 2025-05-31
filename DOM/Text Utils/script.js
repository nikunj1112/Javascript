const addbtn = document.getElementById("Add")
const input = document.getElementById("text")
const Preview = document.getElementById("Pre")
const UpperCase = document.getElementById("upper")
const lowercase = document.getElementById("lower")
const clear = document.getElementById("clear")
const Summary = document.getElementById("Summary")
const word = document.getElementById("word")
const chat = document.getElementById("char")
const time = document.getElementById("time")
const copy = document.getElementById("Copy")


addbtn.addEventListener("click", () => {
    var newtext = input.value
    Preview.textContent = newtext
    Summary.textContent = (`Summary Of Your Text :`)
    var charcount = newtext.length
    chat.textContent = (`Total Number of Character : ${charcount}`);
    var wordcount = newtext.split(" ")
    word.textContent = (`Total Number of Words :  ${wordcount.length}`);
    time.textContent = (`${wordcount.length * (0.25)} Seconds Read `);

    copy.addEventListener("click", () => {
        navigator.clipboard.writeText(newtext)
    });
    
});

UpperCase.addEventListener("click", () => {
    Preview.textContent = input.value.toUpperCase();
});

lowercase.addEventListener("click", () => {
    Preview.textContent = input.value.toLowerCase();
})

clear.addEventListener("click", () => {
    input.value = " "
    Preview.textContent = " "
    word.textContent = " "
    char.textContent = " "
    time.textContent = " "
    Summary.textContent = " "

})





source code