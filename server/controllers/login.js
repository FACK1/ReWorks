const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../database/models/User');

const { SECRET } = process.env;

exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.json({ error: 'user not found' });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.json({ error: 'something went wrong!' });
        }
        if (result) {
          const userAirtableId = user.userairtableid;
          const token = jwt.sign({ username, userAirtableId }, SECRET);
          return res
            .cookie('logged_in', token, { maxAge: 999999999 })
            .json({ success: 'true', token });
        }
        return res.json({ error: 'password does not match' });
      });
    })
    .catch(() => res.status(500).json({ error: 'error in server' }));
};

exports.logout = (req, res) => {
  res.clearCookie('logged_in');
  res.json({ logout: true });
  res.end();
};
