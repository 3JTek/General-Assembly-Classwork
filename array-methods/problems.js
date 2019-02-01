/* eslint-disable no-unused-vars */

// write a function that returns the sum of all numerical values in an array. It should be able to handle number and string datatypes.
// eg: sumOfArray([1, 2, 3]) => 6; sumOfArray([1, '2', '3']) => 6;
function sumOfArray(array) {
  return array.reduce((accumulator, element) => accumulator + parseInt(element),0)
}

// write a function that takes an array of words as an argument and returns only words starting with an uppercase 'B'.
// eg: beginsWithB(['Bell', 'Ball']) => ['Bell', 'Ball']; beginsWithB(['Bell', 'sandwich']) => ['Bell'];
function beginsWithB(array) {
  return array.filter(element => element.charAt(0) === 'B')
}

// write a function that multiplies each number in an array by 10 and returns the values in a new array. Make any negative numbers positive.
// eg: multiplyBy10([10, 3]) => [100, 30]; multiplyBy10([-2, 0, 10]) => [20, 0, 100];
function multiplyBy10(array) {
  return array.map(element => Math.abs(element) * 10)
}

// write a function that takes a value and an array and returns the index of the given value in the array. If the value is not in the array it should return null.
// eg: findIndex(1, [10, 3, 1]) => 2; findIndex('George', ['Mike', 'Rane', 'Alex']) => null;
function findIndex(val, array) {
  return array.includes(val) ? array.indexOf(val) : null
}
// write a function that checks whether ANY of the numbers in the array are can be divided by 5. It should return true or false.
// eg: divisibleBy5([8, 12, 15]) => true; divisibleBy5([11, 9, 34]) => false;
function divisibleBy5(array) {
  return array.some(element => element % 5 === 0)
}

// write a function that checks whether ALL of the numbers in the array are can be divided by 5. It should return true or false.
// eg: divisibleBy10([10, 20, 30]) => true; divisibleBy10([10, 20, 99]) => false;
function divisibleBy10(array) {
  return array.every(element => element % 5 === 0)
}
