const Sequelize = require("sequelize"); 

const sequelize = new Sequelize("Vahan", "postgres", "Anurag@postgreSQL", {
  host: "localhost",
  dialect: "postgres",
});
module.exports = sequelize; 
