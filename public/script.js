

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");

let currentQuestionIndex = 0;
let selectedAnswers = Array(questions.length).fill(null);
let history = []; 

///
const vysledekKontejner = document.getElementById("vysledek-kvizu"); // Získání kontejneru pro výsledek
const samotnyKviz = document.querySelector(".calc"); // Získání kontejneru kvízu
const vysledekText = document.getElementById("vysledek-regulace");
const restartButton = document.getElementById("restart-kviz");

function zobrazVysledek(vysledek) {
    if (vysledekKontejner && samotnyKviz && vysledekText) {
        vysledekText.textContent = `Na základě vašich odpovědí se na vás vztahuje: ${vysledek} regulace.`;
        vysledekKontejner.style.display = "block";
        samotnyKviz.style.display = "none";
    } else {
        console.error("Nepodařilo se najít HTML elementy pro zobrazení výsledku.");
    }
}

function dokonciKviz() {
    const vysledekEvaluace = evaluateQuiz(questions, selectedAnswers);
    const celkoveSkore = vysledekEvaluace.totalScore;
    let kategorieRegulace = "Žádná"; // Výchozí hodnota

    if (celkoveSkore >= 13 && celkoveSkore <= 15) {
        kategorieRegulace = "Nižší";
    } else if (celkoveSkore > 15) {
        kategorieRegulace = "Vyšší";
    }

    zobrazVysledek(kategorieRegulace);
}
///

function startQuiz(){
    currentQuestionIndex = 0;
    history = [0];
    selectedAnswers = Array(questions.length).fill(null); // Resetuj odpovědi
    nextButton.innerHTML = "Dalsi";
    if (vysledekKontejner && samotnyKviz) {
        vysledekKontejner.style.display = "none"; // Skryj výsledek
        samotnyKviz.style.display = "block";    // Zobraz kvíz
    }
    showQuestion();
}


function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
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
                
                const selectedAnswerObject = currentQuestion.answers.find(a => a.text === this.value);
                if (selectedAnswerObject && selectedAnswerObject.nextQuestion) {
                    let insertIndex = currentQuestionIndex + 1;
                    let nextQ = selectedAnswerObject.nextQuestion;
                
                    // 🌀 Rekurzivní vkládání všech navazujících otázek
                    while (nextQ) {
                        questions.splice(insertIndex, 0, nextQ);
                        selectedAnswers.splice(insertIndex, 0, null);
                        history.push(insertIndex);
                        insertIndex++;
                        nextQ = nextQ.nextQuestion;
                    }
                    return;
                }
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
        dokonciKviz();  
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
        console.log("Otázka:", index, "Odpověď:", userAnswer); // Přidaný log
        if (question.evaluate && userAnswer !== null) {
            const evaluationResult = question.evaluate(userAnswer, question);
            results[`question${index + 1}`] = evaluationResult || {};
            totalScore += evaluationResult?.points || 0;
            console.log("Otázka:", index, "Body:", evaluationResult?.points); // Přidaný log
        } else {
            results[`question${index + 1}`] = { points: 0 };
        }
    });

    console.log("Celkové skóre:", totalScore); // Přidaný log
    return { totalScore, results };
}

if (restartButton) {
    restartButton.addEventListener("click", startQuiz); // Restart kvízu
}

// Funkce pro zobrazení otázek
function loadQuestions(answers) {
    const displayedQuestions = [];

    questions.forEach(question => {
        // Pokud otázka závisí na předchozích odpovědích
        if (question.dependsOn) {
            const dependency = question.dependsOn;
            const prevAnswer = answers[dependency.questionIndex];

            // Pokud odpověď splňuje podmínky pro zobrazení otázky
            if (prevAnswer === dependency.value) {
                displayedQuestions.push(question);
            }
        } else {
            // Pokud není žádná podmínka, vždy ji přidej
            displayedQuestions.push(question);
        }
    });

    return displayedQuestions;
}


// Funkce pro renderování otázek do UI
function renderQuestions(questions) {
    const container = document.getElementById('question-container');
    container.innerHTML = ''; // Vyčisti staré otázky

    questions.forEach((question, index) => {
        let questionHTML = `<p>${question.question}</p>`;
        
        if (question.type === "select") {
            questionHTML += `<select id="question-${index}">`;
            question.answers.forEach((answer, i) => {
                questionHTML += `<option value="${answer.value}">${answer.text}</option>`;
            });
            questionHTML += `</select>`;
        } else if (question.type === "buttons") {
            questionHTML += `<div id="question-${index}">`;
            question.answers.forEach((answer) => {
                questionHTML += `<button onclick="handleAnswer('${answer.text}', ${index})">${answer.text}</button>`;
            });
            questionHTML += `</div>`;
        }
        
        container.innerHTML += questionHTML;
    });
}

// Funkce pro zpracování odpovědí
function handleAnswer(answer, questionIndex) {
    const answers = {}; // Uložíme odpovědi
    answers[questionIndex] = answer;

    // Načti další otázky na základě odpovědí
    const nextQuestions = loadQuestions(answers);
    renderQuestions(nextQuestions);
}


startQuiz();