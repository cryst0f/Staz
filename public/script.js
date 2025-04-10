const questions = [
    {
        question: "Otazka cislo jedna",
        type: "select",
        answers: [
            { text: "odpoved 1"},
            { text: "odpoved 2"},           
        ]
    },
    {
        question: "Otazka cislo dva",
        type: "buttons",
        answers: [
            {text: "odpoved 1"},
            {text: "odpoved 2"},           
        ]
    },
    {
        question: "Otazka cislo tri",
        type: "buttons",
        answers: [
            {text: "odpoved 1"},
            {text: "odpoved 2"},           
        ]
    },
    {
        question: "Otazka cislo ctyri",
        type: "select",
        answers: [
            {text: "odpoved 1"},
            {text: "odpoved 2"},           
        ]
    },
    {
        question: "Otazka cislo pet",
        type: "buttons",
        answers: [
            {text: "odpoved 1"},
            {text: "odpoved 2"},           
        ]
    },
    {
        question: "Otazka cislo sest",
        type: "buttons",
        answers: [
            {text: "odpoved 1"},
            {text: "odpoved 2"},           
        ]
    },
    {
        question: "Otazka cislo sedm",
        type: "buttons",
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
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    if (currentQuestion.type === "buttons") {
      answerButtons.style.display = "block";  // Pokud je otázka typu buttons, skryj select
      const selectBox = document.querySelector('.select-box');
      if (selectBox) {
        selectBox.style.display = "none"; // Skrytí select boxu a šipky
      }

      currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
      });
    } else if (currentQuestion.type === "select") {
      const selectBox = document.createElement("select");
      selectBox.classList.add("custom-select");
      selectBox.innerHTML = `<option disabled selected>Vyber možnost</option>`;

      currentQuestion.answers.forEach(answer => {
        const option = document.createElement("option");
        option.value = answer.text;
        option.innerHTML = answer.text;
        selectBox.appendChild(option);
      });

      answerButtons.appendChild(selectBox);
      const selectContainer = document.querySelector('.select-box');
      if (selectContainer) {
        selectContainer.style.display = "block"; // Ukáže select box a šipku
      }
    }
}

function resetState(){
    while (answerButtons.firstChild) {
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