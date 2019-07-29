const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);
const { checkCountryCodePresence } = require('../../../src/services/kingdom-service/country-code-service');


describe('checkCountryCodePresence with should', () => {
  it('empty request', () =>
    checkCountryCodePresence({})
      .should.be.rejectedWith('Country code is required.'));

  it('empty country code', () =>
    checkCountryCodePresence({ body: { country_code: '' } })
      .should.be.rejectedWith('Country code is required.'));

  it('body is not empty, but there is no cc', () =>
    checkCountryCodePresence({ body: { kisnyúl: 'asd' } })
      .should.be.rejectedWith('Country code is required.'));

  it('correct request', () =>
    checkCountryCodePresence({ body: { country_code: 'asd' } })
      .should.become(undefined));

});
