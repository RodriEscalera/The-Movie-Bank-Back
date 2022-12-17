const Sequelize = require("sequelize");

const db = new Sequelize("the_movie_bank", "postgres", null, {
  logging: false,
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
