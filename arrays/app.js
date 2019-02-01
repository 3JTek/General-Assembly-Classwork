const myArray = ["Elephant", "Ouai", 1.23, 56]

console.log(myArray.filter((element) => (element).toString().charAt(0) === 'E'))

console.log(myArray.map(element => typeof(element) === 'number' ? element *2:'' ))

console.log(myArray.reduce((accumulator, element) => accumulator + element.toString().length,0))

console.log(myArray.some(element => element === 'Elephant'))

console.log(myArray.every(element => !!element))
