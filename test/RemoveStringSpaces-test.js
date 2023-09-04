var assert = require('chai').assert;
var { noSpace0, noSpace1 } = require('../codewars/RemoveStringSpaces.js');

describe('Array', () => {
  it('should return -1 when the value is not present', () => {
    assert.equal([1, 2, 3].indexOf(4), -1);
  })
});
