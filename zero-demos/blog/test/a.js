module.exports = function(req, res) {
    res.send("Hello </br>" + JSON.stringify(req.query));
};