/* eslint-disable no-unused-expressions */
const app = require('../../src/index');
const chai = require('chai');
const request = require('supertest');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const { expect } = chai;

describe('API Tests Register without mongo', () => {
  it('/register access', (done) => {
    request(app.app)
      .post('/register')
      .end((err, res) => {
        expect(res.status).not.to.be.null;
        done(err);
      });
  });

  it('/register without password', (done) => {
    request(app.app)
      .post('/register')
      .send({ username: 'New', password: '' })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal('error');
        done(err);
      });
  });

  it('/register with short password', (done) => {
    request(app.app)
      .post('/register')
      .send({ username: 'New', password: 'n' })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal('error');
        expect(res.body.message).to.equal('Password must be at least 8 characters.');
        done(err);
      });
  });

  it('/register without username', (done) => {
    request(app.app)
      .post('/register')
      .send({ username: '', password: 'morethan8' })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal('error');
        expect(res.body.message).to.equal('Username is required.');
        done(err);
      });
  });
});


describe('API Tests Register with mongo', () => {
  beforeEach((done) => {
    app.connectToDatabase();
    done();
  });
  afterEach((done) => {
    app.disconnectFromDatabase();
    done();
  });


  it('/register success', (done) => {
    const data = { username: 'whatwhat', password: 'morethan8' };
    request(app.app)
      .post('/register')
      .send(data)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(200);
          expect(res.body.username).to.equal(data.username);
          expect(res.body.userID).not.to.be.null;
          expect(res.body.kingdomID).not.to.be.null;
          expect(res.body.token).not.to.be.null;
          done();
        }
      });
  });
});
