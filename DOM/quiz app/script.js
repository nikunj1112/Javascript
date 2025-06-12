const Quizdata = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: "New Delhi"
    },
    {
        question: "Which river is known as the 'Ganga of the South'?",
        options: ["Godavari", "Krishna", "Cauvery", "Narmada"],
        answer: "Godavari"
    },
    {
        question: "How many states are there in India (as of current knowledge)?",
        options: ["27", "28", "29", "30"],
        answer: "28"
    },
    {
        question: "Which of the following is an example of a renewable resource?",
        options: ["Coal", "Petroleum", "Solar energy", "Natural gas"],
        answer: "Solar energy"
    },
    {
        question: "What is the highest mountain peak in India?",
        options: ["Mount Everest", "K2 (Godwin Austen)", "Kangchenjunga", "Nanda Devi"],
        answer: "Kangchenjunga"
    },
    {
        question: "Who is known as the 'Father of the Indian Constitution'?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
        answer: "B.R. Ambedkar"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "The study of human society, its development, and organization is called?",
        options: ["Biology", "Chemistry", "Sociology", "Physics"],
        answer: "Sociology"
    },
    {
        question: "What is the primary function of the Reserve Bank of India (RBI)?",
        options: ["Controlling prices of goods", "Issuing currency and regulating banks", "Building roads and infrastructure", "Managing international trade"],
        answer: "Issuing currency and regulating banks"
    },
    {
        question: "Which famous monument is located in Agra, India?",
        options: ["Red Fort", "Qutub Minar", "Taj Mahal", "India Gate"],
        answer: "Taj Mahal"
    }
];

const questionEl = document.getElementById("Question");
const options = document.querySelectorAll(".option");
const answers = document.querySelectorAll(".answer");
const btn = document.getElementById("btn");
const scoreEl = document.getElementById("score");
const quizdetails = document.querySelector(".quiz-details");

let currentIndex = 0;
let userAnswers = [];
let score = 0;

function loadQuestion(index) {
    const q = Quizdata[index];
    questionEl.textContent = `Q-${index + 1}. ${q.question}`;
    options.forEach((opt, i) => {
        opt.textContent = q.options[i];
        answers[i].checked = false;
    });
    quizdetails.textContent = `${index + 1} of ${Quizdata.length}`;
}

function getSelectedAnswer() {
    let selected = null;
    answers.forEach((btn, i) => {
        if (btn.checked) {
            selected = Quizdata[currentIndex].options[i];
        }
    });
    return selected;
}

function calculateScore() {
    userAnswers.forEach((ans, i) => {
        if (ans === Quizdata[i].answer) {
            score++;
        }
    });
}

btn.addEventListener("click", () => {
    const selected = getSelectedAnswer();
    if (selected) {
        userAnswers.push(selected);
        currentIndex++;
        if (currentIndex < Quizdata.length) {
            loadQuestion(currentIndex);
        } else {
            calculateScore();
            questionEl.textContent = "Quiz Completed!";
            scoreEl.textContent = `Score: ${score} / ${Quizdata.length}`;
            btn.disabled = true;
            quizdetails.textContent = "";
        }
    } else {
        alert("Please select an answer before continuing.");
    }
});

loadQuestion(currentIndex);
