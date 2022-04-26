/*
导出一个函数。此函数接受Request和Response对象。
Zero在内部使用Express.js，因此这些对象与Express相同。
*/
module.exports = function(req, res) {
    res.send("Hello </br>" + JSON.stringify(req.query));
};