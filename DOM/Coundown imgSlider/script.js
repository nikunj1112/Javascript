
var images = [

    "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502091791712-a43262c96f9b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1634189776353-030d2269e69f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1723121974438-5609f9e0abeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    " https://images.unsplash.com/photo-1562559294-fb540336442c?q=80&w=2125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    " https://images.unsplash.com/photo-1667846969295-d6ca67c4b61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "

]


const img = document.getElementById("img");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const autoBtn = document.getElementById("auto");
const stopBtn = document.getElementById("stop");

var index = 0;
var id;


function showImages() {
    img.src = images[index];
    document.body.style.backgroundImage = `url(${images[index]})`;
}
showImages();

function nextImages() {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }
    showImages();
}


function prevImages() {
    if (index > 0) {
        index--;
    }
    showImages(index);
}

function autoImages() {
    id = setInterval(() => {
        nextImages();
    }, 1000);
}

function stopImages() {
    clearInterval(id);
}



nextBtn.addEventListener("click", () => {
    nextImages();
    
});

prevBtn.addEventListener("click", () => {
    prevImages();
});

autoBtn.addEventListener("click", () => {
    autoImages();
});

stopBtn.addEventListener("click", () => {
    stopImages();
});



