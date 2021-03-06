const Application = require('koa');
const app = new Application();
const Router = require('koa-router');
const router = new Router();
const ip = require('ip');
const debug = require('debug')('dev:router');
router.get('/getRemoteIp', async(ctx) => {
    ctx.body = {
        ip: ip.address()
    }
})
//监听3000端口
app.listen(3000, '0.0.0.0', () => {
    debug('Server running at 3000 ');
});
app
    .use(router.routes())
    .use(router.allowedMethods);