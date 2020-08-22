var express = require('express');
var router = express.Router();
const { register, login, guildApp } = require('../controllers/authCtrl');

router.post('/login', login);
router.post('/register', register);
router.post('/guildapp', guildApp);

module.exports = router;
