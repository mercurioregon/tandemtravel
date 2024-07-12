const { User, Event, CalendarEvent } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    event: async () => {
      return Event.find({});
    },
    
    CalendarEvent: async () => {
      return CalendarEvent.find({});
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    createEvent: async (parent, args) => {
      const event = await Event.create(args);
      return event;
    },
    createCalendarEvent: async (parent, args) => {
      const calendarEvent = await CalendarEvent.create(args);
      return calendarEvent;
    },
  },
};

module.exports = resolvers;
