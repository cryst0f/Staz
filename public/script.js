import { questions, evalRules } from './questions.js';

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");

let currentQuestionIndex = 0;
let selectedAnswers = {};
let history = [0];
let newQuestionAdded = false; // Nová proměnná

const vysledekKontejner = document.getElementById("vysledek-kvizu");
const samotnyKviz = document.querySelector(".calc");
const vysledekText = document.getElementById("vysledek-regulace");
const restartButton = document.getElementById("restart-kviz");

function zobrazVysledek(vysledek) {
    if (vysledekKontejner && samotnyKviz && vysledekText) {
        vysledekText.textContent = `Na základě vašich odpovědí se na vás vztahuje: ${vysledek}.`;
        vysledekKontejner.style.display = "block";
        samotnyKviz.style.display = "none";
    } else {
        console.error("Nepodařilo se najít HTML elementy pro zobrazení výsledku.");
    }
}


function dokonciKviz() {
    console.log("selectedAnswers při dokončení:", selectedAnswers);
    const vysledek = evaluateQuiz(questions, selectedAnswers, evalRules);
    zobrazVysledek(vysledek);
}

function startQuiz() {
    currentQuestionIndex = 0;
    history = [0];
    selectedAnswers = {};
    nextButton.innerHTML = "Dalsi";
    if (vysledekKontejner && samotnyKviz) {
        vysledekKontejner.style.display = "none";
        samotnyKviz.style.display = "block";
    }

    // Najdeme první otázku, která by se měla zobrazit (bere v úvahu i případné dependsOn na začátku)
    while (currentQuestionIndex < questions.length && questions[currentQuestionIndex].dependsOn) {
        const { id, value } = questions[currentQuestionIndex].dependsOn;
        if (!selectedAnswers[id] || selectedAnswers[id] !== value) {
            currentQuestionIndex++;
        } else {
            break;
        }
    }

    showQuestion();
}

function showQuestion() {
    resetState();
    console.log("--- SHOW QUESTION START ---");
    console.log("Volá se showQuestion s indexem:", currentQuestionIndex);

    // Najdeme aktuální otázku, bereme v úvahu dependsOn
    let displayedQuestionIndex = 0;
    let actualQuestionIndex = -1;
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const shouldDisplay = !q.dependsOn || (selectedAnswers[q.dependsOn.id] === q.dependsOn.value);
        if (shouldDisplay) {
            if (displayedQuestionIndex === history.length - 1) {
                actualQuestionIndex = i;
                break;
            }
            displayedQuestionIndex++;
        }
    }

    if (actualQuestionIndex === -1 || actualQuestionIndex >= questions.length) {
        dokonciKviz();
        return;
    }

    const currentQuestion = questions[actualQuestionIndex];
    currentQuestionIndex = actualQuestionIndex; // Ujistíme se, že currentQuestionIndex je správný
    questionElement.innerHTML = (displayedQuestionIndex + 1) + ". " + currentQuestion.question;

    // Log for displaying question details
    console.log("Showing question", currentQuestion.id);

    if (currentQuestion.type === "buttons") {
        answerButtons.style.display = "block";
        const selectBox = document.querySelector('.select-box');
        if (selectBox) selectBox.style.display = "none";

        currentQuestion.answers.forEach(answer => {
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
            selectBox.addEventListener("change", function () {
                selectedAnswers[currentQuestion.id] = this.value;
            });
        }
    }

    prevButton.disabled = history.length <= 1;
    nextButton.innerHTML = (displayedQuestionIndex + 1) === countDisplayedQuestions() ? "Dokončit" : "Dalsi";

    console.log("--- SHOW QUESTION END (zobrazení otázky) ---");
}


