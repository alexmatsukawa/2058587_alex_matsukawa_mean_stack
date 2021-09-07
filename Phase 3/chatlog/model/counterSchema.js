const mongoose = require('mongoose');
mongoose.pluralize(null);

let counterSchema = mongoose.Schema({
    _id : String,
    sequence_value : Number
})

counterSchema.statics.findAndModify = function(query, sort, doc, options, callback) {
    return this.collection.findAndModify(query, sort, doc, options, callback);
};

let counterModel = mongoose.model("Counter", counterSchema);
module.exports = counterModel;