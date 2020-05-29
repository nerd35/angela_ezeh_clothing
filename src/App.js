import React from 'react';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';
import './App.css';
import { Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
};

export default App;
