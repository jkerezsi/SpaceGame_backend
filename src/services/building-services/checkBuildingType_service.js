const checkType = (type, token) => new Promise((resolve, reject) => {
  if (type === undefined || type === '') {
    reject(new Error('Type is required.'));
  } else if (token === undefined || token === '') {
    reject(new Error('Token is required.'));
  } else if (type !== 'farm' && type !== 'mine') {
    reject(new Error('Wrong type.'));
  } else {
    resolve();
  }
});

module.exports = { checkType };
