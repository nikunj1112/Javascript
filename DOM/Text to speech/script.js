const mic = document.querySelector(".mic");
const textArea = document.querySelector("#textArea");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const clearBtn = document.querySelector("#clearBtn");
// const GujaratiBtn = document.querySelector("#GujaratiBtn");


mic.addEventListener("click", () => {


    if (textArea.value == "") {
        alert("✍️ Please type something before clicking the button!");
    }
    const micVoice = new SpeechSynthesisUtterance(textArea.value);
    micVoice.lang = "en-IN";

    micVoice.onboundary = function (event){
        if(event.name === "word"){
            const start = event.charIndex;
            const end = start + event.charLength;

            textArea.focus();
            textArea.setSelectionRange(start, end);
        }
    };

    micVoice.onend = function () {
        textArea.setSelectionRange(0, 0);
    };

    speechSynthesis.cancel();

    speechSynthesis.speak(micVoice);
    
});

pauseBtn.addEventListener("click", () => {
    speechSynthesis.pause();
});

resumeBtn.addEventListener("click", () => {
    speechSynthesis.resume();
});

clearBtn.addEventListener("click", () => {
    speechSynthesis.cancel();
    textArea.value = " ";
});




// function speakGujarati(){
//     if(textArea.value == ""){
//         alert("📢 કૃપા કરીને પહેલાં કંઈક લખો....!");
//     }
//     const micVoices = new SpeechSynthesisUtterance(textArea.value);
//     micVoices.lang = "gu-IN "; // Gujarati voice મારા Mac browser/systemમાં available નથી.
//     speechSynthesis.speak(micVoices);
// };

// GujaratiBtn.addEventListener("click" , () =>{
// speakGujarati();
// });



