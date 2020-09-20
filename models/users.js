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
      minlength: 4,
      maxlength: 16,
   },
   email: {
      type: String,
      required: true,
      trim: true,
   },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
