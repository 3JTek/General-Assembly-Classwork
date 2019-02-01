document.addEventListener('DOMContentLoaded', () => {
  // const buttons = document.querySelectorAll('button')
  //
  // const styleButton = (e) => {
  //   e.target.style.fontWeight = 'bold'
  //   e.target.style.color = 'white'
  //   e.target.style.backgroundColor = 'red'
  // }
  //
  // buttons.forEach(button => {
  //   button.addEventListener('mouseup', styleButton)
  // })
  //
  // buttons[0].addEventListener('click', () => console.log('hahahaha'))

  // const img = document.querySelector('img')
  // img.addEventListener('mouseover', (e) => e.target.src = 'http://fillmurray.com/250/250')
  // img.addEventListener('mouseout', (e) => e.target.src = 'http://fillmurray.com/300/300')
  // img.addEventListener('mousemove', (e) => console.log(e.clientX, e.clientY))

  const form = document.querySelector('form')
  const input = form.querySelector('input')
  const button = form.querySelector('button')

  input.addEventListener('focus', (e) => console.log('focus', e.target.value))
  input.addEventListener('blur', (e) => console.log('blur', e.target.value))

  form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('form is submitted')
  })

  button.addEventListener('click', () => {
    console.log('button is clicked')
  })

  window.addEventListener('scroll', () => {
    console.log('scrollin scrollin scrollin what')
  })

})
