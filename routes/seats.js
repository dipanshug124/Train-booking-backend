const router = require("express").Router();
const path = require("path");
const Seat = require("../models/seat");

router.get("/", async (req, res) => {
  try {
    const seat = await Seat.find();
    console.log(seat);
    res.send(seat);
  } catch (err) {
    console.log("Error fetching data: ", err);
  }
});
module.exports = router;
