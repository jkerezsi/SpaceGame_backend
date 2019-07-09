/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */

function isEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) { return false; }
  }
  return true;
}

const checkTokenPresence = request => new Promise((resolve, reject) => {
  if (isEmpty(request)) {
    reject(new Error('No token provided.'));
  } else {
    resolve();
  }
});

module.exports = { checkTokenPresence };
