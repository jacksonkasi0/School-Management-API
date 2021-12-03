const Class = require("../models/class");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("class router is working!");
});

router.post("/add", async (req, res) => {
  try {
    const classs = await Class.create(req.body);
    res.json(classs);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Class.find({})
      .populate("students", "name enrollment_date")
      .populate("class_teacher", "name experience").select("-__v");
    res.json(data);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
