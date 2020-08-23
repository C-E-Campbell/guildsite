const mongoose = require('mongoose');

const CharacterSchema = mongoose.Schema({
  name: String,
  race: String,
  class: String,
  weapon: String,
  photo: String,
});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;
