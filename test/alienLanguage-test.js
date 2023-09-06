const expect = require('chai').expect;
const { alienLanguage } = require('../codewars/AlienLanuage.js');

describe('alienLanguage', () => {
  it('Should be a function', () => {
    expect(alienLanguage).to.be.a('function');
  });
});
