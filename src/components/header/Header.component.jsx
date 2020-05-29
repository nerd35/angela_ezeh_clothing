import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {
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
			</div>
		</div>
	);
};

export default Header;
