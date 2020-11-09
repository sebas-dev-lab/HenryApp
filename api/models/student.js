const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
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
  Dni: {
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
    type: Schema.Types.ObjectId,
    ref: "Cohort",
  },
  idModule: {
    type: Schema.Types.ObjectId,
    ref: "Module",
  },
  idGroup: {
    type: Schema.Types.ObjectId,
    ref: "Group",
  },
});
//------Encriptando el password--------
//prettier-ignore
studentSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//------Comparando password----
studentSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
