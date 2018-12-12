document.addEventListener('DOMContentLoaded', () => {
  let score = 0
  let timerId
  let timeRemaining = 10

  const screen = document.querySelector('.screen')
  const screenHeader = screen.querySelector('h1')
  const screenPara = screen.querySelector('p')
  const playBtn = screen.querySelector('button')
  const gameBoard = document.querySelector('.game')
  const divs = gameBoard.querySelectorAll('.game div')
  const scoreBoard = document.querySelector('.score')
  const timer = document.querySelector('.timer')

  gameBoard.style.display = 'none'

  function updateScore() {
    score++
    scoreBoard.textContent = score
  }

  function updateTime() {
    timeRemaining--
    timer.textContent = timeRemaining
  }

  function getRandomDiv() {
    return divs[Math.floor(Math.random() * divs.length)]
  }

  function goMole() {
    updateTime()
    const div = getRandomDiv()
    div.classList.add('mole')
    setTimeout(() => div.classList.remove('mole'), 1000)
    if(timeRemaining === 0) stop()
  }

  function stop() {
    clearTimeout(timerId)
    screen.style.display = 'flex'
    gameBoard.style.display = 'none'

    screenHeader.textContent = 'Game over!'
    screenPara.textContent = `You scored ${score}`
    timer.textContent = timeRemaining
    scoreBoard.textContent = score
  }

  function play() {
    score = 0
    timeRemaining = 10
    screen.style.display = 'none'
    gameBoard.style.display = 'flex'
    timerId = setInterval(goMole, 1500)
    goMole()
  }

  function whack(e) {
    if(e.target.classList.contains('mole')) {
      updateScore()
      e.target.classList.remove('mole')
    }
  }

  playBtn.addEventListener('click', play)

  divs.forEach(div => div.addEventListener('click', whack))

})
