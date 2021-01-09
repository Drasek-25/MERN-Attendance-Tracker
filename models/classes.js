const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
   teacher: {
      type: String,
      required: true,
   },
   classes: [
      {
         name: {
            type: String,
         },
         enrolledStudents: [
            {
               name: String,
            },
         ],
         dates: [
            {
               date: {
                  type: Date,
               },
               students: [
                  {
                     name: {
                        type: String,
                     },
                     attended: {
                        type: Boolean,
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
