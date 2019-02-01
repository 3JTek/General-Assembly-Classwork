var play = true

while(play){
  //Generate random number
  var number = Math.floor((Math.random()*10)+1)
  var userInput

  while(parseInt(userInput) !== number){
    userInput = prompt('Please enter a number')
  }
  play = window.confirm('Do you want to play again')
}
