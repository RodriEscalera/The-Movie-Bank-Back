const express = require("express");
const { generateToken } = require("../config/token");
const validateUser = require("../middlewares/validateUser");
const router = express.Router();
const { User } = require("../models/index");
router.get("/getAll", (req, res) => {
  User.findAll().then((usuarios) => {
    res.send(usuarios);
  });
});

router.get("/test", (req, res) => {
  res.send("Hello world");
});

router.post("/testpost", (req, res) => {
  const { text } = req.body;
  res.send("Hello bro, your text is " + text);
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const exists = await User.findOne({ where: { email } });
  if (exists === null) {
    User.create({
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      password,
    })
      .then((usuarioNuevo) => {
        res.send(usuarioNuevo);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  } else {
    res.send(false);
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.send(400);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.send(400);
      const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
      };
      const token = generateToken(payload);
      res.send([payload, token]);
    });
  });
});

router.post("/me", validateUser, (req, res) => {
  res.send(req.user);
});

// router.post("/logOut", (req, res) => {
//   res.clearCookie("token");
//   res.sendStatus(204);
// });
module.exports = router;
