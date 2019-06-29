class User {
    constructor() {
        this.status = 'ok';
        this.token = Math.random().toString(36).substr(2);
    }
}

module.exports = {
    User,
}