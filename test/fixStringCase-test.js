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

  it('Should return a lowercase string if the input has an equal number of upper and lower', () => {
    const strawberry = solve('STRAWberry')
    expect(strawberry).to.equal('strawberry')
  })

  it('Should return a lowercase string if the input has more lower than uppercase', () => {
    const strawberry = solve('STRAwberry')
    expect(strawberry).to.equal('strawberry')

    const blueberry = solve('bLuEbErRy')
    expect(blueberry).to.equal('blueberry')
  })

  it('Should return an uppercase string if the input has more upper than lowercase', () => {
    const strawberry = solve('straWBERRY')
    expect(strawberry).to.equal('STRAWBERRY')

    const blueberry = solve('BLUeBERRY')
    expect(blueberry).to.equal('BLUEBERRY')
  })

  it('Should return a string if passed a special characters in a string', () => {
    const strawberry = solve('23984723948')
    expect(strawberry).to.equal('23984723948')
    const strawb3rry = solve('%^*)()@kjsdfhHHHHHHHHHHHHHHHHH')
    expect(strawb3rry).to.equal('%^*)()@KJSDFHHHHHHHHHHHHHHHHHH')
    const strawb3rry2 = solve('%^*)()@kjsdfhHHHHHH')
    expect(strawb3rry2).to.equal('%^*)()@kjsdfhhhhhhh')
  })
  
  
});
