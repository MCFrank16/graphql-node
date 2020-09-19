const { gql } = require('apollo-server-express');

const schema = gql`
   type User {
      id: ID!,
      firstname: String!,
      lastname: String!
   }

   type Message {
      messageID: ID!,
      text: String!
   }
`;

module.exports = schema;