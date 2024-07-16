const { Schema, model } = require('mongoose');

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
        default: Date.now,
    },
    end: {
        type: Date,
        required: true,
        default: Date.now,
    },
    
    owner: [ {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },],
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
