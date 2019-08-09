const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);
const { checkToken } = require('../../../src/services/troops-services/checkToken_service');


describe('checkToken with should', () => {
  it('empty token', () =>
    checkToken('')
      .should.be.rejectedWith('Token is required.'));

  it('undefined token', () =>
    checkToken(undefined)
      .should.be.rejectedWith('Token is required.'));

  it('given token', () =>
    checkToken('asd')
      .should.become(undefined));
});
