const User = require('../model/User'); // Import User model
const Post = require('../model/Post'); // Import Post model

const resolvers = {
  // Fetch all users, including their associated posts
  users: async () => {
    return await User.findAll({ include: [Post] });
  },

  // Fetch a single user by primary key (ID), including their associated posts
  user: async ({ id }) => {
    return await User.findByPk(id, { include: [Post] });
  },

  // Fetch all posts, including the user associated with each post
  posts: async () => {
    return await Post.findAll({ include: [User] });
  },

  // Fetch a single post by primary key (ID), including the user associated with it
  post: async ({ id }) => {
    return await Post.findByPk(id, { include: [User] });
  },

  // Create a new user with the provided name and email
  createUser: async ({ name, email }) => {
    const user = await User.create({ name, email });
    return user;
  },

  // Create a new post linked to a specific user
  createPost: async ({ userId, title, content, date }) => {
    const post = await Post.create({ userId, title, content, date });
    return post;
  },
};

module.exports = resolvers; 




/*
Sequelize Functions Documentation:

1. findAll:
   - Purpose: Fetches all records from the database table.
   - Usage: `Model.findAll({ options })`
   - Example: `User.findAll({ include: [Post] })`
     Retrieves all users and their associated posts.

2. findByPk:
   - Purpose: Fetches a single record by its primary key (ID).
   - Usage: `Model.findByPk(primaryKey, { options })`
   - Example: `User.findByPk(1, { include: [Post] })`
     Retrieves the user with ID `1` along with their associated posts.

3. create:
   - Purpose: Inserts a new record into the database.
   - Usage: `Model.create({ field1: value1, field2: value2, ... })`
   - Example: `User.create({ name: 'John', email: 'john@example.com' })`
     Creates a new user with the specified name and email.
*/
