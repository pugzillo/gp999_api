require('dotenv').config();  // library to manage environmental variables
const { DATABASE_URL } = process.env; // stores the values process.env.DATABASE_URL 
const path = require('path');

module.exports = {

  development: {
    client: 'postgresql',
    connection: DATABASE_URL, // sets the location of the database 
    migrations: {
      directory : path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory : path.join(__dirname, "src", "db", "seeds"),
    },
  }

};
