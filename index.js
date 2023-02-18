const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("travel guru server");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

const hotels = require("./data/hotels.json");

app.get("/hotels", (req, res) => {
  res.send(hotels);
});
