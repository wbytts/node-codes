// 引入安装的express库
const express = require('express')
// 创建 express 应用对象
const app = express()

// 静态文件配置
app.use('/static', express.static('static'))

// node文件操作 fs
const fs = require('fs')

// 定义一个路由，当访问 /  的时候，执行对应的函数
// req：请求对象
// res：响应对象
app.get('/', (请求对象, 响应对象) => {
    // 发送 Hello World 到响应对象中
    响应对象.send('Hello World!')
})

app.get('/ab*cd', (req, res) => {
    res.send('ab?cd')
})

// http://localhost:3000/params/123/456/789
app.get('/params/:x/:y/:z', (req, res) => {
    // {"x":"123","y":"456","z":"789"}
    res.send(req.params)
})

app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book')
    })
    .post(function (req, res) {
        res.send('Add a book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    })

// app.get('/jquery', (req, res) => {
//     let str = fs.readFileSync('./jquery.js', 'utf8')
//     res.send(str)
// })

/*
GET
POST
PUT
DELETE
HEAD
OPTION
......
*/

// 启动后端服务，监听 3000 端口，启动完成之后执行对应的回调函数
app.listen(3000, () => {
    console.log(`${new Date()}`)
})


