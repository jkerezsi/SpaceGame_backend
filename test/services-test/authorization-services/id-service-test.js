const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const { expect } = chai;

const { requestKingdomId } = require('../../../src/services/authorization-services//id-service');

