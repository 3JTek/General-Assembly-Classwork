/* eslint-disable no-unused-vars */

function ftAndInToCm(string) {
  //Transform the string in an array and parse string element into float element
  const newArray = string.split("'").map(str => parseFloat(str))
  //Return the (feet * 12 + inches) * 2.54
  return Math.round(2.54 * (newArray[0] * 12 + newArray[1]))
}
