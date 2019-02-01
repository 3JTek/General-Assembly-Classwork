class TimerLab{
  constructor(){
    this.timeDisplay = document.querySelector('#watch .screen')
    this.bombScreen = document.querySelector('#timer .screen')
    this.bomb = document.querySelector('#timer')
    this.button = document.getElementById('startStop')

    this.timeRemaining = 10
    this.countDown = this.countDown.bind(this)
    this.init()

  }

  displayHour(){
    this.timeDisplay.textContent = new Date().toLocaleTimeString()
    setTimeout(() => this.displayHour(),1000)
  }

  countDown() {
    this.bombScreen.textContent = this.timeRemaining
    this.timeRemaining --
    if(this.timeRemaining >=0) {
      setTimeout(() => this.countDown(),1000)
    } else{
      this.bomb.className = 'ringing'
      setTimeout(() => {
        this.timeRemaining = 10
        this.bombScreen.textContent = this.timeRemaining
        this.bomb.classList.remove('ringing')
      },2000)
    }
  }



  init(){
    this.button.addEventListener('click', this.countDown)
    this.displayHour()
  }


}
const screen = new TimerLab()
