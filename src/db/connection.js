const env = process.env.NODE_ENV || "development"; // determines the current environment where the app code runs
const config =  require("../../knexfile")[env]; // stores the database config object from knexfile
const knex = require("knex")(config);

module.exports = knex;