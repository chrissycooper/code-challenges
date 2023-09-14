const expect = require('chai').expect;
const  { reverseAndCombineText } = require('../codewars/reverseAndCombineString.js');

describe('reverse_and_combine_text', () => {
  it('Should be a function', () => {
    expect(reverseAndCombineText).to.be.a('function');
  });
});
