const { User, Event } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    event: async () => {
      return Event.find({});
    },
  },
  
};

module.exports = resolvers;
