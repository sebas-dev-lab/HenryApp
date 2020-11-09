const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  cohorte: {
    type: Schema.Types.ObjectId,
    ref: "Cohort"
  },
  pms: [{
		type: Schema.Types.ObjectId,
		ref: "Student",
  }],
  students: [{
		type: Schema.Types.ObjectId,
		ref: "Student",
  }]
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
