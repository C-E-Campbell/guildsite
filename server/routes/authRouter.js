var express = require('express');
var router = express.Router();
const { register, login } = require('../controllers/authCtrl');

router.route('/login').post(login);
router.route('/register').post(register);

module.exports = router;
