const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const { expect } = chai;

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
let mongoServer;

const User = require('../../../src/models/register.model');
const Kingdom = require('../../../src/models/kingdom.model');

const { postUser } = require('../../../src/services/register/user.service');
const { createKingdom } = require('../../../src/services/register/kingdom.service');


before((done) => {
  mongoServer = new MongoMemoryServer();
  mongoServer
    .getConnectionString()
    .then((mongoUri) => {
      return mongoose.connect(mongoUri, { useCreateIndex: true, useNewUrlParser: true }, (err) => {
        if (err) done(err);
      });
    })
    .then(() => done());
});

after(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

let newUser;
let newKingdom;

describe('...', () => {
  it('successfully added new user', async () => {
    newUser = await postUser('Nora', 'password');
    const usercount = await User.countDocuments();
    expect(usercount).to.equal(1);
  });
  
  it('cannot add with same username', async () => {
    await expect(postUser('Nora', 'password')).to.be.rejectedWith('Username is already taken.');
  });
  
  it('added new kingdom withouth given kingdomName', async () => {
    newKingdom = await createKingdom(newUser._id, 'Nora');
    expect(newKingdom.kingdomName).to.equal('Nora\'s kingdom');
  });

  it('added new kingdom with given kingdomName', async () => {
    newKingdom = await createKingdom(newUser._id, 'Nora', 'Whatwhat');
    expect(newKingdom.kingdomName).to.equal('Whatwhat');
  });
});
