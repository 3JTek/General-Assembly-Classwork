// document.addEventListener('DOMContentLoaded', () => {
//   const input = document.querySelector('textarea:first-child')
//   const output = document.querySelector('textarea:last-child')
//
//   const dictionary = {
//     hello: 'salut',
//     hi: 'salut',
//     my: 'mon',
//     me: 'moi',
//     friend: 'ami',
//     ok: 'd\'accord',
//     good: 'bon',
//     bill: 'addition',
//     day: 'jour',
//     morning: 'journeé',
//     evening: 'soireé',
//     night: 'nuit',
//     shit: 'merde',
//     wine: 'vin',
//     red: 'rouge',
//     white: 'blanc',
//     rose: 'rosé'
//   }
//
//   input.addEventListener('keyup', (e) => {
//     output.value = e.target.value.split(' ').map(word => dictionary[word] || word).join(' ')
//   })
// })

class Translator {
  constructor(dictionary) {
    // GETTING (OR GENERATING) DOM ELEMENTS
    const main = document.querySelector('main')
    this.input = document.createElement('textarea')
    this.output = document.createElement('textarea')

    main.appendChild(this.input)
    main.appendChild(this.output)

    this.dictionary = dictionary

    // SORTING OUT this
    this.translate = this.translate.bind(this)

    // INITIALIZING THE EVENT LISTENERS
    this.init()
  }

  init() {
    // ASSIGN EVENT LISTENERS
    this.input.addEventListener('keyup', this.translate)
  }

  // LOGIC
  translate(e) {
    this.output.value = e.target.value.split(' ').map(word => this.dictionary[word] || word).join(' ')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Translator({
    hello: 'salut',
    hi: 'salut',
    my: 'mon',
    me: 'moi',
    friend: 'ami',
    ok: 'd\'accord',
    good: 'bon',
    bill: 'addition',
    day: 'jour',
    morning: 'journeé',
    evening: 'soireé',
    night: 'nuit',
    shit: 'merde',
    wine: 'vin',
    red: 'rouge',
    white: 'blanc',
    rose: 'rosé'
  })
  new Translator({
    hello: 'hallo',
    hi: 'grüßdich',
    my: 'mein',
    me: 'mich',
    friend: 'friend',
    ok: 'ok',
    good: 'gut',
    day: 'tag',
    morning: 'morgan',
    evening: 'abend',
    night: 'nacht',
    shit: 'shiße',
    wine: 'wine',
    red: 'rot',
    white: 'weiß',
    rose: 'rosen'
  })
})
