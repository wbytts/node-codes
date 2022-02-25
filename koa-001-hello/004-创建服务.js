
/*
语法糖：
    const Koa = require('koa');
    const app = new Koa();
    app.listen(3000);

Koa 应用程序不是 HTTP 服务器的1对1展现。
可以将一个或多个 Koa 应用程序安装在一起以形成具有单个HTTP服务器的更大应用程序
创建并返回 HTTP 服务器，将给定的参数传递给 Server#listen()
*/

const http = require('http');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);

/*
创建多个服务：
const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
*/