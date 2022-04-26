// time.js
const moment = require("moment")

// 相当于设计了一个请求的路由处理方法
// 而路由就是基于文件系统的路由
module.exports = (req, res) => {
  var time = moment().format('LT');   // 11:51 AM
  res.send({time: time })
}