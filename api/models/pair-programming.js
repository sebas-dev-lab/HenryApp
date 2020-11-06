const mongoose = require("mongoose");

const pair_programmingSchema = new mongoose.Schema({
  idStudent: {
    type: String,
    required: true,
  },

  idInstructor: {
    type: String,
    required: true,
  },
});

const Pair_programming = mongoose.model(
  "Pair_programming",
  pair_programmingSchema
);

module.exports = Pair_programming;
