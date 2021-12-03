const Teacher = require("../models/teacher");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("teacher router is working!");
});

router.post("/add", async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.json(teacher);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Teacher.find({}).select(" -__v");
    res.json(data)
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
