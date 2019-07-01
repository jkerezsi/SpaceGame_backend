const jwt = require('jsonwebtoken');

class User {
    constructor(userId) {
        this.status = 'ok';
        this.token = jwt.sign(userId, 'vaporwave')
    }
}

module.exports = {
    User,
}