const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const travelSpot = require("./data/TravelSpot.json");
const travelDetailsInfo = require("./data/TravelDetailInfo.json");

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

// app.get("/hotels/:id", (req, res) => {
//   const id = req.params.id;
//   const hotel = hotels.find((ht) => ht.id === id);
//   res.send(hotel);
// });

app.get("/hotels", (req, res) => {
  res.send(hotels);
});
app.get("/travel-spot/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const tSpotHotel = hotels.filter((ht) => ht.spot_id === id);
  res.send(tSpotHotel);
});

app.get("/travel-spot", (req, res) => {
  res.send(travelSpot);
});

app.get("/travel-details-info/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedInfo = travelDetailsInfo.find((tdi) => tdi.id === id);
  res.send(selectedInfo);
});
