const { Login } = require('../models/login');
const { User } = require('../models/user');

const searchUsernameAndPassword = (username, password) => new Promise((resolve, reject) => {
    Login.find({
        "username": username,
        "password": password
    },
    (err, loginFound) => {
        if (loginFound <= 0) {
            reject (new Error('Username or password is incorrect.'));
        } else {
            resolve (new User());
        }
    })
});

module.exports = { 
    searchUsernameAndPassword,
};