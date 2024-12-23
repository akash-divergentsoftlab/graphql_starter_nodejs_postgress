const { Sequelize } = require('sequelize');

// Connect to PostgreSQL
const sequelize = new Sequelize('graphqlminiblog', 
  'admin', // username of database postgress
  'admin', // password of database postgress
   {
  host: 'localhost',
  dialect: 'postgres',
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL database.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
