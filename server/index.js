require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const app = express();
const nodemailer = require('nodemailer');
const Character = require('./models/character');
const Member = require('./models/newMember');
const Code = require('./models/code');
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static(`${__dirname}/../build`));
// mongoose
//   .connect(
//     'mongodb+srv://ccamp290:rufus0606@cluster0.2rxxc.azure.mongodb.net/<guild>?retryWrites=true&w=majority',
//     {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => {
//     console.log('db Connected');
//   });

app.post('/api/v1/register', async function (req, res) {
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
});
app.post('/api/v1/guildapp', async function (req, res) {
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
});
const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.listen(8293, () => console.log('Server Running'));
