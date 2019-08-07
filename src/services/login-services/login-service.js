const checkFormFields = (username, password) => new Promise((resolve, reject) => {
  if (username === undefined || password === undefined) {
    reject(new Error('All fields are required.'));
  } else if (username === '' && password === '') {
    reject(new Error('All fields are required.'));
  } else if (username === '') {
    reject(new Error('Username is required.'));
  } else if (password === '') {
    reject(new Error('Password is required.'));
  } else {
    resolve();
  }
});

module.exports = {
  checkFormFields,
};
