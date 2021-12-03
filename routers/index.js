const router = require("express").Router();

const classRouter = require("./class");
const teacherRouter = require("./teacher");
const studentRouter = require("./student");

router.get("/", (req, res) => {
  res.json("School Management API Router is Working!");
});

router.use("/class", classRouter);
router.use("/teacher", teacherRouter);
router.use("/student", studentRouter);

module.exports = router;
