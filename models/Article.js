var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
	'title': {
		type: String,
		unique: true,
		required: true
	},
	'url': {
		type: String,
		required: true
	}
});
var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;