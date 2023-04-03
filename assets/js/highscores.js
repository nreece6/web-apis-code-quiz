const highScoresList = document.getElementById('high-scores-list')
const highScores = JSON.parse(localStorage.getItem('highscores')) || []

console.log(highScores)