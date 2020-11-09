const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const instructorSchema = new Schema({
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
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  cohorte: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Instructor",
    required: true,
  }
});
//------Encriptando el password--------
//prettier-ignore
instructorSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//------Comparando password----
instructorSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("Instructor", instructorSchema);
