const test = require('tape');
const { checkCountryCodePresence } = require('../../../src/services/kingdom-service/country-code-service');

test('check token errors', (t) => {
  checkCountryCodePresence({})
    .catch((error) => {
      t.equals(error.message, ('Country code is required.'));
    });


  const emptyToken = {
    body: {
      country_code: '',
    },
  };
  checkCountryCodePresence(emptyToken)
    .catch((error) => {
      t.equals(error.message, ('Country code is required.'));
    });

  t.end();
});


test('check if token exists', (t) => {
  const emptyToken = {
    body: {
      country_code: '123',
    },
  };
  checkCountryCodePresence(emptyToken)
    .then((i) => {
      t.equals(i, undefined);
    });

  t.end();
});
