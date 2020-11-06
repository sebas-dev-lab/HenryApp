const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  idStudent: {
    type: String,
    required: true,
  },

  idCohorte: {
    type: Number,
    required: true,
  },
  checkpoint: {
    type: String,
    required: true,
  },

  means: {
    type: String,
    required: true,
  },
});

const Module = mongoose.model("Module", moduleSchema);

module.exports = Module;
