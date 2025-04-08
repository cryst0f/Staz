const questions = [
    {
        question: "Otazka cislo jedna",
        answers: [
            { text: "odpoved 1"},
            { text: "odpoved 2"},           
        ]
    },
    {
        question: "Otazka cislo dva",
        answers: [
            {text: "odpoved 1"},
            {text: "odpoved 2"},           
        ]
    },
    {
        question: "Otazka cislo tri",
        answers: [
            {text: "odpoved 1"},
            {text: "odpoved 2"},           
        ]
    },
    {
        question: "Otazka cislo ctyri",
        answers: [
            {text: "odpoved 1"},
            {text: "odpoved 2"},           
        ]
    },
    {
        question: "Otazka cislo pet",
        answers: [
            {text: "odpoved 1"},
            {text: "odpoved 2"},           
        ]
    },
    {
        question: "Otazka cislo sest",
        answers: [
            {text: "odpoved 1"},
            {text: "odpoved 2"},           
        ]
    },
    {
        question: "Otazka cislo sedm",
        answers: [
            {text: "odpoved 1"},
            {text: "odpoved 2"},           
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");

let currentQuestionIndex = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Dalsi";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + 
    currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    })

}

startQuiz();