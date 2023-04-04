const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('save-score-btn');
const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highscores')) || []

console.log(mostRecentScore)

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled =!username.value
})


function saveHighScore(e) {
    e.preventDefault()
    

    const score = {
        score: mostRecentScore,
        name: username.value,
    }
    highScores.push(score)
    highScores.sort( (a,b) => b.score - a.score)

    highScores.splice(5)

    localStorage.setItem('highscores', JSON.stringify(highScores))

    console.log(highScores)
    //window.location.assign('/')

}