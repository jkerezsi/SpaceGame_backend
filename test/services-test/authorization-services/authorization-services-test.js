const { checkTokenPresence } = require('../../../src/services/authorization-services/authorization-services');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const { expect } = chai;
chai.should();
chai.use(chaiAsPromised);


describe('checkTokenPresence with async await', () => {
  it('empty token', async () => {
    await expect(checkTokenPresence({ token: '' })).to.be.rejected;
  });
  it('undefined token', async () => {
    await expect(checkTokenPresence({ token: undefined })).to.be.rejected;
  });

  it('correct token', async () => {
    await expect(checkTokenPresence({ token: 'oiauezö978639' })).to.be.fulfilled;
  });
});

describe('checkTokenPresence with should', () => {
  it('empty token', () =>
    checkTokenPresence({ token: '' }).should.be.rejected);
  it('undefined token', () =>
    checkTokenPresence({ token: undefined }).should.be.rejected);
  it('correct token', () =>
    checkTokenPresence({ token: 'asdasd' }).should.be.fulfilled);

  it('undefined token', () =>
    checkTokenPresence({ token: undefined })
      .should.be.rejectedWith('No token provided.'));

  it('undefined token', () =>
    checkTokenPresence({})
      .should.be.rejectedWith('No token provided.'));

  it('undefined token', () =>
    checkTokenPresence(undefined)
      .should.be.rejectedWith('No token provided.'));

  it('correct token', () =>
    checkTokenPresence({ token: 'asdasd' }).should.eventually.equal(undefined));
  it('correct token', () =>
    checkTokenPresence({ token: 'asdasd' }).should.become(undefined));
});

