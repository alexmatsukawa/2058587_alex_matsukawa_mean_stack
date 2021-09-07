let mongoose = require('mongoose');
mongoose.pluralize(null);

let courseSchema = mongoose.Schema({
    _id : Number,
    cname : String,
    desc : String,
    cost : Number
});

let courseModel = mongoose.model("Course", courseSchema);

module.exports = courseModel;