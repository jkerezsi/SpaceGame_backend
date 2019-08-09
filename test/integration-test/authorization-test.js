/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
const app = require('../../src/index');
const chai = require('chai');
const { before, after } = require('mocha');
const request = require('supertest');

const { expect } = chai;

describe('API Tests Authorization with mongo', () => {
  before((done) => {
    app.connectToDatabase();
    done();
  });
  after((done) => {
    app.disconnectFromDatabase();
    done();
  });


  const data = { username: 'whatwhat3', password: 'morethan8' };

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

  let lettoken = '';

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
          lettoken = res.body.token;
          done();
        }
      });
  });

  it('/authorization success', (done) => {
    request(app.app)
      .post('/auth')
      .set('token', lettoken)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.body.userId).not.to.be.null;
          expect(res.body.kingdomId).not.to.be.null;
          done();
        }
      });
  });

  it('/authorization no token provided', (done) => {
    request(app.app)
      .post('/auth')
      .set('token', '')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(400);
          expect(res.body).to.equal('No token provided.');
          done();
        }
      });
  });
});
