const mongoose = require("mongoose");

const pair_programmingSchema = new mongoose.Schema({
  idGrupo: {
    type: String,
    required: true,
  },

  idStudent: {
    type: String,
    required: true,
  },

  idPm: {
    type: String,
    required: true,
  },
});

const Pair_programming = mongoose.model(
  "Pair_programming",
  pair_programmingSchema
);

module.exports = Pair_programming;
