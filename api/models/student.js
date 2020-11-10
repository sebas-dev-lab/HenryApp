const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    unique: true,
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
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Cohort'
  },
  idModule: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Module'
  },
  idGroup: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Group'
  },
  PP: {
    type: mongoose.Schema.Types.String, 
    ref: 'Pair_programming'
}
})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
