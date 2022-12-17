const express = require("express");
const db = require("./config/db");
const PORT = 3001;
const volleyball = require("volleyball");
const cors = require("cors");
const app = express();
const routes = require("./routes");

///////////

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(volleyball);
app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    app.listen(3001, () => {
      console.log("Listening on port 3001 🚀");
    });
  })
  .catch((err) => {
    console.log(err);
  });
