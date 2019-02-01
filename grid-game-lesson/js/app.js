$(() => {
  const width = 10
  let playerIndex = 0
  let currentStep = 0
  let timerId
  let direction = 'forward'
  const $grid = $('.grid')

  $grid.attr('data-width', width)

  for(let i = 0; i<width*width; i++) {
    $grid.append($('<div />'))
  }

  const $squares = $('.grid div')
  $squares.eq(playerIndex).addClass('player')

  function stand() {
    $squares.eq(playerIndex)
      .removeAttr('data-step')
      .removeClass('surprise')
  }

  function movePlayer() {
    clearTimeout(timerId)
    currentStep = currentStep === 3 ? 0 : currentStep + 1
    $squares.eq(playerIndex)
      .addClass('player')
      .attr('data-step', currentStep)
      .attr('data-direction', direction)

    if(playerIndex === width*width-1) $squares.eq(playerIndex).addClass('surprise')

    timerId = setTimeout(stand, 300)
  }


  $(document).on('keydown', e => {
    // left 37, up 38, right 39, down 40
    $squares.eq(playerIndex).removeClass('player')

    switch(e.keyCode) {
      case 37: if(playerIndex % width > 0){
        playerIndex--
        direction = 'backward'
      }
        break
      case 38: if(playerIndex - width >= 0) playerIndex -= width
        break
      case 39: if(playerIndex % width < width-1) {
        playerIndex++
        direction = 'forward'
      }
        break
      case 40: if(playerIndex + width < width*width) playerIndex += width
        break
    }

    movePlayer()
  })
})
