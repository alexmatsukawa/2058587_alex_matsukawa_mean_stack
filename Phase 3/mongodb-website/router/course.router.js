let express = require('express');
let router = express.Router();

let courseController = require("../controller/course.controller");

router.post("/addCourse", courseController.saveCourseInfo);
router.delete("/deleteCourse/:cid", courseController.deleteCourseInfo);
router.put("/updateCourse", courseController.updateCourseInfo);
router.get("/getCourseList", courseController.getAllCourseInfo);

module.exports = router;