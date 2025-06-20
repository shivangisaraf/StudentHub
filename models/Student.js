const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  course: String
});

module.exports = mongoose.model('Student', studentSchema);
