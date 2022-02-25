const express = require('express');
const cors = require('cors');

const app = express()
// 配置跨域处理中间件，允许客户端跨域请求
app.use(cors());
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})




