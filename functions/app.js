function maxOfTwoNumbers(a ,b){
  return Math.max(a, b);
}
console.log(maxOfTwoNumbers(1,4))

const maxOfThreeNumbers = (a, b, c) => Math.max(a, b, c)
console.log(maxOfThreeNumbers(1, 4, 9))

const isVowel = (char) => ['a', 'e', 'i', 'o', 'u'].includes(char)
console.log(isVowel('a'))

function sumArray(myArray){
  let totalArray = 0
  myArray.forEach((item) => {
    totalArray += item
  })
  return totalArray
}
console.log(sumArray([1, 2, 9]))

function mulArray(myArray){
  myArray.reduce((product, num) => product * num, 1)//0 is the initial value of "sum" called the accumulator
}
console.log(mulArray([1, 2, 9]))

const nbParameters = function(){
  return arguments.length
}
console.log(nbParameters(123, 634, 'efcsd', true))

function reverseString(string){
  return string.split('').reverse().join('')
}
console.log(reverseString('yeah'))

function longestWord(longestWord){
  const orderedArray = longestWord.sort((a, b) => b.length -  a.length)
  return orderedArray[0].length
}

console.log(longestWord['yeah', 'why', 'house'])

function filterLongestWords(words, maxLength){
  return words.filter(word => word.length > maxLength)
}
console.log(filterLongestWords(['yeah', 'why', 'house']))
