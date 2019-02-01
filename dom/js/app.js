// document.addEventListener('DOMContentLoaded', () => {
//   const body = document.querySelector('body')
//   const h1 = document.createElement('h1')
//   h1.innerHTML = 'I am a heading'
//   body.appendChild(h1)
//   h1.style.color = 'grey'
//   h1.style.border = '2px solid green'
//   h1.style.padding = '20px'
//   console.log(h1.off)
//   const box = document.createElement('div')
//   box.innerHTML = 'I am a div'
//   body.appendChild(box)
//   box.className = 'box'
//   box.id = 'single'
//   console.log(box.offsetTop)
//   box.dataset.set = '  /1'
// })

$(() => {
  const body = $('body')
  const heading = $('<h1/>')
  body.append(heading)
  heading.html('I am a heading')
  heading.css({
    color: 'grey',
    border: '2px solid green',
    padding: '20px'
  })
  console.log(heading.height(true))
  const box = $('<div>I am a div</div>')
  body.append(box)
  body.attr('id', 'single')
  console.log(body.children())
  box.data('id', 1)
  console.log(box.offset().top)
})
