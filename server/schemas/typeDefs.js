const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    signupToken: String
    invited: Boolean
    accepted: Boolean
    declined: Boolean
    createdAt: Date

  }

  type Event {
    _id: ID!
    name: String!
    description: String
    start: Date
    end: Date
    venue: String
    latitude: Number
    longitude: Number
    owner: [User]
    invites: [User]
    createdAt: Date
  }
 
  type CalendarEvent {
    _id: ID!
    name: String!
    description: String
    start: Date
    end: Date
    owner: [User]
    event: [Event]
    createdAt: Date
  }

  type Query {
    user: [User]
    event: [Event]
    calendarEvent: [CalendarEvent]
  }

  
`;

module.exports = typeDefs;
