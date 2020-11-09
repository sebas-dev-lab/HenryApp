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

const Cohort = mongoose.model("Cohort", cohortSchema);

module.exports = Cohort;
