const mongoose = require('mongoose');
require('env2')('config.env');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', () => { console.log('wrong connection;   !'); });
// eslint-disable-next-line no-console
db.once('open', () => { console.log('mongoose connected successfully!'); });

module.exports = db;
