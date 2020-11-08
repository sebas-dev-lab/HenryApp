const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  // id: {
  // 	type: Number,
  // 	required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  DNI: {
    type: Number,
    required: true,
  },
  isPM: {
    type: Boolean,
    required: true,
    default: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  idCohorte: {
    type: Number,
  },
  idModule: {
    type: String,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
