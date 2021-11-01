const router = require("express").Router();
const path = require("path");
const Seat = require("../models/seat");

router.patch("/:seatNo", async (req, res) => {
  try {
    const updatedSeat = await Seat.updateOne(
      { seatNo: req.params.seatNo },
      { $set: { booked: true } }
    );
    res.json(updatedSeat);
  } catch (err) {
    res.json({ message: err });
  }

  console.log(req.params);
});

module.exports = router;
