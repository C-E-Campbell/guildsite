const mongoose = require('mongoose');
var validator = require('validator');
const MemberSchema = new mongoose.Schema({
  user: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'Please use the name the guild knows you by.'],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'Please enter your email.'],
    validate: [validator.isEmail, 'Please provide a valid email.'],
  },
  password: { type: String, required: [true, 'Please provide a password.'] },
  admin: { type: String, required: true, default: 'standard' },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm password'],
  },
});

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member;
