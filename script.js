
let remainingCountries = [];

const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");

const quizTitle = document.getElementById("quiz-title");
const questionImage = document.getElementById("question-image");
const questionText =
    document.getElementById("question-text");
const answerButtons =
    document.querySelectorAll(".answer-btn");
    
let correctAnswer = "";
let correctCount = 0;
let wrongCount = 0;

let questionNumber = 0;
let answeredQuestions = 0;

const questionNumberElement =
    document.getElementById("question-number");

let currentQuestion = null;

let questionAnswered = false;

const correctCountElement =
    document.getElementById("correct-count");

const wrongCountElement =
    document.getElementById("wrong-count");

const flagQuizBtn = document.getElementById("flag-quiz");
const capitalQuizBtn = document.getElementById("capital-quiz");
const continentQuizBtn = document.getElementById("continent-quiz");

const quitBtn = document.getElementById("quit-btn");

const resultsScreen =
    document.getElementById("results-screen");

const resultsTotal =
    document.getElementById("results-total");

const resultsCorrect =
    document.getElementById("results-correct");

const resultsWrong =
    document.getElementById("results-wrong");

const resultsAccuracy =
    document.getElementById("results-accuracy");

const playAgainBtn =
    document.getElementById("play-again-btn");

const homeBtn =
    document.getElementById("home-btn");


function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];

    }

}


function getRandomOptions(correctCountry) {

    let options = [correctCountry];

    const wrongCountries =
        countries.filter(
            country =>
                country.country !== correctCountry
        );

    shuffleArray(wrongCountries);

    options.push(
        wrongCountries[0].country
    );

    options.push(
        wrongCountries[1].country
    );

    options.push(
        wrongCountries[2].country
    );

    shuffleArray(options);

    return options;

}


function getRandomCapitalOptions(correctCapital) {

    let options = [correctCapital];

    const wrongCapitals =
        countries.filter(
            country =>
                country.capital !== correctCapital
        );

    shuffleArray(wrongCapitals);

    options.push(
        wrongCapitals[0].capital
    );

    options.push(
        wrongCapitals[1].capital
    );

    options.push(
        wrongCapitals[2].capital
    );

    shuffleArray(options);

    return options;

}


function getRandomContinentOptions(correctContinent) {

    let options = [correctContinent];

    const allContinents = [
        "Africa",
        "Asia",
        "Europe",
        "North America",
        "South America",
        "Oceania"
    ];

    const wrongContinents =
        allContinents.filter(
            continent =>
                continent !== correctContinent
        );

    shuffleArray(wrongContinents);

    options.push(wrongContinents[0]);
    options.push(wrongContinents[1]);
    options.push(wrongContinents[2]);

    shuffleArray(options);

    return options;

}


function loadFlagQuestion() {

    if (remainingCountries.length === 0) {

    showResults();

    return;
    }
    
    questionAnswered = false;

    questionNumber++;

    questionNumberElement.textContent =
    `Question ${questionNumber} / ${countries.length}`;

    const randomIndex = Math.floor(
    Math.random() * remainingCountries.length
    );

    currentQuestion =
    remainingCountries[randomIndex];

    remainingCountries.splice(
    randomIndex,
    1
    );

    correctAnswer =
        currentQuestion.country;

        questionText.textContent =
        "Which country does this flag belong to?";

    questionImage.style.display =
    "block";

    questionImage.src =
    `https://flagcdn.com/w320/${currentQuestion.code}.png`;

    const options =
    getRandomOptions(correctAnswer);

    answerButtons.forEach(
      (button, index) => {

        button.textContent =
            options[index];

      }
    );

    answerButtons.forEach(button => {

        button.disabled = false;

        button.style.backgroundColor = "";
        button.style.color = "";

    });

}

function loadCapitalQuestion() {

    questionAnswered = false;

    questionNumber++;

    questionNumberElement.textContent =
    `Question ${questionNumber} / ${countries.length}`;

    const randomIndex = Math.floor(
    Math.random() * remainingCountries.length
    );

    currentQuestion =
    remainingCountries[randomIndex];

    remainingCountries.splice(
    randomIndex,
    1
    );
        console.log(currentQuestion.country);

    correctAnswer =
        currentQuestion.capital;

    questionImage.style.display =
        "none";

    questionText.textContent =
        `What is the capital of ${currentQuestion.country}?`;

        const options =
    getRandomCapitalOptions(
        correctAnswer
    );

    answerButtons.forEach(
        (button, index) => {

        button.textContent =
            options[index];

       }
    );

answerButtons.forEach(button => {

    button.disabled = false;

    button.style.backgroundColor = "";

});

}


