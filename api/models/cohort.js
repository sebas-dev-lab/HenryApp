const mongoose = require("mongoose");

const cohortSchema = new mongoose.Schema({
	name: { 
    type: String, 
    required: true 
  },
  startDate: {
    type: Date, 
    required: true
  },
  graduationDay: {
    type: Date,
    required:true
  }
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
