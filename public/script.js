import { questions } from './questions.js';
import { evalRules } from './evalRules.js';



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const resultContainer = document.getElementById("quiz-result");
const quizItself = document.querySelector(".calc");
const resultText = document.getElementById("result-regulation");
const restartButton = document.getElementById("restart-quiz");
const originalQuestions = [...questions]; 

let currentQuestions = [...originalQuestions]; 
let currentQuestionIndex = 0;
let selectedAnswers = {};
let history = [0];

// Funkce pro zobrazeni vysledku
function showResult(result) {
    if (resultContainer && quizItself && resultText) {
        resultText.textContent = `Budete pravděpodobně spadat podle zadaných kriterií mezi regulované služby v režimu: ${result}.`;
        resultContainer.style.display = "block";
        quizItself.style.display = "none";
    }
}

// Funkce pro dokonceni kvizu
function finishQuiz() {
    const result = evaluateQuiz(currentQuestions, selectedAnswers, evalRules);
    showResult(result);
}

// Funkce pro spusteni kvizu
function startQuiz() {
    currentQuestions = [...originalQuestions];
    currentQuestionIndex = 0;
    history = [0];
    selectedAnswers = {};
    nextButton.innerHTML = "Další";
    if (resultContainer && quizItself) {
        resultContainer.style.display = "none";
        quizItself.style.display = "block";
    }


    while (currentQuestionIndex < currentQuestions.length && currentQuestions[currentQuestionIndex].dependsOn) {
        const { id, value } = currentQuestions[currentQuestionIndex].dependsOn;
        if (!selectedAnswers[id] || selectedAnswers[id] !== value) {
            currentQuestionIndex++;
        } else {
            break;
        }
    }

    showQuestion();
}

// Funkce pro ziskani aktualni otazky
function getCurrentQuestion() {
    let displayedQuestionIndex = 0;
    let actualQuestionIndex = -1;
    for (let i = 0; i < currentQuestions.length; i++) {
        const q = currentQuestions[i];
        const shouldDisplay = !q.dependsOn || (selectedAnswers[q.dependsOn.id] === q.dependsOn.value);
        if (shouldDisplay) {
            if (displayedQuestionIndex === history.length - 1) {
                actualQuestionIndex = i;
                break;
            }
            displayedQuestionIndex++;
        }
    }
    return actualQuestionIndex === -1 || actualQuestionIndex >= currentQuestions.length ? null : currentQuestions[actualQuestionIndex];
}

// Funkce pro vykresleni tlacitek pro odpovedi
function renderButtons(answers, currentQuestion) {
    answerButtons.style.display = "block";
    const selectBox = document.querySelector('.select-box');
    if (selectBox) selectBox.style.display = "none";

    answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", (e) => {
            const buttons = answerButtons.querySelectorAll("button");
            buttons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");
            selectedAnswers[currentQuestion.id] = answer.text;
        });
    });
}

// Funkce pro vykresleni select boxu
function renderSelect(answers, currentQuestion) {
    const selectBox = document.createElement("select");
    selectBox.classList.add("custom-select");
    selectBox.innerHTML = `<option disabled selected>Vyberte možnost</option>`;

    answers.forEach(answer => {
        const option = document.createElement("option");
        option.value = answer.text;
        option.innerHTML = answer.text;
        selectBox.appendChild(option);
    });

    answerButtons.appendChild(selectBox);
    const selectContainer = document.querySelector('.select-box');
    if (selectContainer) {
        selectContainer.style.display = "block";
        selectBox.addEventListener("change", function () {
            selectedAnswers[currentQuestion.id] = this.value;
        });
    }
}

// Funkce pro zobrazeni otazky
function showQuestion() {
    resetState();

    const currentQuestion = getCurrentQuestion();

    if (!currentQuestion) {
        finishQuiz();
        return;
    }

    questionElement.innerHTML = (history.length) + ". " + currentQuestion.question;
    currentQuestionIndex = currentQuestions.indexOf(currentQuestion);

    if (currentQuestion.type === "buttons") {
        renderButtons(currentQuestion.answers, currentQuestion);
    } else if (currentQuestion.type === "select") {
        renderSelect(currentQuestion.answers, currentQuestion);
    }

    prevButton.disabled = history.length <= 1;
    nextButton.innerHTML = (history.length) === countDisplayedQuestions() ? "Dokončit" : "Další";
}

// Funkce pro pocet zobrazenych otazek
function countDisplayedQuestions() {
    return currentQuestions.filter(q => !q.dependsOn || (selectedAnswers[q.dependsOn.id] === q.dependsOn.value)).length;
}

