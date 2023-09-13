const expect = require('chai').expect;
const { solve } = require('../codewars/fixStringCase.js')

describe('fixStringCase', () => {
  it('Should be a function', () => {
    expect(solve).to.be.a('function')
  })
});
