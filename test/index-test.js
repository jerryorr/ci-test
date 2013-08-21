var hello = require('../').hello
  , assert = require('assert')

describe('hello', function () {
  it('uses name if present', function () {
    assert.equal(hello('Jerry'), 'No, I will NOT say Hello Jerry')
  })

  it('uses stranger if no name', function () {
    assert.equal(hello(), 'No, I will NOT say Hello stranger')
  })
})