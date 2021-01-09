const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: {
      type: String,
      required: true,
      trim: true,
   },
   password: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 256,
   },
   email: {
      type: String,
      required: true,
      trim: true,
   },
   classes: {
      type: String,
      required: false,
      trim: true,
   },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
