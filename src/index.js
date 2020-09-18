import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuid} from 'uuid';
import { ApolloServer, gql } from 'apollo-server-express';

import userClass from './user';

const app = express();
app.use(cors());

let users = {};

let messages = [];


const schema = gql`
   input UserInput {
     firstname: String,
     lastname: String,
   }

   type User {
     userId: ID,
     firstname: String,
     lastname: String,
   }

   type Query {
     getUser(id: ID!): User!,
     getUsers: [User!]
   }

   type Mutation {
     createUser(input: UserInput): User!
   }

   
`;
const resolvers = {
  Query: {
    getUsers: () => {
      return users;
    },
  },

  Mutation: {

    createUser: (input) => {
      const id = uuid();
      const newUser = new userClass().addUser(id, input);
      
      users[id] = newUser

      return newUser;
    }
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    me: users[1]
  }
});

server.applyMiddleware({ app, path: '/graphql'});

app.listen({ port: 8000}, () => {
  console.log('Apollo server on http://localhost:8000/graphql');
});
