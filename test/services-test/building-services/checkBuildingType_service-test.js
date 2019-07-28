const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);
const { checkType } = require('../../../src/services/building-services/checkBuildingType_service');


describe('checkType with should', () => {
  it('empty type', () =>
    checkType('', 'asdasd')
      .should.be.rejectedWith('Type is required.'));

  it('empty token', () =>
    checkType('farm', '')
      .should.be.rejectedWith('Token is required.'));

  it('undefined token', () =>
    checkType('farm', undefined)
      .should.be.rejectedWith('Token is required.'));

  it('undefined type', () =>
    checkType(undefined, 'asd')
      .should.be.rejectedWith('Type is required.'));


  it('wrong type', () =>
    checkType('alkhsdkj', 'éoiahsdé')
      .should.be.rejectedWith('Wrong type.'));

  it('correct type (farm) and token', () =>
    checkType('farm', 'éoiahsdé')
      .should.become(undefined));

  it('correct type (mine) and token', () =>
    checkType('mine', 'éoiahsdé')
      .should.become(undefined));
});

