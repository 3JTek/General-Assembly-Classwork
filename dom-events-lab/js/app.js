document.addEventListener('DOMContentLoaded', () => {
  //Task 1
  function pulse(e){
    const circle = document.querySelector('div.circle')
    circle.classList.toggle('pulse')
  }

  const button = document.getElementById('toggle')
  button.addEventListener('click', pulse)

  //Task 2
  function updateCity(e){
    const fieldCity = document.getElementById('city')
    fieldCity.innerHTML = e.target.value
  }

  const dropDownCity = document.getElementById('cities')
  dropDownCity.addEventListener('change', updateCity)

  //Task 3
  function highlightDivs(e){
    const name = document.getElementById('current')
    name.innerHTML = e.target.innerHTML
  }
  const divsName = document.querySelectorAll('div.name')

  divsName.forEach(div => {
    div.addEventListener('mouseover',highlightDivs)
  })

  //Task 4
  function submitForm(e){
    e.preventDefault()
    console.log('yeah')

    const buttonSubmit = document.querySelector('.submit')
    buttonSubmit.innerHTML = 'Is Me'
    buttonSubmit.classList.add('submitted')


  }

  const form = document.getElementById('subscribe')
  form.addEventListener('submit', submitForm)

  //Task 5
  function checkScrolling(e){
    const header1 = document.querySelector('h1')
    console.log(e);
    if(e.scrollY > 40){
      console.log('yeah');
      header1.classList.add('fadeOutUp')
    }else{
      header1.classList.remove('fadeOutUp')
    }
  }
  window.addEventListener('scroll', checkScrolling)
})
