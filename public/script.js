const questions = [
    {
        question: "V jakém odvětví působíte",
        type: "select",
        answers: [
            { text: "Digitální infrastruktura a služby", value: 1},
            { text: "Drážní doprava", value: 0},
            { text: "Energetika - Elektřina"},
            { text: "Energetika - Plynárenství"},
            { text: "Energetika - Ropa a ropné produkty"},
            { text: "Energetika - Teplárenství"},
            { text: "Energetika - Vodík"},
            { text: "Finanční trh"},
            { text: "Chemický průmysl"},
            { text: "Letecká doprava"},
            { text: "Odpadové hospodářství"},
            { text: "Poštovní a kurýrní služby"},
            { text: "Potravinařský průmysl"},
            { text: "Silniční doprava"},
            { text: "Věda, výzkum a vzdělání"},
            { text: "Veřejná správa a výkon veřejné moci"},
            { text: "Vesmírný průmysl"},
            { text: "Vodní doprava"},
            { text: "Vodní hospodářství"},
            { text: "Vojenský průmysl"},
            { text: "Vodní průmysl"},
            { text: "Zdravotnictví"}
        ],
        evaluate: (answer, question) => {
            const selectedAnswer = question.answers.find(a => a.text === answer);
            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
        }
    },

    //na zaklade prvni otazky -> otazka na sluzbu
    {
        question: "Jakou službu poskytujete",
        type: "select",
        dependsOn:{
            questionIndex: 0,
            value: "Digitální infrastruktura a služby"
        },
        answers: [
            {text: "Poskytování platformy sociální sítě",value: 1}, // bez add question nic, s add <250 nizsi, >250 vyssi
            {text: "Poskytování řízené bepečnostní služby", value: 1}, //bez add question nic, s add <250 nizsi, >250 vyssi
            {text: "Poskytování řízené služby", value: 0}, // bez add question nic, s add <250 nizsi, >250 vyssi
            {text: "Poskytování služby cloud computingu", value: 1}, // bez <250 nizsi >250 vyssi, s add vsechno vyssi
            {text: "Poskytování služby datového centra",value: 0}, //bez add question nic, s add <250 nizsi, >250 vyssi
            {text: "Poskytování služby internetového vysledávače", value: 0}, //bez add question nic, s add <250 nizsi a taky >250 nizsi !!!!
            {text: "Poskytování služby on-line tržiště", value: 0}, //bez add question nic, s add <250 nizsi a taky >250 nizsi !!!!
            {text: "Poskytování služby sítě pro doručování obsahu",value: 0}, //bez add question nic, s add <250 nizsi, >250 vyssi
            {text: "Poskytování služby systému překladu doménových jmen", value: 0}, //bez special nic, toto ma pouze special question, kde v obou pripdaech (jsou to ano questions) je vyssi
            {text: "Poskytování služby výměnného uzlu", value: 0}, // opet special question bez ni nic, s ni vyssi
            {text: "Poskytování služby vytváření důvěry",value: 0},// toto ma 2 special questions, bez nic, pokud plati prvni tak nic, pokud plati 2 tak u vsech po <250 nizsi pro > 250 vyssi, pokud plati obe tak vsechny pripady vyssi
            {text: "Poskytování veřejně dostupné služby elektronických komunikací",value: 1},// ma opet 2 special questions, bez nich pro <50 jsou nizsi, potom od 250 vyssi, pokud plati 1 question tak u vsecho vyssi, to stejne u druhe a logicky obe vyssi
            {text: "Provozování Národního CERT",value: 0},// pouze special otazka, pokud ne nic, pokud ano vyssi 
            {text: "Správa a provoz registru domény nejvyšší úrovně",value: 0}, // pouze special otazka, pokud ne nic, pokud ano vyssi 
            {text: "Správa kvalifikovaného systému elektronické identifikace",value: 0}, // pouze special otazka, pokud ne nic, pokud ano vyssi 
            {text: "Zajišťování veřejné komunikační",value: 1} // ma 2 special otazky, bez nich <50 nizsi ostatni vyssi, pokud plati 1 otazka vse vyssi, stejne u druhe

        ],
        evaluate: (answer, question) => {
            const selectedAnswer = question.answers.find(a => a.text === answer);
            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
        }
    },

    //oddeleni druhych otazek
    {
        question: "Kolik má vaše společnost zaměstnanců",
        type: "buttons",
        answers: [
            {text: "Méně jak 10 zaměstnanců"},
            {text: "Méně jak 50 zaměstnanců"},
            {text: "Méně jak 250 zaměstnanců",value: 0},
            {text: "Více jak 250 zaměstnanců",value: 1}     
        ],
        evaluate: (answer, question) => {
            const selectedAnswer = question.answers.find(a => a.text === answer);
            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
        }
    },
    {
        question: "Jaký je váš roční obrat nebo suma bilanční rozvahy",
        type: "buttons",
        answers: [
            {text: "Obrat menší jak 2 miliony EUR"},
            {text: "Obrat menší jak 10 milionů EUR"},
            {text: "Obrat menší jak 50 milionů EUR nebo rozvaha menší jak 43 milionů EUR",value: 0},
            {text: "Obrat větší jak 50 milionů EUR nebo rozvaha větší jak 43 milionů EUR",value: 1}       
        ],
        evaluate: (answer, question) => {
            const selectedAnswer = question.answers.find(a => a.text === answer);
            return selectedAnswer ? { points: selectedAnswer.value } : { points: 0 };
        }
    }

    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");

let currentQuestionIndex = 0;
let selectedAnswers = Array(questions.length).fill(null);
let history = []; 

function startQuiz(){
    currentQuestionIndex = 0;
    history = [0];
    nextButton.innerHTML = "Dalsi";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.dependsOn) {
        const { questionIndex, value } = currentQuestion.dependsOn;
        const selected = selectedAnswers[questionIndex];

        if (selected !== value) {
            handleNextButton(); 
            return;
        }
    }

    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    if (currentQuestion.type === "buttons") {
      answerButtons.style.display = "block";
      const selectBox = document.querySelector('.select-box');
      if (selectBox) {
        selectBox.style.display = "none";
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
      selectBox.innerHTML = `<option disabled selected>Vyberte možnost</option>`;

      currentQuestion.answers.forEach(answer => {
        const option = document.createElement("option");
        option.value = answer.text;
        option.innerHTML = answer.text;
        selectBox.appendChild(option);
      });

      answerButtons.appendChild(selectBox);
      const selectContainer = document.querySelector('.select-box');
      if (selectContainer) {
        selectContainer.style.display = "block"; 

        selectBox.addEventListener("change", function() {
            selectedAnswers[currentQuestionIndex] = this.value;
        });
      }
    }
    prevButton.disabled = history.length <= 1; 
    nextButton.innerHTML = currentQuestionIndex === questions.length - 1 ? "Dokončit" : "Dalsi";
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
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.type === "buttons") {
        const activeButton = answerButtons.querySelector(".btn.active");
        if (activeButton) {
            selectedAnswers[currentQuestionIndex] = activeButton.innerHTML;
        }
    } else if (currentQuestion.type === "select") {
        const selectElement = answerButtons.querySelector(".custom-select");
        if (selectElement && selectElement.value) {
            selectedAnswers[currentQuestionIndex] = selectElement.value;
        }
    }

    let nextIndex = currentQuestionIndex + 1;
    while (nextIndex < questions.length && questions[nextIndex].dependsOn) {
        const { questionIndex, value } = questions[nextIndex].dependsOn;
        const selected = selectedAnswers[questionIndex];
        if (selected !== value) {
            nextIndex++;
        } else {
            break;
        }
    }

    if (nextIndex < questions.length) {
        currentQuestionIndex = nextIndex;
        history.push(currentQuestionIndex); 
        showQuestion();
    } else {
        startQuiz(); 
    }
}

function handlePrevButton(){
    if (history.length > 1) {
        history.pop(); 
        currentQuestionIndex = history[history.length - 1]; 
        showQuestion();
    }
}

nextButton.addEventListener("click", handleNextButton);
prevButton.addEventListener("click", handlePrevButton);

function evaluateQuiz(questions, answers) {
    let totalScore = 0;
    const results = {};

    questions.forEach((question, index) => {
        const userAnswer = answers[index];
        if (question.evaluate && userAnswer !== null) {
            const evaluationResult = question.evaluate(userAnswer, question); // Předáváme i samotnou otázku
            results[`question${index + 1}`] = evaluationResult || {};
            totalScore += evaluationResult?.points || 0;
        } else {
            results[`question${index + 1}`] = { points: 0 };
        }
    });

    return { totalScore, results };
}

startQuiz();