const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);
const { passwordUsernameLengthChecker } = require('../../../src/services/register/lengths_checker.service');
const { passwordMinimumChecker } = require('../../../src/services/register/password_minimum_length.service');
const { passwordLengthChecker } = require('../../../src/services/register/passwordlength_checker.service');
const { usernameLengthChecker } = require('../../../src/services/register/usernamelength_checker.service');


describe('register - password and username tests with should', () => {
  it('empty username and password', () =>
    passwordUsernameLengthChecker('', '')
      .should.be.rejectedWith('Username and password are required.'));

  it('empty username and password', () =>
    passwordUsernameLengthChecker(undefined, undefined)
      .should.be.rejectedWith('Username and password are required.'));

  it('empty username and password', () =>
    passwordUsernameLengthChecker(undefined, '')
      .should.be.rejectedWith('Username and password are required.'));


  it('empty username and password', () =>
    passwordUsernameLengthChecker('', undefined)
      .should.be.rejectedWith('Username and password are required.'));

  it('username and password given', () =>
    passwordUsernameLengthChecker('asd', 'asd')
      .should.become(undefined));

  it('too short password', () =>
    passwordMinimumChecker('asdasd')
      .should.be.rejectedWith('Password must be at least 8 characters.'));

  it('password is long enough', () =>
    passwordMinimumChecker('asdasdasdasd')
      .should.become(undefined));


  it('empty password', () =>
    passwordLengthChecker('')
      .should.be.rejectedWith('Password is required.'));

  it('given password', () =>
    passwordLengthChecker('asdasdasdasd')
      .should.become(undefined));


  it('too short username', () =>
    usernameLengthChecker('')
      .should.be.rejectedWith('Username is required.'));

  it('given password', () =>
    usernameLengthChecker('asdasdasdasd')
      .should.become(undefined));
});
