console.log('JS loaded');

//ES6 class syntax
class Monkey{
  constructor(name, species, dateOfBirth, foodsEaten=[]){
    this.name = name
    this.species = species
    this.dateOfBirth = dateOfBirth
    this.foodsEaten = foodsEaten
  }
  eatSomething(thingAsString){
    this.foodsEaten.push = thingAsString
  }
  introduce(){
    return `Hi I'm ${this.name} the ${this.species} monkey and I've eaten way too much ${this.foodsEaten}`
  }
  age(){
    const today = new Date()
    return today.getFullYear() - this.dateOfBirth.substr(this.dateOfBirth.length - 4, 4)
  }
}

//Old javascript syntax
// function Monkey(name, species, dateOfBirth, foodsEaten=[]){
//   this.name = name
//   this.species = species
//   this.dateOfBirth = dateOfBirth
//   this.foodsEaten = foodsEaten
// }
//
// Monkey.prototype.eatSomething = function(thingAsString){
//   this.foodsEaten.push(thingAsString)
// }
// Monkey.prototype.introduce = function(){
//   return `Hi I'm ${this.name} the ${this.species} monkey and I've eaten way too much ${this.foodsEaten}`
// }
// Monkey.prototype.age = function(){
//   const today = new Date()
//   return today.getFullYear() - this.dateOfBirth.substr(this.dateOfBirth.length - 4, 4)
// }

const chita = new Monkey('Chita', 'Chimpanzee', '12/12/2000',['apple', 'leaf'])
const donkeyKong = new Monkey('Donkey Kong', 'Gorillaz', '01/01/1987', ['blond girl'])

console.log(chita.introduce())
chita.eatSomething('tarzan')
console.log(chita.introduce())
console.log(chita.age())

console.log(donkeyKong.introduce())
donkeyKong.eatSomething('explorer')
console.log(donkeyKong.introduce())
console.log(donkeyKong.age())
