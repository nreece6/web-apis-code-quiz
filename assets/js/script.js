const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who sang the title song for the latest Bond film, No Time to Die?',
    answers: [
      { text: 'Adele', correct: false },
      { text: 'Sam Smith', correct: false },
      { text: 'Billie Eilish', correct: true},
      { text: 'Cher', correct: false}
    ]
  },
  {
    question: 'Which flies a green, white, and orange (in that order) tricolor flag? ',
    answers: [
      { text: 'Ireland', correct: false },
      { text: 'Ivory Coast', correct: false },
      { text: 'Iraly', correct: true },
      { text: 'Seychelles', correct: false }
    ]
  },
  {
    question: 'What company makes the Xperia model of smartphone?',
    answers: [
      { text: 'Samsung', correct: false },
      { text: 'Sony', correct: true },
      { text: 'Nokia', correct: false },
      { text: 'Apple', correct: false }
    ]
  },
  {
    question: 'Which city is home to the Brandenburg Gate?',
    answers: [
      { text: 'Vienna', correct: false },
      { text: 'Zurich', correct: false },
      { text: 'Berlin', correct: true},
      { text: 'Sofia', correct: false},
    ]
  },
  {
    question: 'Which of the following is NOT a fruit?',
    answers: [
      { text: 'Rhubarb', correct: true },
      { text: 'Tomato', correct: false },
      { text: 'Advocado', correct: false},
      { text: 'Bell Pepper', correct: false},
    ]
  },
  {
    question: 'Where was the first example of paper money used?',
    answers: [
      { text: 'China', correct: true },
      { text: 'Turkey', correct: false },
      { text: 'Greece', correct: false},
      { text: 'England', correct: false},
    ]
  },
  {
    question: 'Who is generally considered the inventor of the motor car?',
    answers: [
      { text: 'Henry Ford', correct: false },
      { text: 'Karl Benz', correct: true },
      { text: 'Henry M. Leland', correct: false},
      { text: 'Thomas Edison', correct: false},
    ]
  },
  {
    question: 'If you were looking at Iguazu Falls, on what continent would you be?',
    answers: [
      { text: 'Asia', correct: false },
      { text: 'Sout America', correct: true},
      { text: 'Africa', correct: false},
      { text: 'Europe', correct: false},
    ]
  },
  {
    question: 'What number was the Apollo mission that successfully put a man on the moon for the first time in human history?',
    answers: [
      { text: 'Apollo 11', correct: true },
      { text: 'Apollo 12', correct: false },
      { text: 'Apollo 13', correct: false},
      { text: 'Oceans 11', correct: false},
    ]
  },
  {
    question: 'Which of the following languages has the longest alphabet?',
    answers: [
      { text: 'Greek', correct: false },
      { text: 'Russian', correct: true },
      { text: 'Arabic', correct: false},
      { text: 'Latin', correct: false},
    ]
  },
  {
    question: 'Who was the lead singer of the band The Who?',
    answers: [
      { text: 'Roger Daltrey', correct: true },
      { text: 'Don Henley', correct: false },
      { text: 'Robert Plant', correct: false},
      { text: 'Ozzie Osborne', correct: false},
    ]
  },
  {
    question: 'What spirit is used in making a Tom Collins?',
    answers: [
      { text: 'Whiskey', correct: false },
      { text: 'Vodka', correct: false },
      { text: 'Rumn', correct: false},
      { text: 'Gin', correct: true},
    ]
  },
  {
    question: 'The fear of insects is known as what?',
    answers: [
      { text: 'Cynophobia', correct: false },
      { text: 'Ailurophobia', correct: false },
      { text: 'Arachnophobia', correct: false},
      { text: 'Entomophobia', correct: true},
    ]
  },
  {
    question: 'What was the name of the Franco-British supersonic commercial plane that operated from 1976-2003?',
    answers: [
      { text: 'Accord', correct: false },
      { text: 'Concorde', correct: true },
      { text: 'Mirage', correct: false},
      { text: 'U2', correct: false},
    ]
  },
  {
    question: 'Which horoscope sign is a fish?',
    answers: [
      { text: 'Aquarius', correct: false },
      { text: 'Cancer', correct: false },
      { text: 'Leo', correct: false},
      { text: 'Pisces', correct: true},
    ]
  },
  {
    question: 'What is the largest US state (by landmass)?',
    answers: [
      { text: 'Texas', correct: false },
      { text: 'Alaska', correct: true },
      { text: 'California', correct: false},
      { text: 'Montana', correct: false},
    ]
  },
  {
    question: 'Which Game of Thrones character is known as the Young Wolf?',
    answers: [
      { text: 'Robert Baratheon', correct: false },
      { text: 'Arya Stark', correct: false },
      { text: 'Sansa Stark', correct: false},
      { text: 'Robb Stark', correct: true},
    ]
  },
  {
    question: 'What city hosted the 2002 Olympic Games?',
    answers: [
      { text: 'Tokyo', correct: false },
      { text: 'Salt Lake City', correct: false },
      { text: 'Beijing', correct: false},
      { text: 'Sydney', correct: true},
    ]
  },
  {
    question: 'How many plays do people (generally) believe that Shakespeare wrote?',
    answers: [
      { text: '37', correct: true },
      { text: '27', correct: false },
      { text: '47', correct: false},
      { text: '36', correct: false},
    ]
  },
]