const { gql } = require('apollo-server-express');

const mutations = gql`
  type Mutation {
     createUser(input: String!): User!   
  }
`;

module.exports = mutations;