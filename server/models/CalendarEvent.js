const { Schema, model } = require('mongoose');

//const userSchema = require('./User');
//const eventSchema = require('./Event');

const calendarEventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    desciption: {
        type: String,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const CalendarEvent = model('CalendarEvent', calendarEventSchema);

module.exports = CalendarEvent;
