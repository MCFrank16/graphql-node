const { gql } = require('apollo-server-express');

const queries = gql`
  type Query {
      getUser(id: ID!): User!,
      getUsers: [User!]
  }
`;

module.exports = queries;