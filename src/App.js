import React from 'react';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import './App.css';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase//firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
							id: snapShot.id,
							...snapShot.data()
					});
				});
			}
			setCurrentUser( userAuth );
		});
	}

	conponentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
