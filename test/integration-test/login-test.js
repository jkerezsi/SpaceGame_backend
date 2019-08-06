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
