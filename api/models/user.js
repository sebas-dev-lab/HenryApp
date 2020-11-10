const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
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
  cohorte: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Cohort'
  },
  module: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Module'
  },
  group: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Group'
  },
  PP: {
    type: mongoose.Schema.Types.String, 
    ref: 'Pair_programming'
  },
  role: {
    type: String,
    ENUM: ["instructor", "admin", "student"],
    default: "student"
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;
