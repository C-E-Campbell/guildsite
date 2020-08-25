const Member = require('../models/Member');
const Code = require('../models/InviteCode');
const jwt = require('jsonwebtoken');
const { jwtSecret, JWTExpire } = process.env;
module.exports = {
  register: async function (req, res) {
    const { code, email, user, password, passwordConfirm } = req.body;

    const myCode = await Code.find({ main: true }).exec();

    try {
      if (Number(code) === myCode[0].code) {
        const newMember = await Member.create({
          user,
          email,
          password,
          passwordConfirm,
        });

        const token = jwt.sign({ id: newMember._id }, jwtSecret, {
          expiresIn: JWTExpire,
        });

        return res.status(201).json({
          status: 'success',
          token,
          data: { user: { name: newMember.user, email: newMember.email } },
        });
      } else {
        return res.status(500).json({ status: 'bad code' });
      }
    } catch (err) {
      console.log(err);
    }
  },
  login: async function (req, res) {
    const { user, password } = req.body;
    Member.find({ user }).then((data) => {
      if (data.length === 0) {
        return res
          .json({ status: 'failed', message: 'Invalid User' })
          .status(500);
      }
      if (data[0] && data[0].password === password) {
        console.log(data);
        const token = jwt.sign({ id: data._id }, jwtSecret, {
          expiresIn: JWTExpire,
        });
        return res
          .json({
            status: 'success',
            token,
            data: { user: { name: data[0].user, email: data[0].email } },
          })
          .status(200);
      } else {
        return res
          .json({ status: 'failed', message: 'User/Pass Invalid' })
          .status(401);
      }
    });
  },
  protect: async function (req, res, next) {
    //get and check is token is there
    //check if it is valid
    //check if user still exists
    //check if user changed password after jwt was issued
    next();
  },
};
