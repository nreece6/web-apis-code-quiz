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
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
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

