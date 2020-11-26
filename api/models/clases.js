const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clasesSchema = new mongoose.Schema({
    link: {
        type: String,
        unique: true,
    },
});

const Clases = mongoose.model("Clases", clasesSchema);

module.exports = Clases;