const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttendenceSchema = new Schema({
   date: {
      type: Date,
      required: true,
      trim: true,
   },
   attended: {
      type: Boolean,
      required: true,
   },
});

const StudentSchema = new Schema({
   name: {
      type: String,
      required: true,
      trim: true,
   },
   attendence: {
      type: [AttendenceSchema],
      required: true,
   },
});

const ClassSchema = new Schema({
   name: {
      type: String,
      required: true,
      trim: true,
   },
   students: {
      type: [StudentSchema],
      required: true,
   },
   email: {
      type: String,
      required: true,
      trim: true,
   },
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
