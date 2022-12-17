const { User, Favorites } = require("../models/index");
const express = require("express");
const userRouter = require("./userRouter");
const favoritesRouter = require("./favoritesRouter");

const router = express.Router();
router.use("/user", userRouter);
router.use("/favorites", favoritesRouter);

module.exports = router;
