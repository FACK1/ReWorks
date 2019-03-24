const express = require('express');

const router = express.Router();

const uploadPhoto = require('./controllers/uploadPhoto');

router.post('/add-to-amazon', uploadPhoto);

module.exports = router;
