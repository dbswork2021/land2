const Router = require('koa-router');
const land = new Router();
const schema = require('../../model/admin/land');

land.get('/', async (ctx) => {
  const model = await schema.findOne();
  ctx.body = model;
});
module.exports = land;
