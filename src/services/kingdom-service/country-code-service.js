/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */

const isEmpty = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) { return false; }
  }
  return true;
};

const checkCountryCodePresence = request => new Promise((resolve, reject) => {
  if (isEmpty(request.body) || !request.body.country_code) {
    reject(new Error('Country code is required.'));
  } else {
    resolve();
  }
});

module.exports = { checkCountryCodePresence };
