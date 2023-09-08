const expect = require('chai').expect;
const { dataArray, filterNullValues, filteredArray } = require('../repls/filterNullValues.js');

describe('filterNullValues', () => {

  it('Imports should be proper data types', () => {
    expect(dataArray).to.be.an('array');
    expect(filterNullValues).to.be.a('function');
  });

  it('Should output an array of objects', () => {
    const filteredArr = filterNullValues(dataArray)
    expect(filteredArr).to.be.an('array');
    expect(filteredArr[0]).to.be.an('object');
  });

  it('Should not have any null key value pairs in the return value', () => {
    const filteredArr = filterNullValues(dataArray)
    const values = Object.values(filteredArr)

    values.forEach((value) => {
      expect(value).to.not.equal(null);
    })
    expect(filteredArr).to.be.an('array');
    expect(filteredArr[0]).to.be.an('object');
  });

  it('Should match the example array', () => {
    const filteredArr = filterNullValues(dataArray)
    
    expect(filteredArr).to.be.an('array');
    expect(filteredArr[0]).to.deep.equal(filteredArray[0]);
    expect(filteredArr[1]).to.deep.equal(filteredArray[1]);
    expect(filteredArr[2]).to.deep.equal(filteredArray[2]);
  });

  it('Should keep the non-null values', () => {
    const filteredArr = filterNullValues(dataArray)
    
    expect(filteredArr).to.be.an('array');
    expect(filteredArr[2].id).to.equal(3);
    expect(filteredArr[2].name).to.equal("tuna");
    expect(filteredArr[2].other_id).to.equal("23");
    expect(filteredArr[2].setting).to.equal("direct_pay");
  });

  it('Should not change the data type of protected values', () => {
    const filteredArr = filterNullValues(dataArray)
    
    expect(filteredArr).to.be.an('array');
    expect(filteredArr[0].id).to.be.a('number');
    expect(filteredArr[0].name).to.be.a('string');
    expect(filteredArr[0].other_id).to.be.a('string');
    expect(filteredArr[1].setting).to.be.a('string');
    expect(filteredArr[1].url).to.be.a('string');
  });
});
