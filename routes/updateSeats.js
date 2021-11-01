const router = require("express").Router();
const path = require("path");
const Seat = require("../models/seat");

router.patch("/:seatId", async (req, res) => {
  try {
    const updatedSeat = await Seat.updateOne(
      { _id: req.params.seatId },
      { $set: { booked: true } }
    );
    res.json(updatedSeat);
  } catch (err) {
    res.json({ message: err });
  }

  console.log(req.params);
});

module.exports = router;
