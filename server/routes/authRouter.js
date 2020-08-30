var express = require('express');
var router = express.Router();
const {
  register,
  login,
  guildApp,
  demographic,
  classData,
} = require('../controllers/authCtrl');

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/guildapp').post(guildApp);
router.route('/demographic').post(demographic).get(classData);

module.exports = router;
