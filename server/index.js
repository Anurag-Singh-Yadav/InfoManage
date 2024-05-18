const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/config");
const entityRoutes = require("./routes/routes");
dotenv = require("dotenv").config();
const app = express();

// Middleware
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

// Routes
app.use(`/${process.env.BASE_KEY}`, entityRoutes);

// Sync models with database
sequelize
  .sync({ force: true }) // set force: true to drop tables on every restart
  .then(() => {
    console.log("Database & tables synced");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});