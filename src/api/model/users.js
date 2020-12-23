const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for users
let User = new Schema(
  {
    fname: String,
    lname: String,
    Email: String,
    password: String,
  },
  {
    collection: "Users",
  }
);

module.exports = mongoose.model("User", User);