// Funkce pro resetovani stavu (odstraneni predchozich odpovedi)
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Funkce pro zpracovani zavislych otazek
function tryToInjectDependentQuestions() {
    collectAllQuestions(originalQuestions).forEach((q) => {
        const alreadyIn = currentQuestions.some(existing => existing.id === q.id);
        if (alreadyIn || !q.dependsOn) return;

        const selectedValue = selectedAnswers[q.dependsOn.id];
        if (selectedValue === q.dependsOn.value) {
            const exists = currentQuestions.some(existing => existing.id === q.id);
            if (!exists) {
                currentQuestions.splice(currentQuestionIndex + 1, 0, q);
            }
        }
    });
}

// Funkce pro tlacitko "Dalsi"
function handleNextButton() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    let selectedAnswerText = null;

    if (currentQuestion.type === "buttons") {
        const activeButton = answerButtons.querySelector(".btn.active");
        if (activeButton) selectedAnswerText = activeButton.innerHTML;
    } else if (currentQuestion.type === "select") {
        const selectElement = answerButtons.querySelector(".custom-select");
        if (selectElement && selectElement.value) selectedAnswerText = selectElement.value;
    }

    if (selectedAnswerText) {
        selectedAnswers[currentQuestion.id] = selectedAnswerText;

        const selectedAnswerObject = currentQuestion.answers.find(a => a.text === selectedAnswerText);
        const nextQ = selectedAnswerObject?.nextQuestion;
        if (nextQ) {
            const exists = currentQuestions.some(q => q.id === nextQ.id);
            if (!exists) currentQuestions.splice(currentQuestionIndex + 1, 0, nextQ);
        }

        tryToInjectDependentQuestions();
        history.push(currentQuestionIndex);
        currentQuestionIndex++;
        showQuestion();
    }
}

// Funkce pro tlacitko "Predchozi"
function handlePrevButton() {
    if (history.length > 1) {
        history.pop();
        currentQuestionIndex = history[history.length - 1];
        showQuestion();
    }
}

// Funkce pro ziskani hodnoty odpovedi
function getAnswerValue(questionId, answers, questions) {
    const question = currentQuestions.find(q => q.id === questionId);
    return question ? question.answers.find(a => a.text === answers[questionId])?.value : undefined;
}

// Funkce pro vyhodnoceni pravidla pro vetev
function evaluateRuleForBranch(ruleBranch, answers, employeeValue, revenueValue) {
    if (ruleBranch?.employees || ruleBranch?.turnover) {
        return ruleBranch.employees?.[employeeValue] || ruleBranch.turnover?.[revenueValue];
    }
    return typeof ruleBranch === 'string' ? ruleBranch : null;
}

// Funkce pro vyhodnoceni kvizu
function evaluateQuiz(currentQuestions, answers, evalRules) {
    const sector = answers["industry"];
    const serviceQuestion = currentQuestions.find(q => q.dependsOn?.id === 'industry' && q.dependsOn.value === sector);
    const service = serviceQuestion ? answers[serviceQuestion.id] : null;

    const employeeValue = getAnswerValue("employee", answers, currentQuestions);
    const revenueValue = getAnswerValue("revenue", answers, currentQuestions);

    let result = "Nelze určit regulaci";

    if (evalRules[sector] && evalRules[sector][service]) {
        let ruleBranch = evalRules[sector][service];
        const knownIds = ["industry", "employee", "revenue", serviceQuestion?.id];

        const detailQuestions = currentQuestions
            .filter(q => !knownIds.includes(q.id) && answers[q.id] !== undefined)
            .sort((a, b) => a.order - b.order);

        for (const dq of detailQuestions) {
            const answer = answers[dq.id];
            if (ruleBranch && typeof ruleBranch === 'object' && ruleBranch[answer] !== undefined) {
                ruleBranch = ruleBranch[answer];
            }
        }

        result = evaluateRuleForBranch(ruleBranch, answers, employeeValue, revenueValue) || result;
    }

    return result;
}

// Funkce pro sber vsech otazek
function collectAllQuestions(questionsList) {
    const result = [];

    function recurse(question) {
        if (!question || result.find(q => q.id === question.id)) return;
        result.push(question);
        if (question.answers) {
            question.answers.forEach(ans => {
                if (ans.nextQuestion) recurse(ans.nextQuestion);
            });
        }
    }

    questionsList.forEach(q => recurse(q));
    return result;
}


nextButton.addEventListener("click", handleNextButton);
prevButton.addEventListener("click", handlePrevButton);
if (restartButton) restartButton.addEventListener("click", startQuiz);

// Spuštění kvízu
startQuiz();
