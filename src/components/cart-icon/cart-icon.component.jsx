import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<img src={require('../../assets/cart.ico')} alt='logo' className='shopping-icon' />
		<span className='item-count'> {itemCount} </span>
	</div>
);

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
