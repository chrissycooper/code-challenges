const expect = require('chai').expect;
const  { reverseAndCombineText } = require('../codewars/reverseAndCombineString.js');

describe('reverse_and_combine_text', () => {
  beforeEach(()=> {
    str1 = 'abc def';
    str2 = 'abc def ghi jkl';
    str3 = 'tuberculosis';
    str4 = '234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12 44';
    str5 = 'sdfsdf wee sdffg 342234 ftt'
  })

  it('Should be a function', () => {
    expect(reverseAndCombineText).to.be.a('function');
  });

  it('Should reverse a simple two word string', () => {
    const newStr1 = reverseAndCombineText(str1)
    expect(newStr1).to.equal('cbafed');
  });

  it('Should reverse a more complex string', () => {
    const newStr2 = reverseAndCombineText(str2)
    expect(newStr2).to.equal('defabcjklghi');
  });

  it('Should return a string without spaces unchanged', () => {
    const newStr3 = reverseAndCombineText(str3)
    expect(newStr3).to.equal('tuberculosis');
  });

  it('Should reverse an EVEN MORE complex string', () => {
    const newStr4 = reverseAndCombineText(str4)
    expect(newStr4).to.equal('trzwqfdstrteettr45hh4325543544hjhjh21lllll');
  });

  it('Should reverse an odd word count complex string', () => {
    const newStr5 = reverseAndCombineText(str5)
    expect(newStr5).to.equal('gffds432243fdsfdseewttf');
  });

});
