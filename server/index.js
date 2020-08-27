require('dotenv').config({ path: './.env' });
const { connection, port } = process.env;
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');
const { guildApp } = require('./controllers/applyCTRL');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static(`${__dirname}/../build`));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/apply', guildApp);

mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('db Connected');
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => console.log('Server Running'));
