/* eslint-disable no-unused-expressions */
const app = require('../../src/index');
const chai = require('chai');
const { before, after } = require('mocha');
const request = require('supertest');

const { expect } = chai;

describe('API Tests Resource with mongo', () => {
  before((done) => {
    app.connectToDatabase();
    done();
  });
  after((done) => {
    app.disconnectFromDatabase();
    done();
  });


  const data = { username: 'whatwhat4', password: 'morethan8' };

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

  it('/kingdom/resource success', (done) => {
    request(app.app)
      .get('/kingdom/resource')
      .set('token', lettoken)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(200);
          expect(res.body.location).not.to.be.null;
          expect(res.body.resources).not.to.be.null;
          expect(res.body.buildings).not.to.be.null;
          expect(res.body.troops).not.to.be.null;
          done();
        }
      });
  });

  it('/kingdom/resource no token provided', (done) => {
    request(app.app)
      .get('/kingdom/resource')
      .set('token', '')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(400);
          expect(res.body).to.equal('No token provided');
          done();
        }
      });
  });
});
