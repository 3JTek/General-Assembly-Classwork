/* global describe, xdescribe, it */
/* eslint-disable no-undef */

const chai  = window.chai;
const expect = chai.expect;

describe('sumOfArray', () => {
  it('should return the sum of an array of numbers', () => {
    expect(sumOfArray([12, 4, 4])).to.equal(20);
  });
  it('should return the sum of an array of stringified numbers and numbers', () => {
    expect(sumOfArray(['32', 1, '10'])).to.equal(43);
  });
});

describe('beginsWithB', () => {
  it('should return only words begining with uppercase B', () => {
    expect(beginsWithB(['Boulder', 'banana', 'Tennis', 'leg', 'Berry'])).to.deep.equal(['Boulder', 'Berry']);
    expect(beginsWithB(['Coca-Cola', 'Bottle', 'Bag', 'Beef', 'tango'])).to.deep.equal(['Bottle', 'Bag', 'Beef']);
  });
});

describe('multiplyBy10', () => {
  it('should multiply each value by 10', () => {
    expect(multiplyBy10([4, 3])).to.deep.equal([40, 30]);
  });
  it('should multiply each value by 10 and make negative integers positive', () => {
    expect(multiplyBy10([-3, 0, 100])).to.deep.equal([30, 0, 1000]);
  });
});

describe('findIndex', () => {
  it('should find the index of given value in the array', () => {
    expect(findIndex(2, [4, 3, 2, 1])).to.equal(2);
    expect(findIndex('Jim', ['Jim', 120, 'Bob'])).to.equal(0);
  });
  it('should return null if value not present in the array', () => {
    expect(findIndex('Jim', ['John', 120, 'Bob'])).to.equal(null);
  });
});

describe('divisibleBy5', () => {
  it('should check if ANY of the array values are divisible by 5', () => {
    expect(divisibleBy5([4, -18, 25, 54])).to.be.true;
    expect(divisibleBy5([10, -10, 34, 150, 0])).to.be.true;
  });
  it('should return false if none of the array values are divisible by 5', () => {
    expect(divisibleBy5([42, 38, 21, 1])).to.be.false;
  });
});

describe('divisibleBy10', () => {
  it('should check if ALL of the array values are divisible by 10', () => {
    expect(divisibleBy10([10, 50, 200])).to.be.true;
    expect(divisibleBy10([10, -10, 0, 80])).to.be.true;
  });
  it('should return false if one or more of the array values are not divisible by 10', () => {
    expect(divisibleBy10([10, 130, 55, 7])).to.be.false;
  });
});
