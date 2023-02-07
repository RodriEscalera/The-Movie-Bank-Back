const express = require("express");
const router = express.Router();
const { Favorites } = require("../models/index");

router.post("/addFav", async (req, res) => {
  const { userId, contentId, isMovie } = req.body;
  const exists = await Favorites.findOne({
    where: { userId, contentId, isMovie },
  });
  if (exists) return res.send(false);
  Favorites.create({ userId, contentId, isMovie })
    .then((fav) => {
      res.send(fav);
    })
    .catch((err) => {
      res.sendStatus(400);
    });
});

router.post("/verifyFav", async (req, res) => {
  const { userId, contentId, isMovie } = req.body;
  const data = await Favorites.findOne({
    where: { userId, contentId, isMovie },
  });

  if (data) {
    res.send(true);
  } else {
    res.send(false);
  }
});

router.get("/findFavs/:id", async (req, res) => {
  const { id } = req.params;
  if (id !== null) {
    const query = await Favorites.findAll({ where: { userId: id } });
    //console.log(query);
    res.send(query);
  } else {
    res.send(400);
  }
});

router.post("/deleteFavs", async (req, res) => {
  //console.log(req.body);
  const { contentId } = req.body;
  const { userId } = req.body;
  const { isMovie } = req.body;

  const deleteFav = await Favorites.destroy({
    where: {
      contentId,
      userId,
      isMovie,
    },
  });

  //console.log(deleteFav);
  if (!deleteFav) return res.sendStatus(400);
  res.sendStatus(200);
});

module.exports = router;
//
