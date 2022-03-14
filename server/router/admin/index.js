const Router = require('koa-router');
const admin = new Router();
const register = require('./register');
const login = require('./login');
const user = require('./user');
const home = require('./home');

const auth = require('../../middleware/auth');

admin.use('/register', register.routes());
admin.use('/login', login.routes());
admin.use('/user', auth, user.routes());
admin.use('/home', auth, home.routes());

module.exports = admin;
