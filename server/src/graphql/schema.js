const { buildSchema } = require("graphql")

module.exports = buildSchema(`

  type User {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    ip_address: String!
  }


  input UserInput {
    first_name: String!
    last_name: String!
    email: String!
    ip_address: String!
  }

  type Query {
    users:[User!]
  }

  type Mutation {
    createUser(user:UserInput): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)