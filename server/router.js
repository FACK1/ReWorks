const express = require('express');

const router = express.Router();

const uploadPhoto = require('./controllers/uploadPhoto');
const { login, logout } = require('./controllers/login.js');

router.post('/add-to-amazon', uploadPhoto);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
