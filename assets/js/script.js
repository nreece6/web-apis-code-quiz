const startButton = document.getElementById("start-btn")
const questionContainer = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

var shuffledQuestions, currentQuestionIndex 

startButton.addEventListener("click", startGame)


function startGame () {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove("hide")
    nextQuestion()
}

function nextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer () {

}

const questions = [
    {
        question: "",
        answers: [
            {text: "answer1", correct: true},
            {text: "answer2", correct: false},
            {text: "answer3", correct: false},
            {text: "answer4", correct: false},
        ]
    }
]

