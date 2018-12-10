window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button.choice').forEach(button => {
    button.addEventListener('click', (e) => {
      const choices = ['rock', 'paper', 'scissors']

      const player1Choice = e.target.textContent
      const player2Choice = choices[Math.floor(Math.random() * choices.length)]

      document.querySelector('.player1').textContent = player1Choice
      document.querySelector('.player2').textContent = player2Choice

      if(player1Choice === player2Choice) {
        document.querySelector('.result').textContent = 'Tie'
      } else if (
        player1Choice === 'rock' && player2Choice === 'scissors' ||
        player1Choice === 'paper' && player2Choice === 'rock' ||
        player1Choice === 'scissors' && player2Choice === 'paper'
      ) {
        document.querySelector('.result').textContent = 'You win'
      } else {
        document.querySelector('.result').textContent = 'You lose'
      }
    })
  })

  document.querySelector('button.reset').addEventListener('click', () => {
    document.querySelector('.player1').textContent = ''
    document.querySelector('.player2').textContent = ''
    document.querySelector('.result').textContent = ''
  })
})
