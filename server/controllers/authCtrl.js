const nodemailer = require('nodemailer');
const Member = require('../models/newMember');
const Code = require('../models/code');

module.exports = {
  register: async function (req, res) {
    const { code, email, user, password } = req.body;

    const codee = Code.find({ main: true }).then((data) => {
      if (Number(code) === data[0].code) {
        const saveMember = new Member({
          user,
          email,
          password,
        });
        saveMember.save();
        res.send('all good');
      } else {
        res.send('no good');
      }
    });
  },
  login: async function (req, res) {
    const { user, password } = req.body;
    const hasMember = Member.find({ user }).then((data) => {
      if (data[0] && data[0].password === password) {
        res.json({ success: true }).status(200);
      } else {
        res.json({ success: false }).status(500);
      }
    });
  },
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
      <b>Role Wanted:<br> ${role}</b>
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
    res.json(discordID);
  },
};
