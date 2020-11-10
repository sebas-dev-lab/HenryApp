const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    //required: true,
  },
  lastName: {
    type: String,
    //required: true,
  },
  dni: {
    type: Number,
    //required: true,
    unique: true,
  },
  isPM: {
    type: Boolean,
    required: true,
    default: false,
  },
  email: {
    type: String,
    //required: true,
    unique: true,
  },
  password: {
    type: String,
    //required: true,
  },
  cohorte: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cohort",
  },
  module: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Module",
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
  },
  PP: {
    type: mongoose.Schema.Types.String,
    ref: "Pair_programming",
  },
  role: {
    type: String,
    ENUM: ["instructor", "admin", "student"],
    default: "student",
  },
  googleId: {
    type: String,
  },
});

userSchema.plugin(require("mongoose-autopopulate"));

//------Encriptando el password--------
//prettier-ignore
userSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//------Comparando password----
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.plugin(findOrCreate);
const User = mongoose.model("User", userSchema);

module.exports = User;
