const mongoose = require("mongoose");

var email_regex =
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
var validateEmail = function (email) {
  return email_regex.test(email);
};

const Student = mongoose.model("students", {
  name: {
    type: String,
    required: true,
  },
  enrollment_date: {
    type: Date,
    default: Date.now(),
  },
  classId: {
    type: mongoose.Types.ObjectId,
    ref: "class",
  },
  class_teacherId: {
    type: mongoose.Types.ObjectId,
    ref: "teachers",
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
      default: "in",
    },
  },
  contact: {
    mobile_no: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: [validateEmail, "is not a valid email"],
      match: email_regex,
    },
  },
});

module.exports = Student;
