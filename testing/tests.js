/* global describe, xdescribe, it */
/* eslint-disable no-undef */

const chai  = window.chai
const expect = chai.expect

describe('Feet and Inches to CM tests', () => {
  it('should convert ft and inches to cm', done => {
    expect(ftAndInToCm('5\'10"')).to.eq(178)
    expect(ftAndInToCm('4\'8"')).to.eq(142)
    expect(ftAndInToCm('6\'2"')).to.eq(188)
    done()
  })
})

return (number % 5 === 0 && number % 3 === 0) ? 'FizzBuzz' : number % 3 === 0 ? 'Fizz' : number % 5 === 0 ? Buzz : number

function(array){
  array.sort((a, b) => a - b).reverse().reduce((acc, el,index) => index < 3? acc + el:acc,0)
}
