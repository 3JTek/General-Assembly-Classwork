const mongoose = require('mongoose')

const cheeseSchema = new mongoose.Schema({
  name: {type: String, required: true},
  origin: {type: String, requried: true}
})

const Cheese = mongoose.model('Cheese', cheeseSchema)

mongoose.connect('mongodb://localhost/intro-to-mongoose')

Cheese.create({ name: 'Camembert', origin: 'France'})
  .then(cheese => console.log(cheese))

Cheese.findById('5c4f0ec27834b953105af882')
  .then(cheeses => console.log(cheeses))


//
// mongoose.connect('mongodb://localhost/intro-to-mongoose', (err, db) => {
//   db.collection('cheeses')
//     .insert({name: 'Cheddar', origin: 'England'})
//     // .then(cheese => console.log(cheese))
//     .catch(err => console.log(err))
// })
//
// mongoose.connect('mongodb://localhost/intro-to-mongoose', (err, db) => {
//   db.collection('cheeses')
//     .find()
//     .toArray()
//     .then(cheeses => console.log(cheeses))
// })
