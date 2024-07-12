const { Schema, model } = require('mongoose');


const eventSchema = new Schema(
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
    venue: {
        type: String,
    },
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
    owner: [ {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },],
    attendees:[ {
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




const Event = model('Event', eventSchema);

module.exports = Event;
