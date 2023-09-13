const expect = require('chai').expect;
const { solve } = require('../codewars/fixStringCase.js')

describe('fixStringCase', () => {
  it('Should be a function', () => {
    expect(solve).to.be.a('function')
  })

  it('Should return a lowercase string if the input string is lowercase', () => {
    const strawberry = solve('strawberry')
    expect(strawberry).to.equal('strawberry')
  })

  it('Should return an uppercase string if the input string is uppercase', () => {
    const strawberry = solve('STRAWBERRY')
    expect(strawberry).to.equal('STRAWBERRY')
  })

  it('Should return a lowercase string if the input string has an equal number of upper and lower', () => {
    const strawberry = solve('STRAWberry')
    expect(strawberry).to.equal('strawberry')
  })

  it('Should return a lowercase string if the input string has more lowercase than uppercase', () => {
    const strawberry = solve('STRAwberry')
    expect(strawberry).to.equal('strawberry')
  })

  it('Should return an uppercase string if the input string has more uppercase than lowercase', () => {
    const strawberry = solve('straWBERRY')
    expect(strawberry).to.equal('STRAWBERRY')
  })
});
