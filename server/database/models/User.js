
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: String,
  password: { type: String, required: false },
});

module.exports = mongoose.model('User', UserSchema);
