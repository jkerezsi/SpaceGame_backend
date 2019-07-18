const test = require('tape');
const { checkTokenPresence } = require('../../../src/services/authorization-services/authorization-services');

test('check token errors', (t) => {
  const emptyHeader = { token: '' };
  checkTokenPresence(emptyHeader)
    .catch((error) => {
      t.equals(error.message, ('No token provided.'));
    });


  const undefinedToken = { token: undefined };
  checkTokenPresence(undefinedToken)
    .catch((error) => {
      t.equals(error.message, ('No token provided.'));
    });

  t.end();
});


test('check if token exists', (t) => {
  const headers = { token: 'eyJhbGciOiJIUzI1NiJ9.NWQyZjE2OTRhOWY2OGIwOTdkMmU3MDE3.FFEbb8s48q5i2c70tSWMS6M70xvw_hZiYcDZZdtbFik' };
  checkTokenPresence(headers)
    .then((i) => {
      t.equals(i, undefined);
    });

  t.end();
});
