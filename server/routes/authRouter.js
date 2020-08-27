var express = require('express');
var router = express.Router();
const { register, login, guildApp } = require('../controllers/authCtrl');

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/guildapp').post(guildApp);

module.exports = router;
