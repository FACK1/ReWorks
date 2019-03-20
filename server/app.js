const express = require('express');
const path = require('path');
require('env2')('config.env');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
module.exports = app;
