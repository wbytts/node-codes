const moment = require("moment");

module.exports = (req, res) => {
  var time = moment().format("YYYY-MM-DD HH:mm:ss:SSS"); 
  res.send({ time: time });
};