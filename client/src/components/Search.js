import React, { Component } from 'react';
import axios from 'axios';
import ArticleInfo from './ArticleInfo';
import ArticleSearch from './ArticleSearch';
import key from '../key';
import { Box, Button } from 'bloomer';
class Search extends Component {
	constructor(props) {
	    super(props)

	    this.state = {
			topic: '',
			startDate: '',
			endDate: '',
			page: '',
			articles: [],
			savedArticles: []
		}
    	this.componentDidMount = this.componentDidMount.bind(this);
 		this.saveArticle = this.saveArticle.bind(this);
 		this.getNewArticles = this.getNewArticles.bind(this);
 		this.deleteArticle = this.deleteArticle.bind(this);
 		this.getSavedArticles = this.getSavedArticles.bind(this);
 	}
	componentDidMount = () => {
		this.getSavedArticles();
	}
	componentDidUpdate = () => this.render();
	handleInputChange = event => {
		let { name, value } = event.target;	
		this.setState({
			[name]: value
		})
		console.log(this.state);
	}
	saveArticle = article => {
		var newArticles = []
		this.state.articles.map(newArticle => {
			if(article.articleID !== newArticle.articleID) {
				newArticles.push(newArticle);
			}
		})
		axios.post("/api/saved", article).then(result => {
			this.setState({articles: newArticles})
			this.getSavedArticles()
		})
	}
	deleteArticle = articleID => {
		var newArticles= [];
		this.state.savedArticles.map(newArticle => {
			if(articleID !== newArticle.articleID) {
				newArticles.push(newArticle);
			}
		})
		axios.delete('api/delete' + articleID)
			.then(result => {
				this.setState({savedArticles: newArticles})
				this.getSavedArticles();
			});
	}
	getSavedArticles = () => {
		console.log('get saved called');
		axios.get("/api/saved")
			.then(results => {
				console.log(results);
				this.setState({savedArticles: results.data})
		})
	}
	getNewArticles = () => {
		var getQueryDate = inputDate => {
			let temp = inputDate.split('-');
			return temp.join('');
		};
		var newArticles = [];
		var startDate = getQueryDate(this.state.startDate);
		var endDate = getQueryDate(this.state.endDate);
		let query = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + key + "&q=" + this.state.topic;
		if(!isNaN(startDate)) {
			query += "&begin_date=" + startDate;
		}
		if(!isNaN(endDate)) {
			query += "&end_date=" + endDate;
		}
		console.log('query', {query: query});
		axios.get(query).then(response=> {
			var newArticles = [];
			response.data.response.docs.map(article => {
				// console.log(article);
				var title = article.headline.main;
				var image = 'https://www.insidehighered.com/sites/default/server_files/media/nyt-t-logo.png';
				var byline = '';
				var url = article.web_url;
				var date = article.pub_date.split("T")[0];
				var snippet = article.snippet;
				var articleID = article._id;
				if(article.multimedia) {
					if(article.multimedia.length>2) {
						image = 'https://nytimes.com/' + article.multimedia[2].url
					}
				} else{console.log("Image does not exist")}
				if(article.byline) {
					byline = article.byline.original
				} else {console.log('Byline does not exist')}
				var newArticle = {
					title: title, 
					image: image, 
					byline: byline, 
					date: date, 
					url: url, 
					snippet: snippet,
					articleID: articleID
				}
				newArticles.push(newArticle);
			});
			return newArticles;
		})
		.then(results=> {
			this.setState({articles: results})
		})
	}
	handleFormSubmit = event => {
		event.preventDefault();
		this.getNewArticles();
	}
	render () {
		return (
			<div style={{position: "relative", top: "250px"}}>
				<a name="#newSearch"></a>
				<ArticleSearch 
					onSubmit={this.handleFormSubmit} 
					onChange={this.handleInputChange} 
					topic={this.state.topic} 
					startDate={this.state.startDate} 
					endDate={this.state.endDate} 
					newSearch={this.newSearch}
				/>
				<div>
					<Box style={{marginTop: '25px'}}><h1 style={{textAlign: 'center'}}><a name="newArticles">Search Results</a></h1></Box>
					<Box>
					{this.state.articles.length === 0 ? (<h1 style={{textAlign: 'center'}}>No search results. </h1>): <h2></h2>}
					{this.state.articles.map(article =>{
						return(
							<ArticleInfo 
								key={article.articleID} 
								image={article.image} 
								byline={article.byline} 
								title={article.title} 
								date={article.date} 
								url={article.url} 
								snippet={article.snippet} 
								buttonColor={'primary'}
								buttonColor2={'primary'}
								buttonFunction2={()=>this.saveArticle(article)} 
								button2Text={'Save Article'}
							/>					
						)
					})}
					</Box>
				</div>
				<div style={{height: '20px'}}></div>
				<div>
					<Box><h1 style={{textAlign: 'center'}}><a name='savedArticles'>Saved Articles</a></h1></Box>
					<Box>
					{this.state.savedArticles.length === 0 ? (<h1 style={{textAlign: 'center'}}>No saved articles. </h1>): <h2></h2>}
					{this.state.savedArticles.map(article => {
						if(article.multimedia) {
							console.log('multimedia', article.multimedia)
						}
						var byline = '';
						if(article.byline) {
							byline = article.byline.main;
						}
						return(
								<ArticleInfo 
									key={article.articleID} 
									image={article.image} 
									byline={article.byline} 
									title={article.title} 
									date={article.date} 
									url={article.url} 
									snippet={article.snippet}
									buttonColor={'primary'}
									buttonColor2={'danger'}
									buttonFunction2={()=>this.deleteArticle(article.articleID)}
									button2Text={'Delete'}
								/>					
						)
					})}
					</Box>
				</div>
			</div>	
		)
	}
} 


export default Search;