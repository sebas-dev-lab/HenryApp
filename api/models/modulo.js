const mongoose = require("mongoose");

const moduloSchema = new mongoose.Schema({
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
});

const Modulo = mongoose.model("Modulo", moduloSchema);

module.exports = Modulo;
