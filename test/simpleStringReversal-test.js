const expect = require('chai').expect;
const { reverseString } = require('../codewars/SimpleStringReversal.js');

describe('Simple String Reversal', () => {
  it('Should be a function', () => {
    expect(reverseString).to.be.a('function');
  })
})