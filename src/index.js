import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import typeDefs from './graphql/typedefs/index';
import resolvers from './graphql/resolvers/index';

// import userDB from './database/userDB';

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: {
  //   me: initUserDB.collection[0]
  // }
});

server.applyMiddleware({ app, path: '/graphql'});

app.listen({ port: 8000}, () => {
  console.log('Apollo server on http://localhost:8000/graphql');
});
