document.addEventListener("DOMContentLoaded", () => {
    console.log("JS is loaded!");
  
    const questions = [
      {
        text: "Otázka 1",
        options: ["Odpověď 1", "Odpověď 2", "Odpověď 3"]
      },
      {
        text: "Otázka 2",
        options: ["Odpověď A", "Odpověď B", "Odpověď C"]
      },
      {
        text: "Otázka 3",
        options: ["Ano", "Ne", "Nevím"]
      }
    ];
  
    let currentQuestion = 0;
  
    const questionText = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers-container");
    const nextBtn = document.getElementById("next-btn");
    const questionBox = document.getElementById("question-box");
    const resultBox = document.getElementById("result");
  
    function loadQuestion(index) {
      const q = questions[index];
      questionText.textContent = q.text;
      answersContainer.innerHTML = "";
  
      q.options.forEach((option) => {
        const label = document.createElement("label");
        label.className = "flex items-center space-x-2";
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = `question-${index}`;
        checkbox.value = option;
        checkbox.className = "form-checkbox";
  
        const span = document.createElement("span");
        span.textContent = option;
  
        label.appendChild(checkbox);
        label.appendChild(span);
        answersContainer.appendChild(label);
      });
    }
  
    nextBtn.addEventListener("click", () => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion(currentQuestion);
      } else {
        questionBox.classList.add("hidden");
        resultBox.classList.remove("hidden");
        nextBtn.classList.add("hidden");
      }
    });
  
    loadQuestion(currentQuestion);
  });
  