const expect = require('chai').expect;
const { alienLanguage } = require('../codewars/AlienLanuage.js');

describe('alienLanguage', () => {
  it('Should be a function', () => {
    expect(alienLanguage).to.be.a('function');
  });

  it('Should return a string', () => {
    const alienSays = alienLanguage("My name is John")
    expect(alienSays).to.be.a('string');
  });
});
