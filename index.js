const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const resolvers = require('./schema/resolvers');
const sequelize = require('./model/sequelize');

// Sync database: Updates the database schema to match models
// `force` drops existing tables if true, `alter` updates schema without dropping data
sequelize.sync({ force: false,alter: true }).then(() => {
  console.log('Database connected and synced!');
});

const app = express();

// GraphQL Middleware: Sets up the '/graphql' endpoint to handle GraphQL queries
// Parameters:
// - `schema`: GraphQL schema definition
// - `rootValue`: Resolvers for handling schema operations
// - `graphiql`: Enables the GraphiQL in-browser tool for testing
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

// Start server: Runs the app on port 4000 and logs the GraphQL endpoint
app.listen(4000, () => {
  console.log('Server running at http://localhost:4000/graphql');
});
