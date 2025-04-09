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
let selectedAnswers = Array(questions.length).fill(null); 

function startQuiz(){
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Dalsi";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + 
    currentQuestion.question; //1

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        if (selectedAnswers[currentQuestionIndex] === answer.text){
            button.classList.add("active");
        }

        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
         
    });

}

function resetState(){
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;

    const buttons = answerButtons.querySelectorAll("button");
    buttons.forEach(btn => btn.classList.remove("active"));

    selectedBtn.classList.add("active");
    selectedAnswers[currentQuestionIndex] = selectedBtn.innerHTML;
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        startQuiz();
    }
}

function handlePrevButton(){
    if (currentQuestionIndex > 0){
        currentQuestionIndex--;
        showQuestion();
    }
}


nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

prevButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handlePrevButton();
    }else{
        startQuiz();
    }
});


startQuiz();