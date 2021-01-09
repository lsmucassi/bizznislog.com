const consola = require('consola');
const express = require('express');
const { ApolloServer, PubSub } = require('apollo-server-express');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const pubsub = new PubSub();

const { DB, IN_PROD, APP_PORT } = require('./config')
const PORT = process.env.port || APP_PORT;



const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: IN_PROD ? false : {
    settings: {
        "request.credentials": "include" 
    }
  },
  context: ({ req }) => ({ req, pubsub })
});

// mongoose
//   .connect(MONGODB, { useNewUrlParser: true })
//   .then(() => {
//     console.log('MongoDB Connected');
//     return server.listen({ port: PORT });
//   })
//   .then((res) => {
//     console.log(`Server running at ${res.url}`);
//   })
//   .catch(err => {
//     console.error(err)
//   })

// start app
const startApp = async () => {
  try {
      await mongoose.connect(DB, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });
      consola.success({
          message: `Successfully connected to MongoDB Database: \n[ SHARED MISSION DB ]`,
          badge: true
      });
      server.applyMiddleware({app, cors: false});
      app.listen(PORT, () => {
          consola.success({
              message: `Apollo Server Started at: \nhttp://localhost:${PORT}${server.graphqlPath} `,
              badge: true
          }); 
      })
  } catch (error) {
      consola.error({
          message: `Unable to start server: \n${error.message} `,
          badge: true
      });
  }
};

startApp();
