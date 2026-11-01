const questions = [
    {
        question: "What is the capital of India?",
        options: ["Hyderabad", "Mumbai", "New Delhi", "Chennai"],
        answer: "New Delhi"
    },
    {
        question: "Which language is used for web development?",
        options: ["HTML", "Python", "Java", "All of these"],
        answer: "All of these"
    },
    {
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    }
];

let currentQuestion = 0;
let score = 0;

const quiz = document.getElementById("quiz");

function showQuestion() {
    const q = questions[currentQuestion];

    quiz.innerHTML = `
        <h2>${q.question}</h2>
        ${q.options.map(option =>
            `<button onclick="checkAnswer('${option}')">${option}</button>`
        ).join("")}
    `;
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        quiz.innerHTML = `
            <h2>Quiz Completed!</h2>
            <h3>Your Score: ${score} / 3</h3>
        `;
    }
}

showQuestion();
