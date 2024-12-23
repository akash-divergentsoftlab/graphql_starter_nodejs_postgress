const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./User');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

// Define relationships
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

module.exports = Post;




/*
Available Sequelize DataTypes:

1. INTEGER: A standard integer data type.
2. BIGINT: A larger integer type for very large numbers.
3. FLOAT: A floating-point number.
4. DOUBLE: A more precise floating-point number.
5. DECIMAL: A fixed-point number with customizable precision.
6. STRING: A variable-length string (default 255 characters).
7. TEXT: A longer text field (no length limit).
8. BOOLEAN: A true/false field.
9. DATE: A date and time field.
10. DATEONLY: A date field without a time component.
11. UUID: A universally unique identifier.
12. ENUM: A predefined set of string values.
    Example: `DataTypes.ENUM('value1', 'value2')`
13. JSON: A field that stores JSON objects or arrays.
14. BLOB: A binary large object for storing binary data like files or images.
15. ARRAY: An array of a specified type (PostgreSQL only).
    Example: `DataTypes.ARRAY(DataTypes.STRING)`
16. GEOMETRY: A field for geographic spatial data.
17. VIRTUAL: A virtual field not stored in the database but computed dynamically.
    Example: `DataTypes.VIRTUAL(DataTypes.STRING, ['dependencyField'])`
18. TIME: A time field (hours, minutes, seconds).
19. SMALLINT: A smaller integer data type.
20. CHAR: A fixed-length string.
21. TINYINT: A very small integer data type.

For more details, refer to the Sequelize documentation: https://sequelize.org/docs/v6/
*/