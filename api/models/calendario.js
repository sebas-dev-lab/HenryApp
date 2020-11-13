const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection)

const calendarSchema = new mongoose.Schema({
    _id: { 
        type: Number, 
        default: 0, 
        unique: true 
    },
	title: { 
    type: String, 
    required: true 
  },
  start: {
    type: String, 
    required: true
  },
  end: {
    type: String,
    required:true
  },
  allDay: {
      type: Boolean,
      required: true
  }
});

calendarSchema.plugin(autoIncrement.plugin, {
    model: "Calendar",
    field: "_id",
    startAt: 1,
    incrementBy: 1,
  });

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Calendar;