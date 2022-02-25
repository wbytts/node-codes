const Koa = require('koa');
const app = new Koa();

// 日志
app.use(async (ctx, next) => {
  await next();
  // 获取响应时间
  const rt = ctx.response.get('X-Response-Time');
  console.log(`请求方式: ${ctx.method}, 请求地址: ${ctx.url}, 处理耗时: ${rt}`);
});


app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  // 计算请求处理时间
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// 响应
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);