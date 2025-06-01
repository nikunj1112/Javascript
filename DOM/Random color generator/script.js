const btn = document.getElementById("Submit-btn");
const body = document.getElementsByTagName("body");
const copy = document.getElementById("Copy-btn");
const copied = document.getElementById("Copied")

btn.addEventListener("click", () => {

    var RandomColor = Math.floor(Math.random() * (256 * 256 * 256));
    var random = (`#${RandomColor.toString(16)}`);
    document.body.style.backgroundColor = random;
    btn.style.backgroundColor = random;
    btn.style.color = "white"
    btn.textContent = random;
    copied.innerText = ""

    copy.addEventListener("click", () => {
        navigator.clipboard.writeText(random);
        copy.style.color = random;
        copied.innerText = (`${random} Color Code Copied..!`)
        copied.style.color = random;
    });
});