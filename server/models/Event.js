const { Schema, model } = require('mongoose');

const userSchema = require('./User');

const eventSchema = new Schema(
  {
    eventId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
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