function loadContinentQuestion() {

    if (remainingCountries.length === 0) {

        showResults();

        return;
    }

    questionAnswered = false;

    questionNumber++;

    questionNumberElement.textContent =
    `Question ${questionNumber} / ${countries.length}`;

    const randomIndex = Math.floor(
        Math.random() * remainingCountries.length
    );

    currentQuestion =
        remainingCountries[randomIndex];

    remainingCountries.splice(
        randomIndex,
        1
    );

    correctAnswer =
        currentQuestion.continent;

    questionImage.style.display =
        "none";

    questionText.textContent =
        `Which continent is ${currentQuestion.country} in?`;

    const options =
        getRandomContinentOptions(
            correctAnswer
        );

    answerButtons.forEach(
        (button, index) => {

            button.textContent =
                options[index];

        }
    );

    answerButtons.forEach(button => {

        button.disabled = false;

        button.style.backgroundColor = "";

        button.style.color = "";

    });

}


function resetQuiz() {

    questionNumber = 0;

    answeredQuestions = 0;

    correctCount = 0;

    wrongCount = 0;

    correctCountElement.textContent = 0;

    wrongCountElement.textContent = 0;

    remainingCountries = [...countries];

}


function showResults() {

    console.log("questionNumber =", questionNumber);
    console.log("answeredQuestions =", answeredQuestions);
    console.log("correctCount =", correctCount);
    console.log("wrongCount =", wrongCount);

    quizScreen.style.display = "none";

    resultsScreen.style.display = "block";

    resultsTotal.textContent =
    answeredQuestions;

    resultsCorrect.textContent =
        correctCount;

    resultsWrong.textContent =
        wrongCount;

    let accuracy = 0;

    if (questionNumber > 0) {

        accuracy =
            (
                correctCount /
                answeredQuestions
            ) * 100;

    }

    resultsAccuracy.textContent =
        accuracy.toFixed(2) + "%";

}



flagQuizBtn.addEventListener("click", () => {

    homeScreen.style.display = "none";
    quizScreen.style.display = "block";

    quizTitle.textContent = "🏳️ Flag Quiz";
    remainingCountries = [...countries];

   currentQuizType = "flag"; 
   loadFlagQuestion();

});

capitalQuizBtn.addEventListener("click", () => {

    homeScreen.style.display = "none";
    quizScreen.style.display = "block";

    quizTitle.textContent =
        "🏛️ Capital Quiz";

    currentQuizType = "capital";    
    remainingCountries = [...countries];
    loadCapitalQuestion();

});

continentQuizBtn.addEventListener("click", () => {

    homeScreen.style.display = "none";
    quizScreen.style.display = "block";

    quizTitle.textContent =
        "🌎 Continent Quiz";

    currentQuizType = "continent";

    remainingCountries = [...countries];

    loadContinentQuestion();

});

quitBtn.addEventListener("click", () => {

    if (
        correctCount === 0 &&
        wrongCount === 0
    ) {

        resetQuiz();

        quizScreen.style.display = "none";

        homeScreen.style.display = "block";

        return;
    }

    showResults();

});

answerButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (questionAnswered) {
            return;
        }

        questionAnswered = true;

        answerButtons.forEach(btn => {
            btn.disabled = true;
        });

        answeredQuestions++;

        if (button.textContent === correctAnswer) {

            button.style.backgroundColor =
                  "#28a745";

            button.style.color =
                "black";

            correctCount++;

            correctCountElement.textContent =
                correctCount;

        } else {

            button.style.backgroundColor =
                "#dc3545";

            button.style.color =
                "black";

            wrongCount++;

            wrongCountElement.textContent =
                wrongCount;

            answerButtons.forEach(btn => {

                if (
                    btn.textContent === correctAnswer
                ) {
                    btn.style.backgroundColor =
                        "lightgreen";
                }

            });

        }

        setTimeout(() => {

       if (currentQuizType === "flag") {

          loadFlagQuestion();

        } else if (
          currentQuizType === "capital"
        ) {

          loadCapitalQuestion();

        } else if (
           currentQuizType === "continent"
        ) {

           loadContinentQuestion();

        }

        }, 1000);

    });

});

playAgainBtn.addEventListener("click", () => {

    resetQuiz();

    remainingCountries = [...countries];

    resultsScreen.style.display = "none";

    quizScreen.style.display = "block";

    if (currentQuizType === "flag") {

        loadFlagQuestion();

    } else if (
       currentQuizType === "capital"
    ) {

       loadCapitalQuestion();

    } else if (
       currentQuizType === "continent"
    ) {

      loadContinentQuestion();

    }

});

homeBtn.addEventListener("click", () => {

    resetQuiz();

    resultsScreen.style.display = "none";

    homeScreen.style.display = "block";

});