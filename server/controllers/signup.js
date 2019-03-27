const bcrypt = require('bcryptjs');
const Airtable = require('airtable');
const jwt = require('jsonwebtoken');

const { Airtable_API_KEY } = process.env;
const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');

const User = require('../database/models/User');


exports.signUp = (req, res) => {
  const { username, password, confirmPassword } = req.body;
  User.findOne({ username })
    .then((user) => {
      if (user) {
        return res.json({ error: 'User exist , please use another one' });
      }
      if (password === confirmPassword) {
        base('Users').create({
          Name: username,
        }, (err, record) => {
          if (err) {
            return res.json({ error: err });
          }

          bcrypt.hash(password, 10)
            .then(hashedPassword => new User({
              username,
              password: hashedPassword,
              userairtableid: record.getId(),
            })).then((addUser) => {
              addUser.save((err2, result) => {
                if (err) return res.json({ error: err2 });
                return res.json({ result, message: 'added to database & airtable' });
              // res.redirect('/login');
              });
            }).catch((err3) => { res.json({ error: err3 }); });
        });
      } else {
        return res.json({ error: 'the password and confirm password not match' });
      }
    }).catch(err => res.json({ error: err }));
};
