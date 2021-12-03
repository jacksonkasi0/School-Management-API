const Class = require("../models/class");
const Student = require("../models/student");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("student router is working!");
});

router.post("/add", async (req, res) => {
  try {
    const student = await Student(req.body);
    const studentData = await student.save();

    const classData = await Class.findOneAndUpdate(
      { _id: studentData.classId },

      {
        $push: { students: studentData._id },
        class_teacher: studentData.class_teacherId, 
      },

      { new: true }
    );
    
    res.json({ Student: studentData, Class: classData });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Student.find({})
      .populate("classId", "class_name -_id")
      .populate("class_teacherId", "name contact -_id")
      .select("name -_id");
    res.json(data);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
