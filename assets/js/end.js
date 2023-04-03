const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('save-score-btn');
const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled =!username.value
})


function saveHighScore(e) {
    e.preventDefault()
    console.log("clicked the save button")
}