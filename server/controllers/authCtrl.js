const Member = require('../models/Member');
const Character = require('../models/Character');
const Code = require('../models/InviteCode');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { jwtSecret, JWTExpire } = process.env;
module.exports = {
  guildApp: async function (req, res) {
    const {
      discordID,
      access,
      mic,
      interests,
      crafting,
      membership,
      personality,
      role,
      exp,
      questions,
    } = req.body;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'charles.e.campbell1989@gmail.com', // generated ethereal user
        pass: 'nmcuintsqpotsobr', // generated ethereal password
      },
    });
    await transporter.sendMail({
      from: '"Guild App" <charles.e.campbell1989@gmail.com>', // sender address
      to:
        'charles.e.campbell1989@gmail.com, bnieman741@gmail.com, connor.v.finucan@gmail.com, darktemplar260@gmail.com, magicofgaia@gmail.com', // list of receivers
      subject: '⚔️ New Guild Application! ⚔️', // Subject line

      html: `
      <b>Discord Id:<br> ${discordID}</b>
      <br>
      <br>
      <b>Mic:<br> ${mic}</b>
      <br>
      <br>
      <b>Game Access:<br> ${access}</b>
      <br>
      <br>
      <b>In-Game Interests:<br> ${interests}</b>
      <br>
      <br>
      <b>Activites of Interest:<br> ${crafting}</b>
      <br>
      <br>
      <b>Membership:<br> ${membership}</b>
      <br>
      <br>
      <b>Leadership Role Wanted:<br> ${role}</b>
      <br>
      <br>
      <b>Personality:<br> ${personality}</b>
      <br>
      <br>
      <b>Past Experience: <br> ${exp}</b>
      <br>
      <br>
      <b>Questions for Guild:<br> ${questions}</b>
      `,
    });
    res.json({ success: true }).status(200);
  },
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
  demographic: async function (req, res) {
    const { name, race, mainClass, mainWeapon, artisan } = req.body;
    await Character.create({
      name,
      race,
      class: mainClass,
      weapon: mainWeapon,
      artisan,
    });
    res.status(200).json({ name, race, mainClass, mainWeapon, artisan });
  },
  classData: async function (req, res) {
    await Character.find().then((data) => {
      return res.status(200).send(data);
    });
  },
};
