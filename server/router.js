const express = require('express');

const router = express.Router();

const { uploadPhoto } = require('./middlewares/S3_uploadPhoto');
const { login, logout } = require('./controllers/login.js');
const { signUp } = require('./controllers/signup.js');
const { addItem } = require('./controllers/addItem.js');
const { auth } = require('./middlewares/auth.js');
const { clarifaiAPIs } = require('./controllers/clarifaiAPIs');
const { deleteItem } = require('./controllers/deleteItem.js');
const { getItems } = require('./controllers/getItems.js');
const { addFeedback } = require('./controllers/addFeedback.js');

router.post('/add-to-amazon', uploadPhoto, clarifaiAPIs);
router.post('/login', login);
router.get('/logout', logout);
router.post('/signup', signUp);

router.post('/add-item', auth, addItem);
router.get('/delete-item/:id', auth, deleteItem);
router.get('/items', auth, getItems);
router.put('/add-feedback', auth, addFeedback);

module.exports = router;
