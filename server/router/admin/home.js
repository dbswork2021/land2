const Router = require('koa-router');
const home = new Router();
const schema = require('../../model/admin/land');

home.get('/', async (ctx) => {
  const model = await schema.findOne();
  ctx.body = model;
});

home.post('/', async (ctx) => {
  const { _id, url } = ctx.request.body;
  let data = {};
  if (_id) {
    data = await schema.findByIdAndUpdate(_id, { url }, { new: true });
  } else {
    data = await schema.create({ url });
  }
  ctx.body = {
    data,
    message: '保存成功!',
  };
});

module.exports = home;
