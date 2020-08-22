const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
  user: String,
  email: String,
  password: String,
});

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member;
