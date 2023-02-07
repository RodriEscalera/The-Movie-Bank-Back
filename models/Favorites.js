const S = require("sequelize");
const db = require("../config/db");

class Favorites extends S.Model {}

Favorites.init(
  {
    contentId: {
      type: S.INTEGER,
      allowNull: false,
    },
    isMovie: {
      type: S.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;

/*
Favorites.init(
  {
    title: {
      type: S.STRING,
      allowNull: false,
    },
    image: {
      type: S.STRING,
      allowNull: false,
    },
    movieId: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favorites" }
);


*/
