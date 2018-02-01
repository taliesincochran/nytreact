var express = require('express');
var router = express.Router();
const Article = require("../models/Article");
var axios = require('axios');
router.get("/", (req,res) => {
	res.sendFile(process.cwd() + "/public/index.html");
});
router.get("/api/saved", (req,res) => {
	Article.find().then(result => {
		var data = [];
		result.forEach(article=> {
			data.push({
				title: article.title,
				url: article.url,
				date: article.date,
				articleID: article.articleID,
				byline: article.byline,
				image: article.image,
				snippet: article.snippet
			})
		})
		console.log("Data", data);
		res.send(data);
	})
});
router.post("/api/saved", (req,res) => {
	console.log(req.body);
	var body = req.body;
	console.log("article to save: ", body)
	Article.findOneAndUpdate(
		{articleID: body.articleID},
		body, 
		{upsert: true}, 
		err=> {
			if(err) {
				console.log(err);
			}
		}
	)
	res.send(200)

});
router.delete('/api/delete:id', (req,res) => {
	Article.remove(
		{articleID: req.params.id},
		err=> {
			if(err) {
				console.log(err);
			}
		}
	)
	res.send(200);
})

module.exports = router;
