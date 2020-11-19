const mongoose = require("mongoose");

const cohortSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: false
  },
  graduationDay: {
    type: Date,
    required: false
  }
});

const Cohort = mongoose.model("Cohort", cohortSchema);

module.exports = Cohort;
