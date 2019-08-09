/* eslint-disable no-unused-expressions */
const app = require('../../src/index');
const chai = require('chai');
const { before, after } = require('mocha');
const request = require('supertest');

const { expect } = chai;

describe('API Tests Login with mongo', () => {
  before((done) => {
    app.connectToDatabase();
    done();
  });
  after((done) => {
    app.disconnectFromDatabase();
    done();
  });

  const data = { username: 'whatwhat2', password: 'morethan8' };

  it('/register success', (done) => {
    request(app.app)
      .post('/register')
      .send(data)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(200);
          done();
        }
      });
  });


  it('/login success', (done) => {
    request(app.app)
      .post('/login')
      .send(data)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.body.status).to.equal('ok');
          expect(res.body.token).not.to.be.null;
          done();
        }
      });
  });

  it('/login fields are not filled', (done) => {
    request(app.app)
      .post('/login')
      .send({ username: '', password: '' })
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(400);
          expect(res.body).to.equal('All fields are required.');
          done();
        }
      });
  });

  it('/login username field is not filled', (done) => {
    request(app.app)
      .post('/login')
      .send({ username: '', password: '123456789' })
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(400);
          expect(res.body).to.equal('Username is required.');
          done();
        }
      });
  });

  it('/login password field is not filled', (done) => {
    request(app.app)
      .post('/login')
      .send({ username: 'infinite', password: '' })
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(400);
          expect(res.body).to.equal('Password is required.');
          done();
        }
      });
  });

  it('/login user not found', (done) => {
    request(app.app)
      .post('/login')
      .send({ username: 'infinite', password: '12345678' })
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(401);
          expect(res.body.status).to.equal('error');
          expect(res.body.message).to.equal('Username or password is incorrect.');
          done();
        }
      });
  });
});
