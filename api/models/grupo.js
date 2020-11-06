const mongoose = require("mongoose");

const grupoSchema = new mongoose.Schema({
  idStudent: {
    type: String,
    required: true,
  },
});

const Grupo = mongoose.model("Grupo", grupoSchema);

module.exports = Grupo;
