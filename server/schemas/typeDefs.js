
const typeDefs = `
scalar Date

type User {
    _id: ID
    username: String
    email: String
    password: String
    signupToken: String
    invited: Boolean
    accepted: Boolean
    declined: Boolean
    createdAt: String

  }

  type Event {
    _id: ID
    name: String
    description: String
    start: Date
    end: Date
    venue: String
    latitude: Float
    longitude: Float
    owner: [User]
    attendees: [User]
    createdAt: String
  }
 
  type CalendarEvent {
    _id: ID
    name: String
    description: String
    start: Date
    end: Date
    owner: [User]
    event: [Event]
    createdAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    events: [Event]
    event(eventId: ID!): Event
    calendarEvents: [CalendarEvent]
  }

  type Mutation {
    
    addEvent(
      name: String,
      desrciption: String,
      start: String,
      end: String,
      venue: String,
      latitude: Float,
      longitude: Float
      ): Event

    editEvent(
      id: ID!,
      name: String,
      desrciption: String,
      start: String,
      end: String,
      venue: String,
      latitude: Float,
      longitude: Float
      ): Event

    deleteEvent(id: ID!): String
    
   `;

module.exports = typeDefs;
