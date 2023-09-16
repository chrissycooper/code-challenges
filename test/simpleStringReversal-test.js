const expect = require('chai').expect;
const { reverseString } = require('../codewars/SimpleStringReversal.js');

describe('Simple String Reversal', () => {
  it('Should be a function', () => {
    expect(reverseString).to.be.a('function');
  });

  it('Should be able to reverse a simple string', () => {
    const reverse = reverseString('vampire')
    expect(reverse).to.equal('eripmav');
  });

  it('Should be able to maintain spaces', () => {
    const reverse = reverseString('vampire hunters')
    expect(reverse).to.equal('sretnuh eripmav');
  });

  it('Should be able to maintain spaces - more complex', () => {
    const reverse = reverseString('buffy the vampire slayer')
    expect(reverse).to.equal('reyal ser ipmaveh tyffub');
  });
});