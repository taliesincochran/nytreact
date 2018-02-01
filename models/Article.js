var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
	'articleID': {
		type: String,
		required: true,
		unique: true
	},
	'title': {
		type: String,
		required: true
	},
	'url': {
		type: String,
		required: true
	},
	'date': {
		type: String
	},
	'image': {
		type: String
	},
	byline: {
		type: String
	},
	snippet: {
		type: String,
		required: true
	}
});
var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;