function countDisplayedQuestions() {
    let count = 0;
    for (const q of questions) {
        if (!q.dependsOn || (selectedAnswers[q.dependsOn.id] === q.dependsOn.value)) {
            count++;
        }
    }
    return count;
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Funkce pro shromáždění všech otázek
function collectAllQuestions(questionsList) {
    const result = [];

    function recurse(question) {
        if (!question || result.find(q => q.id === question.id)) return;
        result.push(question);

        // Pokud má otázka odpovědi, zkontrolujeme i další vnořené otázky
        if (question.answers) {
            question.answers.forEach(ans => {
                if (ans.nextQuestion) {
                    recurse(ans.nextQuestion); // Rekurzivně pro další otázky
                }
            });
        }
    }

    // Projdi všechny hlavní otázky a zavolej rekurzivní funkci
    questionsList.forEach(q => {
        recurse(q);
    });

    return result;
}

// Shromáždit všechny otázky
const allQuestions = collectAllQuestions(questions);


function tryToInjectDependentQuestions() {
    allQuestions.forEach((q) => {
        // Zkontrolujeme, zda otázka již existuje a zda má závislost
        const alreadyIn = questions.some(existing => existing.id === q.id);
        if (alreadyIn || !q.dependsOn) return;

        const dependsOnKey = q.dependsOn.id;  // Např. "industry" nebo "rail-service"
        const dependsOnValue = q.dependsOn.value;  // Např. "Drážní doprava"
        const selectedValue = selectedAnswers[dependsOnKey];

        console.log(`Kontrola závislosti pro otázku ${q.id}:`);
        console.log(`  dependsOnKey = ${dependsOnKey}, dependsOnValue = ${dependsOnValue}`);
        console.log(`  selectedValue = ${selectedValue}`);

        // Pokud je podmínka splněna, přidáme otázku
        if (selectedValue === dependsOnValue) {
            const exists = questions.some(existing => existing.id === q.id);
            if (!exists) {
                questions.splice(currentQuestionIndex + 1, 0, q); // Přidání otázky
                console.log("Automaticky vložena otázka (dependsOn):", q.id);
            }
        }
    });
}





function handleNextButton() {
    console.log("--- HANDLE NEXT BUTTON START ---");
    console.log("currentQuestionIndex:", currentQuestionIndex);
    const currentQuestion = questions[currentQuestionIndex];
    console.log("currentQuestion:", currentQuestion);

    let selectedAnswerText = null;

    // Získáme odpověď podle typu otázky
    if (currentQuestion.type === "buttons") {
        const activeButton = answerButtons.querySelector(".btn.active");
        if (activeButton) {
            selectedAnswerText = activeButton.innerHTML;
        }
    } else if (currentQuestion.type === "select") {
        const selectElement = answerButtons.querySelector(".custom-select");
        if (selectElement && selectElement.value) {
            selectedAnswerText = selectElement.value;
        }
    }

    // Pokud je odpověď vybrána, uložíme ji do selectedAnswers
    if (selectedAnswerText) {
        selectedAnswers[currentQuestion.id] = selectedAnswerText;

        // Zjišťujeme, zda je k odpovědi připojena další otázka
        const selectedAnswerObject = currentQuestion.answers.find(a => a.text === selectedAnswerText);
        const nextQ = selectedAnswerObject?.nextQuestion;

        if (nextQ) {
            const exists = questions.some(q => q.id === nextQ.id);
            if (!exists) {
                questions.splice(currentQuestionIndex + 1, 0, nextQ); // Přidání nové otázky
                console.log("nextQuestion vložen:", nextQ.id);
            }
        }

        tryToInjectDependentQuestions(); // Přidání závislých otázek

        // Uložení do historie a přechod na další otázku
        history.push(currentQuestionIndex);
        currentQuestionIndex++;
        showQuestion();
    }
}



function handlePrevButton() {
    if (history.length > 1) {
        history.pop();
        currentQuestionIndex = history[history.length - 1];
        showQuestion();
    }
}

nextButton.addEventListener("click", handleNextButton);
prevButton.addEventListener("click", handlePrevButton);

function evaluateQuiz(questions, answers, evalRules) {
    // Získání odpovědí na otázky o sektoru a službě
    const sector = answers["industry"];
// Dynamicky najdi otázku, která závisí na industry
const serviceQuestion = questions.find(q => q.dependsOn?.id === 'industry' && q.dependsOn.value === sector);
const service = serviceQuestion ? answers[serviceQuestion.id] : null;


    // Získání odpovědí na otázky o zaměstnancích a obratu
    const employeeText = answers["employee"];
    const revenueText = answers["revenue"];

    const employeeQuestion = questions.find(q => q.id === "employee");
    const revenueQuestion = questions.find(q => q.id === "revenue");

    // Získání hodnoty pro zaměstnance a obrat z odpovědí
    const employeeValue = employeeQuestion?.answers.find(a => a.text === employeeText)?.value;
    const revenueValue = revenueQuestion?.answers.find(a => a.text === revenueText)?.value;

    console.log("DEBUG EVALUATE:");
    console.log("sector:", sector);
    console.log("service:", service);
    console.log("employeeValue:", employeeValue);
    console.log("revenueValue:", revenueValue);

    let result = "Nelze určit regulaci";

    // Pokud existují pravidla pro daný sektor a službu
    if (evalRules[sector] && evalRules[sector][service]) {
        let ruleBranch = evalRules[sector][service];

        // Vyfiltrujeme jen otázky, které nejsou základní
        const knownIds = ["industry", "employee", "revenue", serviceQuestion?.id, "nationalRailwayAdd"];
        const detailQuestions = questions
            .filter(q => !knownIds.includes(q.id) && answers[q.id] !== undefined)
            .sort((a, b) => a.order - b.order); // volitelně: podle pořadí, pokud máš nějaké `order` pole

        // Procházíme odpovědi v pořadí a sestupujeme ve stromu pravidel
        for (const dq of detailQuestions) {
            const answer = answers[dq.id];
            console.log("DEBUG EVALUATE DETAIL:", dq.id, answer);
            if (ruleBranch && typeof ruleBranch === 'object' && ruleBranch[answer] !== undefined) {
                ruleBranch = ruleBranch[answer];
            }
        }

        // Vyhodnocení podle počtu zaměstnanců a obratu
        if (ruleBranch?.employees || ruleBranch?.turnover) {
            result = ruleBranch.employees?.[employeeValue] ||
                     ruleBranch.turnover?.[revenueValue] ||
                     result;
        } else if (typeof ruleBranch === 'string') {
            result = ruleBranch;
        }
    }

    return result;
}






function selectAnswer(event) {
    const selectedBtn = event.target;
    const currentQuestion = questions[currentQuestionIndex];
    selectedAnswers[currentQuestion.id] = selectedBtn.innerHTML;
}

if (restartButton) {
    restartButton.addEventListener("click", startQuiz);
}

startQuiz();