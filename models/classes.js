const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
   teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },
   classes: [
      {
         name: {
            type: String,
            required: true,
            trim: true,
         },
         enrolledStudents: [
            {
               name: String,
               required: true,
               trim: true,
            },
         ],
         dates: [
            {
               date: {
                  type: Date,
                  required: true,
               },
               students: [
                  {
                     name: {
                        type: String,
                        required: true,
                        trim: true,
                     },
                     attended: {
                        type: Boolean,
                        required: true,
                     },
                  },
               ],
            },
         ],
      },
   ],
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
