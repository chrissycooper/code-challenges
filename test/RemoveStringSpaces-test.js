const expect = require('chai').expect;
const { noSpace0, noSpace1 } = require('../codewars/RemoveStringSpaces.js');


describe('noSpace0', () => {
  it('should be a function', () => {
    expect(noSpace0).to.be.a('function');
  });

  it('should return a string', () => {
    const str = 'She sells seashells by the seashore.';
    const noSpaces0 = noSpace0(str);
    expect(noSpaces0).to.be.a('string');
  });

  it('should return a string with no spaces', () => {
    const str = 'She sells seashells by the seashore.';
    const str1 = '8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd';
    const noSpaces0 = noSpace0(str);
    const noSpaces1 = noSpace0(str1);
    expect(noSpaces0).to.equal('Shesellsseashellsbytheseashore.');
    expect(noSpaces1).to.equal('88Bifk8hB8BB8BBBB888chl8BhBfd');
  });

  it('should return a string with no spaces if multiple spaces in a row', () => {
    const str = '   She         sells seashells       by the seashore. ';
    const noSpaces0 = noSpace0(str);
    expect(noSpaces0).to.equal('Shesellsseashellsbytheseashore.');
  });
});

describe('noSpace1', () => {
  it('should be a function', () => {
    expect(noSpace1).to.be.a('function');
  });

  it('should return a string', () => {
    const str = 'She sells seashells by the seashore.';
    const noSpaces0 = noSpace1(str);
    expect(noSpaces0).to.be.a('string');
  });

  it('should return a string with no spaces', () => {
    const str = 'She sells seashells by the seashore.';
    const str1 = '8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd';
    const noSpaces0 = noSpace1(str);
    const noSpaces1 = noSpace1(str1);
    expect(noSpaces0).to.equal('Shesellsseashellsbytheseashore.');
    expect(noSpaces1).to.equal('88Bifk8hB8BB8BBBB888chl8BhBfd');
  });

  it('should return a string with no spaces if multiple spaces in a row', () => {
    const str = '   She         sells seashells       by the seashore. ';
    const noSpaces0 = noSpace1(str);
    expect(noSpaces0).to.equal('Shesellsseashellsbytheseashore.');
  });
});
