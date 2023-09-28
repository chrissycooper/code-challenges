const expect = require('chai').expect;
const { accum } = require('../codewars/mumbling.js');

describe("mumbling: accum", () => {
  it("Should be a function", ()=> {
    expect(accum).to.be.a('function')
  })

  it("Should work on a short string all lowercase", ()=> {
    const test1 = accum("abcd")
    expect(test1).to.equal("A-Bb-Ccc-Dddd")
  })

})