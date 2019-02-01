document.addEventListener('DOMContentLoaded', () => {
  var
  function animateProgressBar(){
    const progressBar = document.getElementById('inner')
    progressBar.style.width = '47%';
  }
  function increaseBy5(){
    const progressBar = document.getElementById('inner')
    progressBar =
  }
  const body = document.querySelector('body')
  body.onload = animateProgressBar

  const button = document.querySelector('button')
  button.addEventListener('click', increaseBy5)
})
