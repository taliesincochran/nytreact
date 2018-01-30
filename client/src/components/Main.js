import React from 'react';
import Head from './Head';
import Foot from './Foot';
import Search from './Search';
import NewArticles from './NewArticles';
import SavedArticles from './SavedArticles';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
const Main = props => {
	return (
		<div>
			<Head />
				<BrowserRouter>
					<Switch>
						<Route component={Search} exact path = "/" />
						<Route component={NewArticles} exact path ="/newArticles" />
						<Route component={SavedArticles} exact path = "/savedArticles" />
					</Switch>
				</BrowserRouter>
			<Foot />
		</div>
	)
}
export default Main;