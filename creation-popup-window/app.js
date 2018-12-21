document.addEventListener('DOMContentLoaded',() => {

  const homeScreenBtn = document.querySelector('.home-screen-button button')
  const popupWindow = document.querySelector('.background-screen')

  const closeBtn = document.querySelector('.close')

  homeScreenBtn.addEventListener('click', () => popupWindow.classList.toggle('hide'))
  closeBtn.addEventListener('click', () => popupWindow.classList.toggle('hide'))

})
