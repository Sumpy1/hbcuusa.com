const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
