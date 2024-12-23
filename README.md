# GraphQL Mini-Blog

This project is a **GraphQL API** for a blogging platform that uses:
- **Node.js** for the server.
- **GraphQL** as the query language.
- **PostgreSQL** for the database.
- **Sequelize** as the ORM for database management.

---

## Features

- Create and fetch users.
- Create and fetch posts.
- Each post is associated with a user.
- Automatic date handling for posts.
- Error handling for missing users.

---

## Prerequisites

- Node.js (v14 or later)
- PostgreSQL installed and running

---


## Folder structure

graphql-miniblog/
├── index.js          # Main server file that combines all functionality
├── config/
│   └── sequelize.js  # Database connection configuration
├── models/           # Contains Sequelize models for database tables
│   ├── User.js       # User model
│   └── Post.js       # Post model
├── schema/           # GraphQL schema and resolvers
│   ├── schema.js     # GraphQL schema definition
│   └── resolvers.js  # GraphQL resolvers for queries and mutations
├── README.md         # Documentation for the project
├── package.json      # Project metadata and dependencies
└── node_modules/     # Installed npm packages (auto-generated)



---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/graphql-miniblog.git
   cd graphql-miniblog

Install dependencies:


2. Install dependencies:
    ```bash
    npm install

3. Configure the database connection:
    Open index.js and update the database credentials:

      ```bash
    npm install
4. Start the server:
    ```bash
    npm start

---

## GraphQL API Usage
The GraphQL Playground will be available at:
 ```bash
  http://localhost:4000/graphql
```
---
## Example Queries and Mutations
Fetch All Users

 ```bash
query {
  users {
    id
    name
    email
    posts {
      id
      title
      content
      date
    }
  }
}

```

---
Fetch a Single User by ID

 ```bash
query {
  user(id: 1) {
    id
    name
    email
    posts {
      title
      content
      date
    }
  }
}

```
---

Create a New User

 ```bash
mutation {
  createUser(name: "John Doe", email: "john@example.com") {
    id
    name
    email
  }
}

```
---

Create a New Post

 ```bash
mutation {
  createPost(userId: 1, title: "My First Post", content: "This is the content of my first post.") {
    id
    title
    content
    date
  }
}

```
---

Fetch All Posts

 ```bash
query {
  posts {
    id
    title
    content
    date
    user {
      id
      name
    }
  }
}

```
---

## How It Works

1. The server runs on http://localhost:4000/graphql.
2. GraphQL schema defines types for User and Post, with relationships.
3. Sequelize manages the database models and relationships:
4. A User can have many Posts.
5. Each Post has a foreign key (userId) linking it to a User.

Database Schema: 
## Users Table

| Field | Type    | Description           |
|-------|---------|-----------------------|
| id    | INTEGER | Primary Key           |
| name  | STRING  | User's name           |
| email | STRING  | Unique user email     |

## Posts Table

| Field   | Type    | Description                              |
|---------|---------|------------------------------------------|
| id      | INTEGER | Primary Key                             |
| title   | STRING  | Title of the post                       |
| content | TEXT    | Content of the post                     |
| date    | DATE    | Automatically set date/time             |
| userId  | INTEGER | Foreign key referencing the User table  |


