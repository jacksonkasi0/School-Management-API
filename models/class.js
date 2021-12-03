const mongoose = require("mongoose");

const Class = mongoose.model("class", {
  class_name: {
    type: String,
    required: true,
  },
  class_teacher: {
    type: mongoose.Types.ObjectId,
    ref: "teachers",
  },

  students: [
    {
      type: mongoose.Types.ObjectId,
      ref: "students",
    },
  ],
});

module.exports = Class;
