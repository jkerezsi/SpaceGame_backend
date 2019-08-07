/* eslint-disable no-unused-expressions */
const app = require('../../src/index');
const chai = require('chai');
const request = require('supertest');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const { expect } = chai;

describe('API Tests', () => {
  it('/register success', (done) => {
    request(app.app)
      .post('/register')
      .send({ username: 'New', password: 'morethan8' })
      .end((err, res) => {
        console.log(res);
        
        expect(res.status).to.equal(200);
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

  // it('/login happenes', (done) => {
  //   request(app.app)
  //     .post('/login')
  //     .set('Content-type', 'application/json')
  //     .send({ username: 'muhahahah', password: '' })
  //     .end((err, res) => {
  //       // console.log(res.body)
  //       expect(res.status).to.equal(400);
  //       expect(res.text).to.equal('"Password is required."');
  //       expect(res.body).to.equal('Password is required.');
  //       done(err);
  //     });
  // });
});

// const app = require('./index');
// const request = require('supertest');
// const test = require('tape');

// test('POST /login', (t) => {
//   const data = {
//     username: 'jani',
//     password: '12345678',
//   };
//   request(app.app)
//     .post('/login')
//     .send(data)
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .end((err, res) => {
//       const result = {
//         status: 'ok',
//         token: 'eyJhbGciOiJIUzI1NiJ9.NWQzZmY4MjgwYzk4M2I0MWY0NTM4YWY0.J-jTPHWw5mS05R_xjaz7rq35xmbdzks_qwoTUtmsnKE',
//       };

//       t.error(err, 'err?');
//       t.same(res.status, result.status, 'what');
//       app.close();
//       t.end();
//     });
// });


