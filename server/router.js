const express = require('express');

const router = express.Router();

const uploadPhoto = require('./controllers/uploadPhoto');
const { login, logout } = require('./controllers/login.js');
const { addItem } = require('./controllers/addItem.js');
const { auth } = require('./middlewares/auth.js');

router.post('/add-to-amazon', uploadPhoto);
router.post('/login', login);
router.get('/logout', logout);
router.post('/add-item', auth, addItem);

module.exports = router;
