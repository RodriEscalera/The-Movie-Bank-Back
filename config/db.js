const Sequelize = require("sequelize");

const db = new Sequelize(
  "the_movie_bank",
  "the_movie_bank_user",
  "iOF4iiR4OYUjePf156O9XBt7Cc8Cn5X7",
  {
    logging: false,
    host: "dpg-cei6l2irrk0c3sn7ecgg-a",
    dialect: "postgres",
  }
);

module.exports = db;

/*
  production:


const db = new Sequelize(
  "the_movie_bank",
  "the_movie_bank_user",
  "iOF4iiR4OYUjePf156O9XBt7Cc8Cn5X7",
  {
    logging: false,
    host: "dpg-cei6l2irrk0c3sn7ecgg-a",
    dialect: "postgres",
  }
);



  development: 



const db = new Sequelize("the_movie_bank", "postgres", null, {
  logging: false,
  host: "localhost",
  dialect: "postgres",
});




*/
