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

  it("Should work on a short string, mixed case", ()=> {
    const test3 = accum("cwAt")
    expect(test3).to.equal("C-Ww-Aaa-Tttt")
  })

  it("Should work on a longer string, mixed case", ()=> {
    const test2 = accum("RqaEzty")
    expect(test2).to.equal("R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
  })


})