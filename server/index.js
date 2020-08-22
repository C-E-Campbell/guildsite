require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static(`${__dirname}/../build`));
app.use('/api/v1/auth', authRouter);

mongoose
  .connect(
    'mongodb+srv://ccamp290:rufus0606@cluster0.2rxxc.azure.mongodb.net/<guild>?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('db Connected');
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(8293, () => console.log('Server Running'));
