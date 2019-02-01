let car = {
  brand: 'Toyota',
  numberOfSeats: 4,
  speed: 1001,
  announce: function() {
    return `The ${this.brand} is travelling at ${this.speed} mph`
  },
  speedUp: function(){
    this.speed += 1
    return this.announce()
  },
  slowDown: function(){
    this.speed -= 1
    return this.announce()
  }
}

let iceCream = {
  numberScoops: 1,
  flake: true,
  calculatePrice: function(){
    return this.numberScoops * 1.1 + (this.flake? 0.3 : 0)
  }
}

let countries = {
  name: 'HellYeah',
  population: 10000000,
  size: 666,
  calculateDensity: function(){
    const density = this.population / this.size
    return density < 100 ? 'low' : density > 500 ? 'high' : 'average'
  }
}

let pets = {
  name: 'Jean',
  pet: {
    name: 'German Shepard',
    age: 100,
    type: 'German Shepard'
  },
  introduce: function(){
    return `Hi, my name is ${this.name} and this is my ${this.pet.age}-year old ${this.pet.type},  ${this.pet.name}.`
  }
}

let bag = {
  content: [],
  addItem: function(item){
    this.content.push(item)
  },
  removeItem: function(item){
    delete this.content[item]
  },
  listItems: function(){
    return this.content
  },
  emptyBag: function(){
    this.content = []
  }
}
