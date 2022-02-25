var express = require('express');
const cors = require('cors');
const moment = require('moment');
// const rdb = require(`${__dirname}/utils/redis.js`);
const ldb = require('./utils/lowdb-util');

ldb.defaults({users: [], urls: []}).write();

ldb.get('users').splice(1, Infinity).write();

var app = express();
var port = 8181;

// 设置模板文件保存的路径，默认就是 views
app.set('views', `${__dirname}/views`);
// 设置使用的模板引擎为EJS
app.set('view engine', 'ejs');
// 视图相关配置
app.set('view options', {});
/*
let ejsOptions = {delimiter: '?'};
app.engine('ejs', (path, data, cb) => {
  ejs.renderFile(path, data, ejsOptions, cb);
});
*/


// 设置允许跨域，使用 cors 中间件
app.use(cors());
// express 内置中间件。配置静态资源
// app.use(express.static('static'));
// 还可以配置前缀，虚拟目录
app.use('/static', express.static('static'));
// app.use('/static', express.static(path.join(__dirname, 'public')));


// 应用级中间件（不关心请求路径，每个请求都会匹配到）
app.use((req, res, next) => {
    let time = moment();
    let timeStr = time.format('YYY                                                                                                                                                                                                                                                                                                                                                                          Y-MM-DD HH:mm:ss:SSS');
    console.log(`接收到了请求：\t\t#${timeStr}\t#\t${req.url}`);
    next(); // 写了next() 才会继续匹配（类似于Filter过滤器？）
});

// 加载路由
app.use('/', require('./router/index.js'));
app.use('/test', require('./router/test.js'));
app.use('/zczy', require('./router/zczy.js'));
app.use('/demo/ejs', require('./router/demo/ejs-demo.js'));


// 没有匹配到路由时
app.use((req, res, next) => {
    let time = moment();
    let timeStr = time.format('YYYY-MM-DD HH:mm:ss:SSS');
    res.send('404 - 未找到');
});

// 错误处理中间件
// 传递的函数的参数，必须是: 错误, 请求, 响应, next
// 才会被当成错误处理中间件
// 一般来说非强制性的错误处理一般被定义在最后
app.use(function (err, req, res, next) {});

app.listen(port, function() {
    console.log(`服务启动成功, 端口:${port}`);
});
