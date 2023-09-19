const expect = require('chai').expect;
const { alienLanguage } = require('../codewars/AlienLanuage.js');

describe('alienLanguage', () => {
  it('Should be a function', () => {
    expect(alienLanguage).to.be.a('function');
  });

  it('Should return a string', () => {
    const alienSays = alienLanguage("My name is John");
    expect(alienSays).to.be.a('string');
  });

  it('Should return a properly cased string', () => {
    const alienSays = alienLanguage('My name is John');
    expect(alienSays).to.equal('My NAMe Is JOHn');
  });

  it('Should return a properly cased string pt.2', () => {
    const alienSays = alienLanguage('this is an example');
    expect(alienSays).to.equal('THIs Is An EXAMPLe');
  });

  it('Should return a properly cased string - all caps', () => {
    const alienSays = alienLanguage('HELLO WORLD');
    expect(alienSays).to.equal('HELLo WORLd');
  });
});
