let player1
let player2
let resultBtn
const winConditions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}
const choices = Object.keys(winConditions)

function makeChoice(){
  return choices[Math.floor(Math.random() * choices.length)]
}

function findWinner(player1, player2){
  if(player1 === player2) return 'Tie'
  if (winConditions[player1] === player2) return 'You win'
  return 'You lose'
}

function play(e) {
  const player1Choice = e.target.textContent
  const player2Choice = makeChoice()

  player1.textContent = player1Choice
  player2.textContent = player2Choice

  resultBtn.textContent = findWinner(player1Choice, player2Choice)
}

function reset() {
  player1.textContent = ''
  player2.textContent = ''
  resultBtn.textContent = ''
}

function init(){
  player1 = document.querySelector('.player1')
  player2 = document.querySelector('.player2')
  resultBtn = document.querySelector('.result')
  const resetBtn = document.querySelector('.reset')
  const buttons = document.querySelectorAll('button.choice')

  buttons.forEach(button => button.addEventListener('click', play))
  resetBtn.addEventListener('click', reset)
}

window.addEventListener('DOMContentLoaded', () => {
  init()
})
