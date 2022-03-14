const Router = require('koa-router');
const web = new Router();
const land = require('./land');

web.use('/land', land.routes());

module.exports = web;
