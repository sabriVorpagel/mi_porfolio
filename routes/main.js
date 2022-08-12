const express = require('express');
const router = express.Router();

const{home,about} = require('../controllers/mainController')

router
    .get('/',home)
    .get('/about',about)

module.express= router;