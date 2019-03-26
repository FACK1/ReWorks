const express = require('express');

const router = express.Router();

const { uploadPhoto } = require('./middlewares/S3_uploadPhoto');
const { login, logout } = require('./controllers/login.js');
const { addItem } = require('./controllers/addItem.js');
const { auth } = require('./middlewares/auth.js');
const { clarifaiAPIs } = require('./controllers/clarifaiAPIs');
const { deleteItem } = require('./controllers/deleteItem.js');

router.post('/add-to-amazon', uploadPhoto, clarifaiAPIs);
router.post('/login', login);
router.get('/logout', logout);
router.post('/add-item', auth, addItem);
router.get('/delete-item/:id', deleteItem);

module.exports = router;
