const $countries = $('.countries')
const $sort = $('select')
const $form = $('form')

let countryData = []

$.get('https://restcountries.eu/rest/v2/all')
  .then(data => {
    countryData = data.slice(10, 20)
    displayCountries()
  })

//Deconstructing the object "e" parsing only the target.value
function handleSort({ target: { value  } }) {
  //Create 2 variable deconstructing the object value in two variable
  const [sortBy, direction] = value.split('|')

  countryData.sort((a, b) => {

    if(direction === 'asc') {
      a[sortBy] < b[sortBy] ?  -1 : a[sortBy] > b[sortBy] ? 1 : 0
    } else {
      a[sortBy] < b[sortBy] ?  1 : a[sortBy] > b[sortBy] ? -1 : 0
    }
  })

  displayCountries()
}

function displayCountries() {
  $countries.empty()
  countryData.forEach(country => {
    $countries.append(`
      <div>
        <h2>${country.name}</h2>
        <h4>${country.population}</h4>
      </div>
    `)
  })
}

function addCountry(e) {
  e.preventDefault()
  const data = {
    name: $form.find('[name=name]').val(),
    population: parseFloat($form.find('[name=population]').val())
  }

  let index = countryData.findIndex(country => country.name > data.name)
  if(index === -1) index = countryData.length

  //Construct another array spreading the begining and the end of countryData and inserting data in the middle
  countryData = [
    ...countryData.slice(0, index),
    data,
    ...countryData.slice(index)
  ]

  displayCountries()
}

$sort.on('change', handleSort)
$form.on('submit', addCountry)
