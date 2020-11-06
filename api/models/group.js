const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  idStudent: [
    {
      type: String,
      required: true,
    },
  ],
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
