const checkSettingsField = (name) => new Promise((resolve, reject) => {
    if (name === '') {
      reject(new Error('Name is required.'));
    } else {
      resolve();
    }
  });
  
  module.exports = {
    checkSettingsField,
  };
  