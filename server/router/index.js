const Router = require('koa-router');
const router = new Router();
const adminRouter = require('./admin');
const webRouter = require('./web');

router.use('/api/admin', adminRouter.routes());
router.use('/api/web', webRouter.routes());

module.exports = router;
