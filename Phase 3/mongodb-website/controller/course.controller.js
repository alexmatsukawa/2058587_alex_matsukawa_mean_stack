let courseModel = require("../model/course.model");

let getAllCourseInfo = (req, res) => {
    courseModel.find({}, (err, data) => {
        if(!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    })
};

let saveCourseInfo = (req, res) => {
    let course = req.body;
    courseModel.insertMany(course, (err, result) => {
        if(!err) {
            res.send("Course Added Successfully!");
        } else {
            res.send(err);
        }
    })
};

let deleteCourseInfo = (req, res) => {
    let cid = req.params.cid;
    courseModel.deleteOne({course_id : cid}, (err, result) => {
        if(!err) {
            res.send(result);
        } else {
            res.send(err);
        }
    })
};

let updateCourseInfo = (req, res) => {
    let course = req.body;
    courseModel.updateOne({course_id : course.course_id}, {$set : {cost : course.cost}}, (err, result) => {
        if(!err) {
            res.send(result);
        } else {
            res.send(err);
        }
    })
};

module.exports = {getAllCourseInfo, saveCourseInfo, deleteCourseInfo, updateCourseInfo};