const express = require("express");
const db = require("./config/db");
const PORT = 5432;
const volleyball = require("volleyball");
const cors = require("cors");
const app = express();
const routes = require("./routes");

///////////

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "https://the-movie-bank.vercel.app",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
  })
);
app.use(volleyball);
app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    app.listen(5432, () => {
      console.log("Listening on port 5432 🚀");
    });
  })
  .catch((err) => {
    console.log(err);
  });
