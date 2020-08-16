require('dotenv').config({ path: '../.env' });

const express = require('express');
const morgan = require('morgan');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());
app.use(morgan('tiny'));

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
    to: 'charles.e.campbell1989@gmail.com', // list of receivers
    subject: '⚔️ New Guild Application! ⚔️', // Subject line

    html: `
    <b>Discord Id: ${discordID}</b>
    <br>
    <br>
    <b>Mic?: ${mic}</b>
    <br>
    <br>
    <b>Game Access: ${access}</b>
    <br>
    <br>
    <b>In-Game Interests: ${interests}</b>
    <br>
    <br>
    <b>Activites of Interest:<br> ${crafting}</b>
    <br>
    <br>
    <b>Membership: ${membership}</b>
    <br>
    <br>
    <b>Role: ${role}</b>
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

app.listen(8293, () => console.log('Server Running'));
