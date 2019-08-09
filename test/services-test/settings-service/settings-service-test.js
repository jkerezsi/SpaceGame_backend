const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);
const { checkSettingsField } = require('../../../src/services/settings-service/settings-service');

describe('checkSettingsField with should', () => {
  it('empty name, given token', () =>
    checkSettingsField('', 'asd')
      .should.be.rejectedWith('Name is required.'));

  it('undefined name, given token', () =>
    checkSettingsField(undefined, 'asd')
      .should.be.rejectedWith('Name is required.'));

  it('given name, empty token', () =>
    checkSettingsField('asd', '')
      .should.be.rejectedWith('We are not able to define user.'));

  it('given name, undefined token', () =>
    checkSettingsField('asd', undefined)
      .should.be.rejectedWith('We are not able to define user.'));

  it('undefined name, undefined token', () =>
    checkSettingsField(undefined, undefined)
      .should.be.rejectedWith('Name is required.'));

  it('empty name and token', () =>
    checkSettingsField('', '')
      .should.be.rejected);

  it('given name and token', () =>
    checkSettingsField('asd', 'asd')
      .should.become(undefined));
});
