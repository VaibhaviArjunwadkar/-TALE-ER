// code to define the schema of all the collections in database

const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var favoritedbSchemaStories = new Schema({
   storyid : Number,
   storyName: String,
   story: String,
   introduction: String,
   imgUrl: String
});

// module.exports = mongoose.model('logininfo', storydbSchema);
module.exports = mongoose.model('favoriteinfo', favoritedbSchemaStories);