const mongoose = require('mongoose');

const CodeSchema = mongoose.Schema({
  main: Boolean,
  code: Number,
});

const Code = mongoose.model('Code', CodeSchema);

module.exports = Code;
