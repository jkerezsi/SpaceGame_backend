const checkSettingsField = (name, token) => new Promise((resolve, reject) => {
  if (name === '') {
    reject(new Error('Name is required.'));
  } else if (token === '') {
    reject(new Error('We are not able to define user'));
  } else {
    resolve();
  }
});

module.exports = {
  checkSettingsField,
};

