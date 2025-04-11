const questions = [
    {
        question: "V jakém odvětví působíte",
        type: "select",
        answers: [
            { text: "Digitální infrastruktura a služby"},
            { text: "Drážní doprava"},
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
        ]
    },

    //na zaklade prvni otazky -> otazka na sluzbu
    {
        question: "Jakou službu posktujete ?",
        type: "select",
        dependsOn:{
            questionIndex: 0,
            value: "Digitální infrastruktura a služby"
        },
        answers: [
            {text: "Poskytování platformy sociální sítě"},
            {text: "Poskytování řízené bepečnostní služby"},
            {text: "Poskytování služby cloud computingu"},
            {text: "Poskytování služby datového centra"},
            {text: "Poskytování služby internetového vysledávače"},
            {text: "Poskytování služby on-line tržiště"},
            {text: "Poskytování služby sítě pro doručování obsahu"},
            {text: "Poskytování služby systému překladu doménových jmen"},
            {text: "Poskytování služby výměnného uzlu"},
            {text: "Poskytování služby vytváření důvěry"},
            {text: "Poskytování veřejně dostupné službz elektronických komunikací"},
            {text: "Provozování Národního CERT"},
            {text: "Správa a provoz registru domény nejvyšší úrovně"},
            {text: "Správa kvalifikovaného systému elektronické identifikace"},
            {text: "Zajišťování veřejné komunikační"}

        ]
    },


    {
        question: "Kolik má vaše společnost zaměstnanců",
        type: "buttons",
        answers: [
            {text: "Méně jak 10 zaměstnanců"},
            {text: "Méně jak 50 zaměstnanců"},
            {text: "Méně jak 250 zaměstnanců"},
            {text: "Více jak 250 zaměstnanců"}     
        ]
    },
    {
        question: "Jaký je váš roční obrat nebo suma bilanční rozvahy",
        type: "buttons",
        answers: [
            {text: "Obrat menší jak 2 miliony EUR"},
            {text: "Obrat menší jak 10 milionů EUR"},
            {text: "Obrat menší jak 50 milionů EUR nebo rozvaha menší jak 43 milionů EUR"},
            {text: "Obrat větší jak 50 milionů EUR nebo rozvaha větší jak 43 milionů EUR"}       
        ]
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

    // Kontrola závislosti otázky
    if (currentQuestion.dependsOn) {
        const { questionIndex, value } = currentQuestion.dependsOn;
        const selected = selectedAnswers[questionIndex];

        if (selected !== value) {
            handleNextButton(); // Přeskočí otázku
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
        selectContainer.style.display = "block"; // Ukáže select box a šipku

        selectBox.addEventListener("change", function() {
            selectedAnswers[currentQuestionIndex] = this.value;
        });
      }
    }
    prevButton.disabled = history.length <= 1; // Zakázat "Předchozí" na první otázce
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
        history.push(currentQuestionIndex); // Přidáme zobrazenou otázku do historie
        showQuestion();
    } else {
        startQuiz(); // Nebo zobrazíme výsledky, pokud jsme na konci
    }
}

function handlePrevButton(){
    if (history.length > 1) {
        history.pop(); // Odstraníme aktuální otázku z historie
        currentQuestionIndex = history[history.length - 1]; // Nastavíme předchozí otázku
        showQuestion();
    }
}

nextButton.addEventListener("click", handleNextButton);
prevButton.addEventListener("click", handlePrevButton);

startQuiz();