require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

const connectDB = require("./config/db");
connectDB();
app.use(cors());
app.use("/update-seat", require("./routes/updateSeats"));
app.use("/seats", require("./routes/seats"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
