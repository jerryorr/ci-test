describe('hello', function () {
  it('uses name if present', function () {
    chai.assert.equal(hello('Jerry'), 'No, I will NOT say Hello Jerry')
  })

  it('uses stranger if no name', function () {
    chai.assert.equal(hello(), 'No, I will NOT say Hello stranger')
  })

  it('capitalizes first letter', function () {
    chai.assert.equal(hello('jerry'), 'No, I will NOT say Hello Jerry')
  })
})