document.addEventListener('DOMContentLoaded', () => {
  let score = 0
  let timerId
  let timeRemaining = 10

  const $screen = $('.screen')
  const $screenHeader = $screen.find('h1')
  const $screenPara = $screen.find('p')
  const $playBtn = $screen.find('button')
  const $gameBoard = $('.game')
  const $divs = $gameBoard.find('div')
  const $scoreBoard = $('.score')
  const $timer = $('.timer')

  $gameBoard.hide()

  function updateScore() {
    score++
    $scoreBoard.text(score)
  }

  function updateTime() {
    timeRemaining--
    $timer.text(timeRemaining)
  }

  function getRandomDiv() {
    return $divs.eq(Math.floor(Math.random() * $divs.length))
  }

  function goMole() {
    updateTime()
    const $div = getRandomDiv()
    $div.addClass('mole')
    setTimeout(() => $div.removeClass('mole'), 1000)
    if(timeRemaining === 0) stop()
  }

  function stop() {
    clearTimeout(timerId)
    $screen.css({display: 'flex'})
    $gameBoard.hide()

    $screenHeader.text('Game over!')
    $screenPara.text(`You scored ${score}`)
    $timer.text(timeRemaining)
    $scoreBoard.text(score)
  }

  function play() {
    score = 0
    timeRemaining = 10

    $screen.css({display: 'none'})
    $gameBoard.css({display: 'flex'})
    timerId = setInterval(goMole, 1500)
    goMole()
  }

  function whack(e) {
    if($(e.target).hasClass('mole')) {
      updateScore()
      $(e.target).removeClass('mole')
    }
  }

  $playBtn.on('click', play)

  $divs.each((i, element) => $(element).on('click', whack))

})
