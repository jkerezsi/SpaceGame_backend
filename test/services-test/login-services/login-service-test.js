const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);
const { checkFormFields } = require('../../../src/services/login-services/login-service');


describe('login - checkFormFields with should', () => {
  it('empty username and password', () =>
    checkFormFields('', '')
      .should.be.rejectedWith('All fields are required.'));

  it('empty username and password', () =>
    checkFormFields(undefined, '')
      .should.be.rejectedWith('All fields are required.'));

  it('empty username and password', () =>
    checkFormFields('', undefined)
      .should.be.rejectedWith('All fields are required.'));

  it('empty username and password', () =>
    checkFormFields(undefined, undefined)
      .should.be.rejectedWith('All fields are required.'));


  it('empty username', () =>
    checkFormFields('', 'asd')
      .should.be.rejectedWith('Username is required.'));

  it('empty password', () =>
    checkFormFields('asd', '')
      .should.be.rejectedWith('Password is required.'));

  it('given username and password', () =>
    checkFormFields('asd', 'asd')
      .should.become(undefined));

});

