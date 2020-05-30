import React from 'react';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import './App.css';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Switch } from 'react-router-dom';

import { auth } from './firebase//firebase.utils';

class App extends React.Component {
	constructor(){
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null


	componentDidMount() {
		this.unsubscribeFromAuth = 	auth.onAuthStateChanged( user => {
			this.setState({ currentUser: user });

			console.log(user);
		})
	}

	conponentTillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
