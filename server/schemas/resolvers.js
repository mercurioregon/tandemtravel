const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const { User, Event, CalendarEvent } = require('../models');

const formatDate = (date) => {
  const d = new Date(date);
  const month = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
};


const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'A custom scalar to format date to MM/DD/YYYY',
    parseValue(value) {
      return new Date(value); // value from the client input variables
    },
    serialize(value) {
      return formatDate(value); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
  Query: {
    users: async () => {
      return User.find({});
    },
    events: async () => {
      return Event.find({});
    },
    event: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId });
    },
    
    calendarEvents: async () => {
      return CalendarEvent.find({});
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
     addEvent: async (parent,  args) => {
      console.log("addEvent ",args);
      const event = await Event.create(args);
      return event;
    },
    editEvent: async (parent, args) => {
      console.log("editEvent ",args);
      
      const event = await Event.findOneAndUpdate(
        { _id: args._id },
        { $set: {
          "name" : args.name, 
          "description" : args.description,
          "start" : args.start,
          "end" : args.end,
          "venue" : args.venue,
          "latitude" : args.latitude,
          "longitude" : args.longitude,
        } 
        },
        { runValidators: true, new: true }
      );
      console.log("event ",event);
      
      return event;
   },
    deleteEvent: async (parent, { id }) => {
      try {
        console.log("deleteEvent " + id._id);
        const result = await Event.findByIdAndDelete({ _id: id });
        console.log("result");
        console.log(result);
        return "Event deleted successfully";
      } catch (error) {
        throw new Error("Failed to delete event");
      }
    },
  },
};

module.exports = resolvers;
