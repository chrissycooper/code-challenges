const expect = require('chai').expect;
const { dataArray, filterNullValues } = require('../repls/filterNullValues.js');

describe('filterNullValues', () => {
  it('Imports should be proper data types', () => {
    expect(dataArray).to.be.an('array');
    expect(filterNullValues).to.be.a('function');
  })

  it('Should output an array of objects', () => {
    const filteredArr = filterNullValues(dataArray)
    expect(filteredArr).to.be.an('array');
    expect(filteredArr[0]).to.be.an('object');
  })

  it('Should not have any null key value pairs in the return value', () => {
    const filteredArr = filterNullValues(dataArray)
    const values = Object.values(filteredArr)

    values.forEach((value) => {
      expect(value).to.not.be('null')
    })
    expect(filteredArr).to.be.an('array');
    expect(filteredArr[0]).to.be.an('object');
  })
})
