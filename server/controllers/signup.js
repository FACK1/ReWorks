const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../database/models/User');

const { SECRET } = process.env;


exports.signUp = (req, res) => {
  const { username, password, confirmPassword } = req.body;
  console.log(username, password, confirmPassword);
  User.findOne({ username })
    .then((user) => {
      if (user) {
        return res.json({ error: 'User exist , please use another one' });
      }
      if (password === confirmPassword) {
        bcrypt.hash(password, 10)
          .then(hashedPassword => new User({
            username,
            password: hashedPassword,
          })).then((addUser) => {
            addUser.save((err, result) => {
              if (err) return res.json({ error: err });
              res.json({ result, message: 'added to database' });
              // res.redirect('/login');
            });
          }).catch((err) => { res.json({ error: err }); });
      } else {
        return res.json({ error: 'the password and confirm password not match' });
      }
    }).catch(err => res.json({ error: err }));
};
