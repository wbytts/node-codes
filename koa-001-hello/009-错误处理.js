/*
默认情况下，将所有错误输出到 stderr，除非 app.silent 为 true。 当 err.status 是 404 或 err.expose 是 true 时默认错误处理程序也不会输出错误。 
要执行自定义错误处理逻辑，如集中式日志记录，您可以添加一个 “error” 事件侦听器：
app.on('error', err => {
  log.error('server error', err)
});

如果 req/res 期间出现错误，并且 _无法_ 响应客户端，Context实例仍然被传递：
app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});

当发生错误 _并且_ 仍然可以响应客户端时，也没有数据被写入 socket 中，
Koa 将用一个 500 “内部服务器错误” 进行适当的响应。
在任一情况下，为了记录目的，都会发出应用级 “错误”。
*/