const expect = require('chai').expect;
const { dataArray, filterNullValues } = require('../repls/filterNullValues.js');

describe('filterNullValues', () => {
  it('Imports should be proper data types', () => {
    expect(dataArray).to.be.an('array');
    expect(filterNullValues).to.be.a('function');
  })
})
