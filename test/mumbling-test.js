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

  it("Should work on a short string all uppercase", ()=> {
    const test1 = accum("ABCD")
    expect(test1).to.equal("A-Bb-Ccc-Dddd")
  })

  it("Should work on a short string, mixed case", ()=> {
    const test2 = accum("cwAt")
    expect(test2).to.equal("C-Ww-Aaa-Tttt")
  })

  it("Should work on a longer string, mixed case", ()=> {
    const test3 = accum("RqaEzty")
    expect(test3).to.equal("R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
  })

  it("Should pass the extra tests, 1/5", ()=> {
    const test4 = accum("ZpglnRxqenU")
    expect(test4).to.equal("Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")
  })

  it("Should pass the extra tests, 2/5", ()=> {
    const test5 = accum("NyffsGeyylB")
    expect(test5).to.equal("N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb")
  })

  it("Should pass the extra tests, 3/5", ()=> {
    const test6 = accum("MjtkuBovqrU")
    expect(test6).to.equal("M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu")
  })

  it("Should pass the extra tests, 4/5", ()=> {
    const test7 = accum("EvidjUnokmM")
    expect(test7).to.equal("E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm")
  })

  it("Should pass the extra tests, 5/5", ()=> {
    const test8 = accum("HbideVbxncC")
    expect(test8).to.equal("H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc")
  })
});