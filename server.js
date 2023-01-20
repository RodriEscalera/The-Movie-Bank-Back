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
    origin: "https://the-movie-bank.vercel.app",
    credentials: true,
  })
);
app.use(volleyball);
app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

/*
const PORT = 5432;
  
  app.use(
  cors({
    origin: "https://the-movie-bank.vercel.app",
    credentials: true,
  })
);
  */
