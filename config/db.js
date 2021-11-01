require("dotenv").config();
const mongoose = require("mongoose");
function connectDB() {
  // Database connection
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongoose.connection
    .once("open", () => {
      console.log("Database connected");
    })
    .on("error", (err) => {
      console.log("Error ", err);
    });
}
module.exports = connectDB;
