const Sequelize = require("sequelize");
require('dotenv').config(); 
const database = process.env.DATABASE
const userName = process.env.USER
const password = process.env.PASSWORD
const sequelize = new Sequelize(database, userName, password, {
  host: "localhost",
  dialect: "postgres",
});
module.exports = sequelize;