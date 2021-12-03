const mongoose = require("mongoose");

var email_regex =
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
var validateEmail = function (email) {
  return email_regex.test(email);
};
 
const Teacher = mongoose.model("teachers", {
  name: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    require: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  contact: {
    mobile_no: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      validate: [validateEmail, "is not a valid email"],
      match: email_regex,
    },
  },
});

module.exports = Teacher;
