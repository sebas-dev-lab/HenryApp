const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moduleSchema = new mongoose.Schema({
  students: [{
    type: Schema.Types.ObjectId,
    ref: "Student",
  }],

  cohort: {
    type: Schema.Types.ObjectId,
    ref: "Cohort",
  },

  checkpoint: {
    type: String,
    required: true,
  },

  means: [{
    type: String,
    required: true,
  }],
});

const Module = mongoose.model("Module", moduleSchema);

module.exports = Module;
