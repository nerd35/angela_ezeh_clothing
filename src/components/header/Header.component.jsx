import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<img src={require('../../assets/logo.ico')} alt='logo' className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/shop'>
					CONTACT
				</Link>
				<Link className='option' to='/signin'>
					{currentUser ? (
						<div className='option' onClick={() => auth.signOut()}>
							SIGN OUT
						</div>
					) : (
						<Link className='option' to='/signin'>
							SIGNIN
						</Link>
					)}
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
