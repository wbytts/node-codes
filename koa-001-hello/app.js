const Koa = require('koa');
const dotenv = require('dotenv');
dotenv.config();
const KoaRouter = require('koa-router');
const router = new KoaRouter();
const app = new Koa();
require('reflect-metadata');

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

router.get('/', (ctx, next) => {
  // ......
  ctx.body = 'Hello World';
});

app
  .use(router.routes()) // 注册路由中间件
  .use(router.allowedMethods()); // 注册路由方法
app.listen(process.env.APP_PORT, () => {
  console.log(`服务器启动~ http://${process.env.APP_HOST}:${process.env.APP_PORT}`);
});
