const typeDefs = `
  type User {
    _id: ID!
    username: String!
  }

  type Event {
    _id: ID!
    name: String
    description: String
  }
 
  type Query {
    user: [User]
    event: [Event]
  }

  
`;

module.exports = typeDefs;
