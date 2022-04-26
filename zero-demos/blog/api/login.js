// login.js
// This would ideally come from database.
// Don't forget to hash your passwords.
const PASSWORDS = { wby: "qweqwe" };

module.exports = (req, res) => {
  const { username, password } = req.body;
  if (password && PASSWORDS[username] === password) {
    req.login({ id: username }, function(err) {
      if (err) res.sendStatus(403);
      else res.redirect("/user");
    });
  } else {
    res.sendStatus(403);
  }
};