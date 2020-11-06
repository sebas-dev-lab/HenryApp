const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  idStudent: {
    type: String,
    required: true,
  },

  comment: {
    type: String,
    required: true,
  },

  qualification: {
    type: Number,
    required: true,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
