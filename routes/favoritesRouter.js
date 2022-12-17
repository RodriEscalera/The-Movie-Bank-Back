const express = require("express");
const router = express.Router();
const { Favorites } = require("../models/index");

router.post("/addFav", async (req, res) => {
  const { title, image, userId, movieId } = req.body;
  const exists = await Favorites.findOne({ where: { userId, title } });
  if (exists) return res.send(false);
  Favorites.create({ title, image, userId, movieId })
    .then((fav) => {
      res.send(fav);
    })
    .catch((err) => {
      res.send(400);
    });
});

router.post("/verifyFav", async (req, res) => {
  const { userId, title } = req.body;

  const data = await Favorites.findOne({ where: { userId, title } });

  if (data) {
    res.send(true);
  } else {
    res.send(false);
  }
});

router.get("/findFavs/:id", (req, res) => {
  const { id } = req.params;
  Favorites.findAll({ where: { userId: id } })
    .then((favs) => {
      console.log(favs);
      res.send(favs);
    })
    .catch((err) => {
      res.send(400);
    });
});

router.post("/deleteFavs", async (req, res) => {
  console.log(req.body);
  const { title } = req.body;
  const { userId } = req.body;

  const deleteFav = await Favorites.destroy({
    where: {
      title,
      userId,
    },
  });

  console.log(deleteFav);
  if (!deleteFav) return res.sendStatus(400);
  res.sendStatus(200);
});

module.exports = router;
