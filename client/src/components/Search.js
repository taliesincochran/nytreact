import React, { Component } from 'react';
import axios from 'axios';
import ArticleSearch from './ArticleSearch';
import NewArticles from './NewArticles';
import key from '../key';
class Search extends Component {
	state = {
		topic: '',
		startDate: '',
		endDate: '',
		articles: [],
		savedArticles: []
	}
	handleInputChange = event => {
		let { name, value } = event.target;	
		this.setState({
			[name]: value
		})
		console.log(this.state);

	}
	handleFormSubmit = event => {
		event.preventDefault();	
		let queryStartDate;
		let queryEndDate;
		let tempStartDate = this.state.startDate.split('-');
		queryStartDate = tempStartDate.join('');
		let tempEndDate = this.state.endDate.split('-');
		queryEndDate = tempEndDate.join('');
		console.log(queryStartDate);
		console.log(queryEndDate);
		var results = [];
		let query = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + key + "&q=" + this.state.topic;
		if(!isNaN(queryStartDate)) {
			query += "&begin_date=" + queryStartDate;
		}
		if(!isNaN(queryEndDate)) {
			query += "&end_date=" + queryEndDate;
		}
		console.log({query: query});
		axios.get(query).then(response=> {
			response.data.response.docs.map(article => {
				console.log(article);
				results.push(article);
			});
		}).then(response => {
			this.setState({articles: results})
			console.log(this.state)
		})
	}
	render() {
		return (
			<div>
				<ArticleSearch onSubmit={this.handleFormSubmit.bind(this)} onChange={this.handleInputChange.bind(this)} topic={this.state.topic} startDate={this.state.startDate} endDate={this.state.endDate} />
				<div>
					{this.state.articles.map(article =>{
						return(
							<NewArticles key={article._id} image={article.multimedia[0].url} byline={article.byline.main} title={article.headline.main} date={article.pub_date.split("T")[0]} url={article.web_url} snippet={article.snippet} section={article.new_desk} />
						)
						
					})}
				</div>

			</div>	
		)
	}
} 


export default Search;