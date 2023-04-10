// code to define the schema of all the collections in database

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storydbSchema = new Schema({
   emailid: String,
   password: String
});

// var storydbSchemaStories = new Schema({
//    storyid : Number,
//    storyName: String,
//    story: String,
//    introduction: String,
//    favourite: Boolean,
//    imgUrl: String
// });

module.exports = mongoose.model('logininfo', storydbSchema);
// module.exports = mongoose.model('storyinfo', storydbSchemaStories);