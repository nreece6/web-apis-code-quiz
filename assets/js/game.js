const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'))
const questionCounterText = document.getElementById('question-counter')
const scoreText = document.getElementById('score')

let currentQuestion = ''
let acceptingAnswer = false
let score = 0
let questionCounter = 0
let availableQuestions = []

const questions = [
    {
        question: 'Who sang the title song for the latest Bond film, No Time to Die?',
        choice1: 'Adele',
        choice2: 'Sam Smith', 
        choice3: 'Billie Eilish',
        choice4: 'Cher',
        answer: 3
    },
    {
        question: 'Which flies a green, white, and orange (in that order) tricolor flag? ',
        choice1: 'Ireland', 
        choice2: 'Ivory Coast', 
        choice3: 'Iraly', 
        choice4: 'Seychelles',
        answer: 3
    },
    {
        question: 'What company makes the Xperia model of smartphone?',
        choice1: 'Samsung',
        choice2: 'Sony', 
        choice3: 'Nokia', 
        choice4: 'Apple',
        answer: 2
    },
    {
        question: 'Which city is home to the Brandenburg Gate?',
        choice1: 'Vienna', 
        choice2: 'Zurich',
        choice3: 'Berlin',
        choice4: 'Sofia', 
        answer: 3
    },
    {
        question: 'Which of the following is NOT a fruit?',
        choice1: 'Rhubarb', 
        choice2: 'Tomato', 
        choice3: 'Advocado', 
        choice4: 'Bell Pepper',
        answer: 1
    },
    {
        question: 'Where was the first example of paper money used?',
        choice1: 'China', 
        choice2: 'Turkey',
        choice3: 'Greece', 
        choice4: 'England',
        answer: 1
    },
    {
        question: 'Who is generally considered the inventor of the motor car?',
        choice1: 'Henry Ford',
        choice2: 'Karl Benz', 
        choice3: 'Henry M. Leland', 
        choice4: 'Thomas Edison', 
        answer: 2
    },
    {
        question: 'If you were looking at Iguazu Falls, on what continent would you be?',
        choice1: 'Asia', 
        choice2: 'South America', 
        choice3: 'Africa', 
        choice4: 'Europe',
        answer: 2
    },
    {
        question: 'What number was the Apollo mission that successfully put a man on the moon for the first time in human history?',
        choice1: 'Apollo 11',
        choice2: 'Apollo 12', 
        choice3: 'Apollo 13',
        choice4: 'Oceans 11', 
        answer: 1
    },
    {
        question: 'Which of the following languages has the longest alphabet?',  
        choice1: 'Greek', 
        choice2: 'Russian', 
        choice3: 'Arabic', 
        choice4: 'Latin', 
        answer: 2
    },
    {
        question: 'Who was the lead singer of the band The Who?',   
        choice1: 'Roger Daltrey', 
        choice2: 'Don Henley', 
        choice3: 'Robert Plant',
        choice4: 'Ozzie Osborne', 
        answer: 1
    },
    {
        question: 'What spirit is used in making a Tom Collins?',   
        choice1: 'Whiskey',
        choice2: 'Vodka', 
        choice3: 'Rumn',
        choice4: 'Gin', 
        answer: 4
    },
    {
        question: 'The fear of insects is known as what?',     
        choice1: 'Cynophobia',
        choice2: 'Ailurophobia', 
        choice3: 'Arachnophobia', 
        choice4: 'Entomophobia', 
        answer: 4
    },
    {
        question: 'What was the name of the Franco-British supersonic commercial plane that operated from 1976-2003?',    
        choice1: 'Accord', 
        choice2: 'Concorde', 
        choice3: 'Mirage', 
        choice4: 'U2', 
        answer: 2
    },
    {
        question: 'Which horoscope sign is a fish?',    
        choice1: 'Aquarius', 
        choice2: 'Cancer',
        choice3: 'Leo', 
        choice4: 'Pisces', 
        answer: 4
    },
    {
        question: 'What is the largest US state (by landmass)?',   
        choice1: 'Texas', 
        choice2: 'Alaska', 
        choice3: 'California', 
        choice4: 'Montana', 
        answer: 2
    },
    {
      question: 'Which Game of Thrones character is known as the Young Wolf?',     
        choice1: 'Robert Baratheon',
        choice2: 'Arya Stark', 
        choice3: 'Sansa Stark', 
        choice4: 'Robb Stark', 
        answer: 4
    },
    {
        question: 'What city hosted the 2002 Olympic Games?',    
        choice1: 'Tokyo', 
        choice2: 'Salt Lake City', 
        choice3: 'Beijing',
        choice4: 'Sydney',
        answer: 4
    },
    {
        question: 'How many plays do people (generally) believe that Shakespeare wrote?',    
        choice1: '37', 
        choice2: '27', 
        choice3: '47', 
        choice4: '36', 
        answer: 1
    },
  ]

  // game rules
const correctPoints = 1
const maxQuestions = 19

function startGame() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

function getNewQuestion() {
    if(availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        //goes to end screen if all questions answered before timer runs out
        return window.location.assign('/end.html')
    }
    questionCounter++
    questionCounterText.innerText = questionCounter + '/' + maxQuestions


    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText=currentQuestion.question

    choices.forEach((choice) => {
        const number = choice.dataset['number']
        choice.innerHTML = currentQuestion['choice' + number]
    });

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswer = true
}

choices.forEach((choice) => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswer) return

        acceptingAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = 'incorrect'
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct'
        }

        if(classToApply === 'correct') {
            incrementScore(correctPoints)
        }

       selectedChoice.parentElement.classList.add(classToApply)
       setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
       }, 1000)
      
    })
})

function incrementScore (num) {
    score += num
    scoreText.innerText = score
}

startGame()